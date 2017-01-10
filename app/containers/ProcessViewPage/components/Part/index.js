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
import { CoilImmersion } from '../CoilImmersion';
import { HeatingElement } from '../HeatingElement';
import { Lauterhexe } from '../Lauterhexe';
import Pump from '../Pump';
import PumpSubmersible from '../PumpSubmersible';
import BlowerFan from '../BlowerFan';
import Burner from '../Burner';
import { Cfc } from '../Cfc';
import { TempSensors } from '../TempSensors';
import { BeerBottle } from '../BeerBottle';
import { Carboy } from '../Carboy';
import { Conical } from '../Conical';
import { FridgeTall, FridgeFan, FridgeShelf } from '../FridgeTall';
import { GlycolReservoir } from '../GlycolReservoir';
import { Keg } from '../Keg';
import { TubularHeater } from '../TubularHeater';
import { SetPoint } from '../SetPoint';
import { FilterBottom } from '../FilterBottom';
import { BiabFilter } from '../BiabFilter';
import { Map } from 'immutable';
import { Table } from 'immutable-table';

const classNames = require('classnames');

const NoPart = () => <div />;

const componentTable = {
  TUBE_STRAIGHT: Tubes.Straight,
  TUBE_ELBOW: Tubes.Elbow,
  TUBE_TEE: Tubes.Tee,
  TUBE_CROSS: Tubes.Cross,
  TUBE_BRIDGE: Tubes.Bridge,
  TUBE_INLET_STRAIGHT: Tubes.InletStraight,
  TUBE_INLET: Tubes.Inlet,
  TUBE_WHIRLPOOL: Tubes.InletWhirlpool,
  TUBE_INPUT: Tubes.Input,
  TUBE_OUTPUT: Tubes.Output,
  TUBE_DIP: Tubes.Dip,
  FITTING: Tubes.Fitting,
  VALVE_MOTOR: Valves.Motor,
  VALVE_MANUAL: Valves.Manual,
  VALVE_MANUAL_TEE: Valves.ManualTee,
  VALVE_CHECK: Valves.Check,
  KETTLE: Kettle,
  COIL: Coil,
  COIL_IMMERSION: CoilImmersion,
  HEATING_ELEMENT: HeatingElement,
  LAUTERHEXE: Lauterhexe,
  PUMP: Pump,
  SUBMERSIBLE_PUMP: PumpSubmersible,
  CFC: Cfc,
  TEMP_SENSOR_INLINE: TempSensors.Inline,
  BEER_BOTTLE: BeerBottle,
  CONICAL: Conical,
  FRIDGE_TALL: FridgeTall,
  FRIDGE_FAN: FridgeFan,
  BLOWER_FAN: BlowerFan,
  Burner: Burner,
  FRIDGE_SHELF: FridgeShelf,
  GLYCOL_RESERVOIR: GlycolReservoir,
  CORNEY_KEG: Keg,
  TUBULAR_HEATER: TubularHeater,
  CARBOY: Carboy,
  SETPOINT: SetPoint,
  FILTER_BOTTOM: FilterBottom,
  BIAB_FILTER: BiabFilter,
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
  const lookup = { l: 't', t: 'r', r: 'b', b: 'l', L: 'T', T: 'R', R: 'B', B: 'L' };
  for (const ch of oldString) {
    let newCh = ch;
    let angleRemaining = angle;
    while (angleRemaining > 0) {
      newCh = lookup[newCh] || newCh; // leave unchanged when not in table;
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

const rotateArray90 = (m) => {
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

export const rotateArray = (m, angle) => {
  // transpose entire array
  let angleRemaining = angle || 0;
  let m2 = m;
  while (angleRemaining > 0) {
    m2 = rotateArray90(m2);
    angleRemaining -= 90;
  }
  return m2;
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
    // rotate entire array
    newFlows = rotateArray(newFlows, angle);
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

  static flowDimensions(data) {
    const flows = Part.acceptsFlows(data);
    let width = 1;
    let height = 1;
    if (flows.constructor === Array) {
      if (flows[0].constructor === Array) {
        width = flows[0].length;
        height = flows.length;
      } else {
        width = flows.length;
      }
    }
    return { width, height };
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
    const partStyle = { zIndex: this.zIndex() };

    const rotate = data.get('rotate') || '0';
    const rotateClassName = rotateClassNames[rotate];

    const flip = data.get('flip');
    const flipClassName = (flip) ? styles.flipped : undefined;

    let settings = data.get('settings');
    if (settings) {
      settings = settings.toJS();
    }
    let options = data.get('options');
    if (options) {
      options = options.toJS();
    }

    let flows = this.props.flows; // tile flows
    let partAcceptsFlows = Part.acceptsFlows(data); // possible flows due to this part
    if (partAcceptsFlows) {
      // make sure partAcceptFlows is a twodimensional Array
      if (partAcceptsFlows.constructor === Array) {
        if (partAcceptsFlows[0].constructor !== Array) {
          partAcceptsFlows = [partAcceptsFlows];
        }
      } else {
        partAcceptsFlows = [[partAcceptsFlows]];
      }
      // flows are in an immutable table. We want to get them back to normal JS objects
      const width = flows.width;
      const height = flows.height;
      if (flows) {
        const partFlows = [];
        for (let y = 0; y < height; y += 1) {
          const row = [];
          for (let x = 0; x < width; x += 1) {
            const flowTile = flows.getCell(x, y);
            // to pass them to the part we convert them to a normal mutable object by reading the cells
            const flowsInTile = [];
            if (flowTile !== undefined) {
              for (const flow of flowTile) {
                if (flow.dir !== 'undefined') {
                  // check that the flow in the tile comes from this part
                  const flowOrigin = Object.keys(flow.dir)[0];
                  const partFlowsInTile = partAcceptsFlows[y][x];
                  if (partFlowsInTile && Object.prototype.hasOwnProperty.call(partFlowsInTile, flowOrigin)) {
                    // We rotate each flow in the tile back to normal orientation for rendering
                    const dir = rotateFlows(flow.dir, 360 - rotate);
                    const flowing = (flow.flowing) ? rotateString(flow.flowing, 360 - rotate) : '';
                    flowsInTile.push({ dir, liquid: flow.liquid, flowing });
                  }
                }
              }
            }
            row.push(flowsInTile);
          }
          partFlows.push(row);
        }
        if (width === 1 && height === 1) {
          // unpack unnecessary 1x1 tables, because 1x1 parts do not expect an Array[][][], but an Array[] of flows
          flows = partFlows[0][0];
        } else {
          // Then we rotate the entire table back to normal orientation
          flows = rotateArray(partFlows, rotate);
        }
      }
    } else {
      flows = {};
    }
    const renderedComponent = React.createElement(Part.component(data), { id, settings, options, flows, flip, rotate });
    return (
      <div style={partStyle} className={classNames(styles.part, rotateClassName, flipClassName)}>
        {renderedComponent}
      </div>
    );
  }
}
Part.propTypes = {
  data: React.PropTypes.instanceOf(Map),
  flows: React.PropTypes.instanceOf(Table),
};

export default Part;
