/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react'
import Remarkable from './Remarkable'

/**
 * The MarkdownBlock component is used to parse markdown and render to HTML.
 */
const MarkdownBlock = (props) => {
  return <Remarkable source={props.children} />;
}

export default MarkdownBlock;
