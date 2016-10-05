/**
*
* Part
*
*/

import React from 'react';
import styles from './styles.css';
import { Valves } from '../Valves';
import { Tubes } from '../Tubes';
import { Kettle } from '../Kettle';
const classNames = require('classnames');

const NoPart = () => <div />;

const componentTable = {
  TUBE_STRAIGHT: Tubes.Straight,
  TUBE_ELBOW: Tubes.Elbow,
  TUBE_BRIDGE: Tubes.Bridge,
  TUBE_CROSS: Tubes.Cross,
  TUBE_INLET: Tubes.Inlet,
  VALVE_MOTOR: Valves.Motor,
  VALVE_MANUAL: Valves.Manual,
  VALVE_CHECK: Valves.Check,
  KETTLE: Kettle,
  DEFAULT: NoPart,
};

// for parts that should be in front of or behind other parts, specify z-index here.
// default z-index is 2
const zIndices = {
  TUBE_BRIDGE: 3,
  KETTLE: 1,
  DEFAULT: 2,
};

const rotateClassNames = {
  0: styles.rotate0,
  90: styles.rotate90,
  180: styles.rotate180,
  270: styles.rotate270,
};

export const Part = (props) => {
  const data = props.data;
  if (!data) {
    return <NoPart />;
  }
  const type = data.get('type') || 'DEFAULT';
  const rotate = data.get('rotate') || '0';
  const rotateClassName = rotateClassNames[rotate];
  const componentFunction = componentTable[type] || NoPart;
  const zIndex = zIndices[type] || zIndices.DEFAULT;
  console.log(zIndex);
  const partStyle = {
    zIndex,
  };
  return (
    <div rotate={rotate} style={partStyle} className={classNames(styles.part, rotateClassName)}>
      {componentFunction({ liquid: 'water', rotate: data.rotate })}
    </div>
  );
};
Part.propTypes = {
  data: React.PropTypes.object,
};

export default Part;
