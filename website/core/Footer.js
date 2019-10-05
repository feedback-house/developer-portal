/**
 * Copyright (c) 2017-present, Entria, Feedback Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    // TODO: Temp hack until we understand how language works   
    // return `${baseUrl}${docsPart}${langPart}${doc}`;
    return `${baseUrl}${docsPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <div>
            <h5>Documents</h5>
            <a href='/'>
              Home
            </a>
            <a href={this.docUrl('getting-started', this.props.language)}>
              Getting Started 
            </a>
            <a href={this.docUrl('api-getting-started', this.props.language)}>
              API Reference
            </a>
          </div>
          <div>
            <h5>Community</h5>
            {/*
            <a href={this.pageUrl('users.html', this.props.language)}>
              User Showcase
            </a>
            */}
            <a href="https://feedback.house">
              Feedback House
            </a>
            <a
              href="https://twitter.com/feedback_house"
              target="_blank"
              rel="noreferrer noopener">
              Twitter
            </a>
          </div>
          <div>
            <h5>More</h5>
            {/*
            <a href={`${this.props.config.baseUrl}blog`}>Developer Blog</a>
            */}
            <a href="https://github.com/feedback-house/">GitHub</a>
            <a
              className="github-button"
              href={this.props.config.repoUrl}
              data-icon="octicon-star"
              data-count-href="feedback-house/developer-portal/stargazers"
              data-show-count="true"
              data-count-aria-label="# stargazers on GitHub"
              aria-label="Star this project on GitHub">
              Star
            </a>
            {this.props.config.twitterUsername && (
              <div className="social">
                <a
                  href={`https://twitter.com/${
                    this.props.config.twitterUsername
                  }`}
                  className="twitter-follow-button">
                  Follow @{this.props.config.twitterUsername}
                </a>
              </div>
            )}
          </div>
        </section>
        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
