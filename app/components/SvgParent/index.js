/**
*
* SvgParent
*
*/

import React from 'react';


import styles from './styles.css';


export const SvgParent = (props) => (
  <svg
    viewBox="0 0 50 50" width="50" height="50"
    className={styles.svgParent}
  >
    {props.children}
  </svg>);

SvgParent.propTypes = {
  children: React.PropTypes.node,
};

export default SvgParent;
