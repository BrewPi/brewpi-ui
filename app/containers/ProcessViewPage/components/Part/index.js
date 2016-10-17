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
  TEMP_SENSOR_INLINE: 4,
};

const rotateClassNames = {
  0: styles.rotate0,
  90: styles.rotate90,
  180: styles.rotate180,
  270: styles.rotate270,
};

/*
 * Rotates each character of a string by a multiple of 90 degrees
 * for the characters rtlb: right, top, left, bottom.
 * For 90 degrees, left will become top, top will become right, etc.
 */
const rotateString = (oldString, angle) => {
  let newString = '';
  const lookup = { l: 't', t: 'r', r: 'b', b: 'l', s: 's' };
  for (const ch of oldString) {
    let newCh = ch;
    let angleRemaining = angle;
    while (angleRemaining > 0) {
      newCh = lookup[newCh];
      angleRemaining -= 90;
    }
    newString += newCh;
  }
  return newString;
};

/*
 * For a dictionary of keys and string values representing flow..
 * example: {l:'r', r:'l'} represents a simple tube:
 * flow from left to right or right to left.
 * This function will update the flows as if the block was rotated.
 */
const rotateFlowTile = (oldFlows, angle) => {
  const newFlows = {};
  for (const [key, value] of Object.entries(oldFlows)) {
    const newKey = rotateString(key, angle);
    const newValue = rotateString(value, angle);
    newFlows[newKey] = newValue;
  }
  return newFlows;
};

export const rotateArray = (m) => {
  const result = [];
  const width = m[0].length;
  const height = m.length;
  for (let i = 0; i < width; i += 1) {
    result[i] = [];
    for (let j = 0; j < height; j += 1) {
      result[i].push(m[height - 1 - j][i]);
    }
  }
  return result;
};

export const rotateFlows = (oldFlows, angle) => {
  let newFlows;
  // flows can be an Array[] or Array[][]
  // for components that span multiple blocks
  if (oldFlows.constructor === Array) {
    let toRotate = oldFlows;
    if (oldFlows[0].constructor !== Array) {
      toRotate = [oldFlows]; // ensure it is a two-dimensional array
    }
    newFlows = toRotate;
    // transpose entire array
    let angleRemaining = angle;
    while (angleRemaining > 0) {
      newFlows = rotateArray(newFlows);
      angleRemaining -= 90;
    }
    // rotate each tile
    newFlows = newFlows.map((y) => y.map((x) => rotateFlowTile(x, angle)));
  } else {
    // flows is a single tile
    newFlows = rotateFlowTile(oldFlows, angle);
  }
  return newFlows;
};


export class Part extends React.Component {
  // static functions to get component info without instantiating
  static component(data) {
    return componentTable[data.get('type')] || NoPart;
  }

  static acceptsFlows(data) {
    const flowFunction = Part.component(data).flows;
    if (typeof flowFunction !== 'function') {
      return {};
    }
    const flows = flowFunction(data);
    const rotate = data.get('rotate');
    return (rotate) ? rotateFlows(flows, rotate) : flows;
  }

  type() {
    return this.props.data.get('type') || 'DEFAULT';
  }
  component() {
    return componentTable[this.type()] || NoPart;
  }
  zIndex() {
    return zIndices[this.type()] || zIndices.DEFAULT;
  }


  render() {
    const data = this.props.data;
    if (!data) {
      return <NoPart />;
    }
    const id = data.get('id');
    const settings = data.get('settings');

    const rotate = data.get('rotate') || '0';
    const rotateClassName = rotateClassNames[rotate];

    const flip = data.get('flip');
    const flipClassName = (flip) ? styles.flipped : undefined;

    let flows = this.props.flows;
    if (flows && rotate) {
      // flows are tile flows, rotate back for part flows
      flows = flows.map((flow) => ({ dir: rotateFlows(flow.dir, 360 - rotate), liquid: flow.liquid }));
    }

    const partStyle = { zIndex: this.zIndex() };

    const renderedComponent = React.createElement(Part.component(data), { powered: 'on', id, settings, flows, flip, rotate });
    return (
      <div style={partStyle} className={classNames(styles.part, rotateClassName, flipClassName)}>
        {renderedComponent}
      </div>
    );
  }
}
Part.propTypes = {
  data: React.PropTypes.object,
  flows: React.PropTypes.object,
};

export default Part;
