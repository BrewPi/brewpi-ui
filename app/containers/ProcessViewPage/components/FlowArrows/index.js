/**
*
* FlowArrows
*
*/

import React from 'react';
import styles from './styles.css';

const SvgArrows = {
  t: <polyline key="t" points="21 10.5 25 14.5 29 10.5" />,
  l: <polyline key="l" points="10.5 21 14.5 25 10.5 29" />,
  b: <polyline key="b" points="29 39.5 25 35.5 21 39.5" />,
  r: <polyline key="r" points="39.5 21 35.5 25 39.5 29" />,
  T: <polyline key="T" points="21 14.5 25 10.5 29 14.5" />,
  L: <polyline key="L" points="14.5 21 10.5 25 14.5 29" />,
  B: <polyline key="B" points="29 35.5 25 39.5 21 35.5" />,
  R: <polyline key="R" points="35.5 21 39.5 25 35.5 29" />,
};

const SvgArrowsBridge = {
  l: <polyline key="l" points="6.5 21 10.5 25 6.5 29" />,
  r: <polyline key="r" points="43.5 21 39.5 25 43.5 29" />,
  L: <polyline key="L" points="10.5 21 6.5 25 10.5 29" />,
  R: <polyline key="R" points="39.5 21 43.5 25 39.5 29" />,
};

function pickArrows(flows, arrows) {
  if (typeof flows === 'undefined') {
    return undefined;
  }
  let combinedAsString = '';
  for (const flow of flows.values()) {
    if (flow.liquid !== 'conflict') {
      for (const [inEdge, outEdges] of Object.entries(flow.dir)) {
        combinedAsString += inEdge;
        combinedAsString += outEdges.toUpperCase();
      }
    }
  }
  const picked = [];
  for (const ch of combinedAsString) {
    picked.push(arrows[ch]);
  }
  return picked;
}

/* Renders flow arrows, to be used inside an svg tag
 * flow is a string containing the letters NESW.
 * lowercase is inflow, uppercase is outflow
 */
export const FlowArrows = (props) => {
  const arrows = pickArrows(props.flows, SvgArrows);
  return (
    <g className={styles.flowArrows}>
      {arrows}
    </g>
  );
};
FlowArrows.propTypes = {
  flows: React.PropTypes.array,
};

/* Renders flow arrows, to be used inside an svg tag
 * flow is a string containing the letters NESW.
 * lowercase is inflow, uppercase is outflow
 */
export const FlowArrowsBridge = (props) => {
  const arrows = pickArrows(props.flows, SvgArrowsBridge);
  return (
    <g className={styles.flowArrows}>
      {arrows}
    </g>
  );
};
FlowArrowsBridge.propTypes = {
  flows: React.PropTypes.array,
};

export default {
  FlowArrowsBridge,
  FlowArrows,
};
