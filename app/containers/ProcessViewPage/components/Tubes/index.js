/* eslint-disable react/no-multi-comp */
/* eslint-disable react/prefer-stateless-function */

import React from 'react';
import styles from './styles.css';

const SvgTubeInput = require('./svg/tube_input.svg?tag=g');
const SvgTubeOutput = require('./svg/tube_output.svg?tag=g');
const SvgLiquidInput = require('./svg/liquid_input.svg?tag=g');
const SvgLiquidOutput = require('./svg/liquid_output.svg?tag=g');
const SvgTubeStraight = require('./svg/tube_straight.svg?tag=g');
const SvgLiquidStraight = require('./svg/liquid_straight.svg?tag=g');
const SvgTubeElbow = require('./svg/tube_elbow.svg?tag=g');
const SvgLiquidElbow = require('./svg/liquid_elbow.svg?tag=g');
const SvgTubeTee = require('./svg/tube_tee.svg?tag=g');
const SvgLiquidTee = require('./svg/liquid_tee.svg?tag=g');
const SvgTubeCross = require('./svg/tube_cross.svg?tag=g');
const SvgLiquidCross = require('./svg/liquid_cross.svg?tag=g');
const SvgTubeBridge = require('./svg/tube_bridge.svg?tag=g');
const SvgLiquidBridge = require('./svg/liquid_bridge.svg?tag=g');
const SvgTubeInlet = require('./svg/tube_inlet.svg?tag=g');
const SvgTubeDip = require('./svg/tube_dip.svg?tag=g');
const SvgLiquidInlet = require('./svg/liquid_inlet.svg?tag=g');
const SvgTubeInletWhirlpool = require('./svg/tube_inlet-whirlpool.svg?tag=g');
const SvgLiquidInletWhirlpool = require('./svg/liquid_inlet-whirlpool.svg?tag=g');
import { SvgParent } from '../SvgParent';
import { FlowArrows, FlowArrowsBridge } from '../FlowArrows';
import { Liquids } from '../Liquids';

// tubes can only have 1 liquid. Each flow that goes in goes out on all other possible edges.
// we can simply extract the liquid from the first flow
const getLiquid = (flows) => {
  if (typeof flows !== 'undefined') {
    const liquid = flows.first().liquid;
    return liquid;
  }
  return undefined;
};

class Input extends React.Component {
  static flows = () => ({ s: 'r' }); // source on the right edge

  render() {
    return (
      <SvgParent>
        <SvgLiquidInput className={styles.liquid} style={Liquids.strokeStyle(getLiquid(this.props.flows))} />
        <SvgTubeInput className={styles.tube} />
        <FlowArrows flows={this.props.flows} />
      </SvgParent>
    );
  }
}
Input.propTypes = {
  flows: React.PropTypes.object,
};

class Output extends React.Component {
  static flows = () => ({ l: 's' }); // sink on the left edge
  render() {
    return (
      <SvgParent>
        <SvgLiquidOutput className={styles.liquid} style={Liquids.strokeStyle(getLiquid(this.props.flows))} />
        <SvgTubeOutput className={styles.tube} />
        <FlowArrows flows={this.props.flows} />
      </SvgParent>
    );
  }
}
Output.propTypes = {
  flows: React.PropTypes.object,
};


class Straight extends React.Component {
  static flows = () => ({ r: 'l', l: 'r' });

  render() {
    return (
      <SvgParent>
        <SvgLiquidStraight className={styles.liquid} style={Liquids.strokeStyle(getLiquid(this.props.flows))} />
        <SvgTubeStraight className={styles.tube} />
        <FlowArrows flows={this.props.flows} />
      </SvgParent>
    );
  }
}
Straight.propTypes = {
  flows: React.PropTypes.object,
};

class Elbow extends React.Component {
  static flows = () => ({ t: 'r', r: 't' });

  render() {
    return (
      <SvgParent>
        <SvgLiquidElbow className={styles.liquid} style={Liquids.strokeStyle(getLiquid(this.props.flows))} />
        <SvgTubeElbow className={styles.tube} />
        <FlowArrows flows={this.props.flows} />
      </SvgParent>
    );
  }
}
Elbow.propTypes = {
  flows: React.PropTypes.object,
};

class Tee extends React.Component {
  static flows = () => ({ l: 'tr', r: 'tl', t: 'rl' });
  render() {
    return (
      <SvgParent>
        <SvgLiquidTee className={styles.liquid} style={Liquids.strokeStyle(getLiquid(this.props.flows))} />
        <SvgTubeTee className={styles.tube} />
        <FlowArrows flows={this.props.flows} />
      </SvgParent>
    );
  }
}
Tee.propTypes = {
  flows: React.PropTypes.object,
};

class Cross extends React.Component {
  static flows = () => ({ l: 'rtb', r: 'ltb', t: 'brl', b: 'tlr' });
  render() {
    return (
      <SvgParent>
        <SvgLiquidCross className={styles.liquid} style={Liquids.strokeStyle(getLiquid(this.props.flows))} />
        <SvgTubeCross className={styles.tube} />
        <FlowArrows flows={this.props.flows} />
      </SvgParent>
    );
  }
}
Cross.propTypes = {
  flows: React.PropTypes.object,
};

class Bridge extends React.Component {
  static flows = () => ({ r: 'l', l: 'r' });
  render() {
    return (
      <SvgParent>
        <SvgLiquidBridge className={styles.liquid} style={Liquids.strokeStyle(getLiquid(this.props.flows))} />
        <SvgTubeBridge className={styles.tube} />
        <FlowArrowsBridge flows={this.props.flows} />
      </SvgParent>
    );
  }
}
Bridge.propTypes = {
  flows: React.PropTypes.object,
};

class Inlet extends React.Component {
  static flows = () => ({ l: 's' });
  render() {
    return (
      <SvgParent>
        <SvgLiquidInlet className={styles.liquid} style={Liquids.strokeStyle(getLiquid(this.props.flows))} />
        <SvgTubeInlet className={styles.tube} />
        <FlowArrows flows={this.props.flows} />
      </SvgParent>
    );
  }
}
Inlet.propTypes = {
  flows: React.PropTypes.object,
};

class Dip extends React.Component {
  static flows = () => ({ l: 's' });
  render() {
    return (
      <SvgParent>
        <SvgTubeDip className={styles.tube} />
        <FlowArrows flows={this.props.flows} />
      </SvgParent>
    );
  }
}
Dip.propTypes = {
  flows: React.PropTypes.object,
};

class InletWhirlpool extends React.Component {
  static flows = () => ({ l: 's' });
  render() {
    return (
      <SvgParent viewBox={'0 0 50 100'}>
        <SvgLiquidInletWhirlpool className={styles.liquid} style={Liquids.strokeStyle(getLiquid(this.props.flows))} />
        <SvgTubeInletWhirlpool className={styles.tube} />
        <FlowArrows flows={this.props.flows} />
      </SvgParent>
    );
  }
}
InletWhirlpool.propTypes = {
  flows: React.PropTypes.object,
};

export const Tubes = {
  Input,
  Output,
  Dip,
  Straight,
  Elbow,
  Tee,
  Cross,
  Bridge,
  Inlet,
  InletWhirlpool,
};
