/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import React from 'react';
import renderMarkdown from './renderMarkdown';

const Remarkable = (props) => {
  const {siteConfig} = useDocusaurusContext();

  const content = () => {
    if (props.source) {
      return (
        <span
          dangerouslySetInnerHTML={{
            __html: renderMarkdown(siteConfig, props.source),
          }}
        />
      );
    }

    return React.Children.map(props.children, (child) => {
      if (typeof child === 'string') {
        return (
          <span dangerouslySetInnerHTML={{__html: renderMarkdown(siteConfig, child)}} />
        );
      }

      return child;
    });
  }

  const Container = props.container;
  return <Container>{content()}</Container>;
}

Remarkable.defaultProps = {
  container: 'div',
};

export default Remarkable;
