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

class Input extends React.Component {
  static isSource(edge) {
    return edge === 'r';
  }

  render() {
    return (
      <SvgParent>
        <SvgLiquidInput className={styles.liquid} style={Liquids.strokeStyle(this.props.liquid)} />
        <SvgTubeInput className={styles.tube} />
        <FlowArrows flow={this.props.flow} />
      </SvgParent>
    );
  }
}
Input.propTypes = {
  flow: React.PropTypes.string,
  liquid: React.PropTypes.string,
};

class Output extends React.Component {
  isSink(edge) {
    return (edge === 'l'); // sink on the left edge
  }
  render() {
    return (
      <SvgParent>
        <SvgLiquidOutput className={styles.liquid} style={Liquids.strokeStyle(this.props.liquid)} />
        <SvgTubeOutput className={styles.tube} />
        <FlowArrows flow={this.props.flow} />
      </SvgParent>
    );
  }
}
Output.propTypes = {
  flow: React.PropTypes.string,
  liquid: React.PropTypes.string,
};


class Straight extends React.Component {
  render() {
    return (
      <SvgParent>
        <SvgLiquidStraight className={styles.liquid} style={Liquids.strokeStyle(this.props.liquid)} />
        <SvgTubeStraight className={styles.tube} />
        <FlowArrows flow={this.props.flow} />
      </SvgParent>
    );
  }
}
Straight.propTypes = {
  flow: React.PropTypes.string,
  liquid: React.PropTypes.string,
};

class Elbow extends React.Component {
  render() {
    return (
      <SvgParent>
        <SvgLiquidElbow className={styles.liquid} style={Liquids.strokeStyle(this.props.liquid)} />
        <SvgTubeElbow className={styles.tube} />
        <FlowArrows flow={this.props.flow} />
      </SvgParent>
    );
  }
}
Elbow.propTypes = {
  flow: React.PropTypes.string,
  liquid: React.PropTypes.string,
};

class Tee extends React.Component {
  render() {
    return (
      <SvgParent>
        <SvgLiquidTee className={styles.liquid} style={Liquids.strokeStyle(this.props.liquid)} />
        <SvgTubeTee className={styles.tube} />
        <FlowArrows flow={this.props.flow} />
      </SvgParent>
    );
  }
}
Tee.propTypes = {
  flow: React.PropTypes.string,
  liquid: React.PropTypes.string,
};

class Cross extends React.Component {
  render() {
    return (
      <SvgParent>
        <SvgLiquidCross className={styles.liquid} style={Liquids.strokeStyle(this.props.liquid)} />
        <SvgTubeCross className={styles.tube} />
        <FlowArrows flow={this.props.flow} />
      </SvgParent>
    );
  }
}
Cross.propTypes = {
  flow: React.PropTypes.string,
  liquid: React.PropTypes.string,
};

class Bridge extends React.Component {
  render() {
    return (
      <SvgParent>
        <SvgLiquidBridge className={styles.liquid} style={Liquids.strokeStyle(this.props.liquid)} />
        <SvgTubeBridge className={styles.tube} />
        <FlowArrowsBridge flow={this.props.flow} />
      </SvgParent>
    );
  }
}
Bridge.propTypes = {
  flow: React.PropTypes.string,
  liquid: React.PropTypes.string,
};

class Inlet extends React.Component {
  isSink(edge) {
    return (edge === 'l');
  }
  render() {
    return (
      <SvgParent>
        <SvgLiquidInlet className={styles.liquid} style={Liquids.strokeStyle(this.props.liquid)} />
        <SvgTubeInlet className={styles.tube} />
        <FlowArrows flow={this.props.flow} />
      </SvgParent>
    );
  }
}
Inlet.propTypes = {
  flow: React.PropTypes.string,
  liquid: React.PropTypes.string,
};

class Dip extends React.Component {
  isSource(edge) {
    return (edge === 'r');
  }
  render() {
    return (
      <SvgParent>
        <SvgTubeDip className={styles.tube} />
        <FlowArrows flow={this.props.flow} />
      </SvgParent>
    );
  }
}
Dip.propTypes = {
  flow: React.PropTypes.string,
  // liquid not needed, because it is submerged in the kettle
};

class InletWhirlpool extends React.Component {
  isSink(edge) {
    return (edge === 'l');
  }
  render() {
    return (
      <SvgParent viewBox={'0 0 50 100'}>
        <SvgLiquidInletWhirlpool className={styles.liquid} style={Liquids.strokeStyle(this.props.liquid)} />
        <SvgTubeInletWhirlpool className={styles.tube} />
        <FlowArrows flow={this.props.flow} />
      </SvgParent>
    );
  }
}
InletWhirlpool.propTypes = {
  flow: React.PropTypes.string,
  liquid: React.PropTypes.string,
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
