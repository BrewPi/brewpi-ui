/**
*
* FlowArrows
*
*/

import React from 'react';
import styles from './styles.css';

const SvgArrows = {
  n: <polyline key="n" points="21 10.5 25 14.5 29 10.5" />,
  w: <polyline key="w" points="10.5 21 14.5 25 10.5 29" />,
  s: <polyline key="s" points="29 39.5 25 35.5 21 39.5" />,
  e: <polyline key="e" points="39.5 21 35.5 25 39.5 29" />,
  N: <polyline key="N" points="21 14.5 25 10.5 29 14.5" />,
  W: <polyline key="W" points="14.5 21 10.5 25 14.5 29" />,
  S: <polyline key="S" points="29 35.5 25 39.5 21 35.5" />,
  E: <polyline key="E" points="35.5 21 39.5 25 35.5 29" />,
};

const SvgArrowsBridge = {
  e: <polyline key="e" points="43.5 21 39.5 25 43.5 29" />,
  E: <polyline key="E" points="39.5 21 43.5 25 39.5 29" />,
  W: <polyline key="w" points="10.5 21 6.5 25 10.5 29" />,
  w: <polyline key="W" points="6.5 21 10.5 25 6.5 29" />,
};

function pickArrows(flow, arrows) {
  const picked = [];
  for (const ch of flow) {
    picked.push(arrows[ch]);
  }
  return picked;
}

/* Renders flow arrows, to be used inside an svg tag
 * flow is a string containing the letters NESW.
 * lowercase is inflow, uppercase is outflow
 */
export const FlowArrows = (props) => {
  const flow = props.flow || '';
  const arrows = pickArrows(flow, SvgArrows);
  return (
    <g className={styles.flowArrows}>
      {arrows}
    </g>
  );
};
FlowArrows.propTypes = {
  flow: React.PropTypes.string,
};

/* Renders flow arrows, to be used inside an svg tag
 * flow is a string containing the letters NESW.
 * lowercase is inflow, uppercase is outflow
 */
export const FlowArrowsBridge = (props) => {
  const flow = props.flow || '';
  const arrows = pickArrows(flow, SvgArrowsBridge);
  return (
    <g className={styles.flowArrows}>
      {arrows}
    </g>
  );
};
FlowArrowsBridge.propTypes = {
  flow: React.PropTypes.string,
};

export default {
  FlowArrowsBridge,
  FlowArrows,
};
