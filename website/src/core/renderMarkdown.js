/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import _ from 'lodash';
import hljs from 'highlight.js';
import {Remarkable as Markdown} from 'remarkable';
import {linkify} from 'remarkable/linkify';
import prismjs from 'prismjs';
import loadLanguages from 'prismjs/components/index';
import chalk from 'chalk';
import anchors from './anchors';

// const CWD = process.cwd();

const alias = {
  js: 'jsx',
  html: 'markup',
  sh: 'bash',
  md: 'markdown',
};

class MarkdownRenderer {
  constructor(siteConfig) {
    // const siteConfig = require(`${CWD}/docusaurus.config.js`);
    let markdownOptions = {
      // Highlight.js expects hljs css classes on the code element.
      // This results in <pre><code class="hljs css languages-jsx">
      langPrefix: 'hljs css language-',
      highlight(str, lang) {
        // User's own custom highlighting function
        if (siteConfig.highlight && siteConfig.highlight.hljs) {
          siteConfig.highlight.hljs(hljs);
        }
        // Fallback to default language
        lang =
          lang || (siteConfig.highlight && siteConfig.highlight.defaultLang);
        if (lang === 'text') {
          return str;
        }
        if (lang) {
          try {
            if (
              siteConfig.usePrism === true ||
              (siteConfig.usePrism &&
                siteConfig.usePrism.length > 0 &&
                siteConfig.usePrism.indexOf(lang) !== -1)
            ) {
              const language = alias[lang] || lang;
              try {
                // Currently people using prismjs on Node have to individually require()
                // every single language (https://github.com/PrismJS/prism/issues/593)
                loadLanguages([language]);
                return prismjs.highlight(
                  str,
                  prismjs.languages[language],
                  language,
                );
              } catch (err) {
                if (err.code === 'MODULE_NOT_FOUND') {
                  const unsupportedLanguageError = chalk.yellow(
                    `Warning: ${chalk.red(
                      language,
                    )} is not supported by prismjs.` +
                      '\nPlease refer to https://prismjs.com/#languages-list for the list of supported languages.',
                  );
                  console.log(unsupportedLanguageError);
                } else console.error(err);
              }
            }
            if (hljs.getLanguage(lang)) {
              return hljs.highlight(lang, str).value;
            }
          } catch (err) {
            console.error(err);
          }
        }

        try {
          return hljs.highlightAuto(str).value;
        } catch (err) {
          console.error(err);
        }

        return '';
      },
      html: true,
    };

    // Allow overriding default options
    if (siteConfig.markdownOptions) {
      markdownOptions = _.merge(
        {},
        markdownOptions,
        siteConfig.markdownOptions,
      );
    }

    const md = new Markdown(markdownOptions);

    // Register anchors plugin
    md.use(anchors, siteConfig.slugPreprocessor);

    // Linkify
    md.use(linkify);

    // Allow client sites to register their own plugins
    if (siteConfig.markdownPlugins) {
      siteConfig.markdownPlugins.forEach((plugin) => {
        md.use(plugin);
      });
    }

    this.md = md;
  }

  toHtml(source) {
    const html = this.md.render(source);

    // Ensure fenced code blocks use Highlight.js hljs class
    // https://github.com/jonschlinkert/remarkable/issues/224
    return html.replace(/<pre><code>/g, '<pre><code class="hljs">');
  }
}

let renderMarkdown = null;

export default (siteConfig, source) => {
  if (!renderMarkdown) {
    renderMarkdown = new MarkdownRenderer(siteConfig);
  }

  renderMarkdown.toHtml(source);
}
