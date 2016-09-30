/**
*
* SvgParent
*
*/

import React from 'react';
import styles from './styles.css';

export const SvgParent = (props) => {
  const viewBox = props.viewBox ? props.viewBox : '0 0 50 50';
  const dims = viewBox.split(' ');
  const style = { width: `${dims[2]}px`, height: `${dims[3]}px` };
  return (
    <svg
      viewBox={viewBox}
      className={styles.svgParent}
      style={style}
    >
      {props.children}
    </svg>
  );
};

SvgParent.propTypes = {
  children: React.PropTypes.node,
  viewBox: React.PropTypes.string,
};

export default SvgParent;
