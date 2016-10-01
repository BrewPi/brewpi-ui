/**
*
* Part
*
*/

import React from 'react';


import styles from './styles.css';

import { Valves } from '../Valves';
import { Tubes } from '../Tubes';

const componentTable = {
  TUBE_STRAIGHT: Tubes.Straight,
  TUBE_ELBOW: Tubes.Elbow,
  TUBE_BRIDGE: Tubes.Bridge,
  TUBE_CROSS: Tubes.Cross,
  VALVE_MOTOR: Valves.Motor,
  VALVE_MANUAL: Valves.Manual,
  VALVE_CHECK: Valves.Check,
};

export const Part = (props) => {
  const data = props.data;
  if (!data || !data.type) {
    return <div />;
  }
  const rotate = data.rotate ? data.rotate : 0;
  const componentFunction = componentTable[data.type];
  return (
    <div rotate={rotate} className={styles.part}>
      {componentFunction({ liquid: 'water', rotate: data.rotate })}
    </div>
  );
};
Part.propTypes = {
  data: React.propTypes.object,
};

export default Part;
