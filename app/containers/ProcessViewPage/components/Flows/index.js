/**
*
* FlowArrows
*
*/

import React from 'react';
import styles from './styles.css';
import stylesBridge from './stylesBridge.css';

const SvgArrows = {
  t: <polyline className={styles.moveDown} key="t" points="21 10.5 25 14.5 29 10.5" />,
  l: <polyline className={styles.moveRight} key="l" points="10.5 21 14.5 25 10.5 29" />,
  b: <polyline className={styles.moveUp} key="b" points="29 39.5 25 35.5 21 39.5" />,
  r: <polyline className={styles.moveLeft} key="r" points="39.5 21 35.5 25 39.5 29" />,
  T: <polyline className={styles.moveUp} key="T" points="21 14.5 25 10.5 29 14.5" />,
  L: <polyline className={styles.moveLeft} key="L" points="14.5 21 10.5 25 14.5 29" />,
  B: <polyline className={styles.moveDown} key="B" points="29 35.5 25 39.5 21 35.5" />,
  R: <polyline className={styles.moveRight} key="R" points="35.5 21 39.5 25 35.5 29" />,
};

const SvgArrowsBridge = {
  l: <polyline className={stylesBridge.moveRightUp} key="l" points="6.5 21 10.5 25 6.5 29" />,
  r: <polyline className={stylesBridge.moveLeftUp} key="r" points="43.5 21 39.5 25 43.5 29" />,
  L: <polyline className={stylesBridge.moveLeftDown} key="L" points="10.5 21 6.5 25 10.5 29" />,
  R: <polyline className={stylesBridge.moveRightDown} key="R" points="39.5 21 43.5 25 39.5 29" />,
};

function pickArrows(flows, arrows) {
  if (typeof flows === 'undefined') {
    return undefined;
  }
  const picked = [];
  for (const flow of flows.values()) {
    if (flow.flowing) {
      for (const ch of flow.flowing) {
        picked.push(arrows[ch]);
      }
    }
  }
  return picked;
}

/* Renders flow arrows, to be used inside an svg tag
 * flow is a string containing the letters tblr.
 * lowercase is inflow, uppercase is outflow
 */
export const FlowArrows = (props) => {
  if (props.flows === undefined) {
    return null;
  }
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

/* Renders flow arrows for multiple tiles, to be used inside an svg tag
 * flow is a string containing the letters tblr.
 * lowercase is inflow, uppercase is outflow
 */
export const FlowArrows2D = (props) => {
  const allArrows = [];
  let y = 0;
  if (props.flows === undefined) {
    return null;
  }
  for (const yy of props.flows) {
    let x = 0;
    for (const xx of yy) {
      const xPos = x * 50;
      const yPos = y * 50;
      const tile = (
        <g key={`${x}_${y}`} transform={`translate(${xPos},${yPos})`} className={styles.flowArrows}>
          {pickArrows(xx, SvgArrows)}
        </g>
      );
      allArrows.push(tile);
      x += 1;
    }
    y += 1;
  }
  return <g>{allArrows}</g>;
};
FlowArrows2D.propTypes = {
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

// Find the flow that maches this part/tile and extract which liquid it is
// If x and y are defined, interpret flows as 2 dimensional and get the flow from those coordinates
export const pickLiquid = (flows, x, y) => {
  const liquids = [];
  let flowsSingleTile;
  if (flows === undefined) {
    return undefined;
  }
  if (x !== undefined && y !== undefined) {
    flowsSingleTile = flows[y][x];
  } else {
    flowsSingleTile = flows;
  }
  if (typeof flowsSingleTile !== 'undefined') {
    for (const flow of flowsSingleTile.values()) {
      liquids.push(flow.liquid);
    }
  }
  if (liquids.length === 0) {
    return undefined;
  }
  if (liquids.length > 1) {
    return 'conflict';
  }
  return liquids[0];
};

export default {
  FlowArrowsBridge,
  FlowArrows,
  pickLiquid,
};
