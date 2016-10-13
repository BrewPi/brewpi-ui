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
import { Coil } from '../Coil';
import { HeatingElement } from '../HeatingElement';
import { Lauterhexe } from '../Lauterhexe';
import { Pump } from '../Pump';
import { SubmersiblePump } from '../SubmersiblePump';
import { BlowerFan } from '../BlowerFan';
import { Cfc } from '../Cfc';
import { TempSensors } from '../TempSensors';
import { BeerBottle } from '../BeerBottle';
import { Carboy } from '../Carboy';
import { Conical } from '../Conical';
import { FridgeTall, FridgeFan, FridgeShelf } from '../FridgeTall';
import { GlycolReservoir } from '../GlycolReservoir';
import { Keg } from '../Keg';
import { TubularHeater } from '../TubularHeater';

const classNames = require('classnames');

const NoPart = () => <div />;

const componentTable = {
  TUBE_STRAIGHT: Tubes.Straight,
  TUBE_ELBOW: Tubes.Elbow,
  TUBE_TEE: Tubes.Tee,
  TUBE_CROSS: Tubes.Cross,
  TUBE_BRIDGE: Tubes.Bridge,
  TUBE_INLET: Tubes.Inlet,
  TUBE_WHIRLPOOL: Tubes.InletWhirlpool,
  TUBE_INPUT: Tubes.Input,
  TUBE_OUTPUT: Tubes.Output,
  TUBE_DIP: Tubes.Dip,
  VALVE_MOTOR: Valves.Motor,
  VALVE_MANUAL: Valves.Manual,
  VALVE_CHECK: Valves.Check,
  KETTLE: Kettle,
  COIL: Coil,
  HEATING_ELEMENT: HeatingElement,
  LAUTERHEXE: Lauterhexe,
  PUMP: Pump,
  SUBMERSIBLE_PUMP: SubmersiblePump,
  CFC: Cfc,
  TEMP_SENSOR_INLINE: TempSensors.Inline,
  BEER_BOTTLE: BeerBottle,
  CONICAL: Conical,
  FRIDGE_TALL: FridgeTall,
  FRIDGE_FAN: FridgeFan,
  BLOWER_FAN: BlowerFan,
  FRIDGE_SHELF: FridgeShelf,
  GLYCOL_RESERVOIR: GlycolReservoir,
  CORNEY_KEG: Keg,
  TUBULAR_HEATER: TubularHeater,
  CARBOY: Carboy,
  DEFAULT: NoPart,
};

// for parts that should be in front of or behind other parts, specify z-index here.
// default z-index is 2
const zIndices = {
  TUBE_BRIDGE: 3,
  KETTLE: 1,
  DEFAULT: 2,
  FRIDGE_TALL: 1,
  GLYCOL_RESERVOIR: 1,
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
  const id = data.get('id');
  const settings = data.get('settings');
  const rotate = data.get('rotate') || '0';
  const rotateClassName = rotateClassNames[rotate];
  const component = componentTable[type] || NoPart;
  const zIndex = zIndices[type] || zIndices.DEFAULT;
  const partStyle = {
    zIndex,
  };
  const liquid = (typeof component.isSource === 'function') ? 'water' : undefined;
  const renderedComponent = React.createElement(component, { powered: 'on', id, settings, liquid, rotate: data.rotate });
  return (
    <div rotate={rotate} style={partStyle} className={classNames(styles.part, rotateClassName)}>
      {renderedComponent}
    </div>
  );
};
Part.propTypes = {
  data: React.PropTypes.object,
};

export default Part;
