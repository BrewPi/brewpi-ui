/**
*
* SvgParent
*
*/

import React from 'react';
import styles from './styles.css';

export const SvgParent = (props) => {
  const viewbox = props.viewbox ? props.viewbox : '0 0 50 50';
  const dims = viewbox.split(' ');
  const style = { width: `${dims[2]}px`, height: `${dims[3]}px` };
  return (
    <svg
      viewbox={viewbox}
      className={styles.svgParent}
      style={style}
    >
      {props.children}
    </svg>
  );
};

SvgParent.propTypes = {
  children: React.PropTypes.node,
  viewbox: React.PropTypes.string,
};

export default SvgParent;
