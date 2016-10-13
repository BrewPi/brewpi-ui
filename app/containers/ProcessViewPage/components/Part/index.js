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
export const rotateFlows = (oldFlows, angle) => {
  const newFlows = {};
  for (const [key, value] of Object.entries(oldFlows)) {
    const newKey = rotateString(key, angle);
    const newValue = rotateString(value, angle);
    newFlows[newKey] = newValue;
  }
  return newFlows;
};


export class Part extends React.Component {
  // static functions to get component info without instantiating
  static component(data) {
    return componentTable[data.get('type')] || NoPart;
  }
  /**
   * A source creates a flow from nothing, indicated with they key 's' in flows
   *
   * @static
   * @param {any} data: object containing the key type
   * @returns true if part is a source
   *
   * @memberOf Part
   */
  static isSource(data) {
    return Part.acceptsFlow(data, 's');
  }

  /**
   * Calculates whether this part can accept flow on a certain edge
   *
   * @param {string} edge single character string (l,r,t,b,s) for left, right, top, bottom, source
   * A source creates a flow from nothing.
   * @returns {string} a multi character string from characters (l,r,t,b,s).
   * (l,r,t,b) means: I can accept this flow, if it can continue to my neighbour on this edge.
   * (s) means: I can sink this flow.
   *
   * @memberOf Part
   */
  static acceptsFlow(data, edge) {
    const flows = Part.component(data).flows;
    if (typeof flows === 'undefined') {
      return '';
    }
    if (typeof flows[edge] === 'undefined') {
      return '';
    }
    return flows[edge];
  }

  static acceptsFlows(data) {
    const flows = Part.component(data).flows;
    if (typeof flows === 'undefined') {
      return {};
    }
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

    const partStyle = { zIndex: this.zIndex() };
    const liquid = Part.isSource(data) ? 'water' : undefined;

    const renderedComponent = React.createElement(Part.component(data), { powered: 'on', id, settings, liquid, flip, rotate });
    return (
      <div style={partStyle} className={classNames(styles.part, rotateClassName, flipClassName)}>
        {renderedComponent}
      </div>
    );
  }
}
Part.propTypes = {
  data: React.PropTypes.object,
};

export default Part;
