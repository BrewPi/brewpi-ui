/**
*
* FlowArrows
*
*/

import React from 'react';
import styles from './styles.css';

const SvgArrows = {
  n: <polyline points="21 10.5 25 14.5 29 10.5" />,
  E: <polyline points="35.5 21 39.5 25 35.5 29" />,
  s: <polyline points="29 39.5 25 35.5 21 39.5" />,
  W: <polyline points="14.5 21 10.5 25 14.5 29" />,
  N: <polyline points="21 14.5 25 10.5 29 14.5" />,
  e: <polyline points="39.5 21 35.5 25 39.5 29" />,
  S: <polyline points="29 35.5 25 39.5 21 35.5" />,
  w: <polyline points="10.5 21 14.5 25 10.5 29" />,
};

/* Renders flow arrows, to be used inside an svg tag
 * flow is a string containing the letters NESW.
 * lowercase is inflow, uppercase is outflow
 */
export const FlowArrows = (props) => {
  const flow = props.flow || '';
  const arrows = [];
  for (const ch of flow) {
    arrows.push(SvgArrows[ch]);
  }
  return (
    <g className={styles.flowArrows}>
      {arrows}
    </g>
  );
};
FlowArrows.propTypes = {
  flow: React.PropTypes.string,
};

export default FlowArrows;

