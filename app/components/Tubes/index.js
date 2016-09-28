/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "props" }] */
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
const SvgLiquidInlet = require('./svg/liquid_inlet.svg?tag=g');
const SvgTubeInletWhirlpool = require('./svg/tube_inlet-whirlpool.svg?tag=g');
const SvgLiquidInletWhirlpool = require('./svg/liquid_inlet-whirlpool.svg?tag=g');
import { SvgParent } from 'components/SvgParent';
import { FlowArrows, FlowArrowsBridge } from 'components/FlowArrows';
import { Liquids } from 'components/Liquids';

const Input = (props) => (
  <SvgParent>
    <SvgLiquidInput className={styles.liquid} style={Liquids.strokeStyle(props.liquid)} />
    <SvgTubeInput className={styles.tube} />
  </SvgParent>
);
Input.propTypes = {
  flow: React.PropTypes.string,
  liquid: React.PropTypes.string,
};

const Output = (props) => (
  <SvgParent>
    <SvgLiquidOutput className={styles.liquid} style={Liquids.strokeStyle(props.liquid)} />
    <SvgTubeOutput className={styles.tube} />
  </SvgParent>
);
Output.propTypes = {
  flow: React.PropTypes.string,
  liquid: React.PropTypes.string,
};

const Straight = (props) => (
  <SvgParent>
    <SvgLiquidStraight className={styles.liquid} style={Liquids.strokeStyle(props.liquid)} />
    <SvgTubeStraight className={styles.tube} />
    <FlowArrows flow={props.flow} />
  </SvgParent>
);
Straight.propTypes = {
  flow: React.PropTypes.string,
  liquid: React.PropTypes.string,
};

const Elbow = (props) => (
  <SvgParent>
    <SvgLiquidElbow className={styles.liquid} style={Liquids.strokeStyle(props.liquid)} />
    <SvgTubeElbow className={styles.tube} />
    <FlowArrows flow={props.flow} />
  </SvgParent>
);
Elbow.propTypes = {
  flow: React.PropTypes.string,
  liquid: React.PropTypes.string,
};

const Tee = (props) => (
  <SvgParent>
    <SvgLiquidTee className={styles.liquid} style={Liquids.strokeStyle(props.liquid)} />
    <SvgTubeTee className={styles.tube} />
    <FlowArrows flow={props.flow} />
  </SvgParent>
);
Tee.propTypes = {
  flow: React.PropTypes.string,
  liquid: React.PropTypes.string,
};

const Cross = (props) => (
  <SvgParent>
    <SvgLiquidCross className={styles.liquid} style={Liquids.strokeStyle(props.liquid)} />
    <SvgTubeCross className={styles.tube} />
    <FlowArrows flow={props.flow} />
  </SvgParent>
);
Cross.propTypes = {
  flow: React.PropTypes.string,
  liquid: React.PropTypes.string,
};

const Bridge = (props) => (
  <SvgParent>
    <SvgLiquidBridge className={styles.liquid} style={Liquids.strokeStyle(props.liquid)} />
    <SvgTubeBridge className={styles.tube} />
    <FlowArrowsBridge flow={props.flow} />
  </SvgParent>
);
Bridge.propTypes = {
  flow: React.PropTypes.string,
  liquid: React.PropTypes.string,
};

const Inlet = (props) => (
  <SvgParent>
    <SvgLiquidInlet className={styles.liquid} style={Liquids.strokeStyle(props.liquid)} />
    <SvgTubeInlet className={styles.tube} />
    <FlowArrows flow={props.flow} />
  </SvgParent>
);
Inlet.propTypes = {
  flow: React.PropTypes.string,
  liquid: React.PropTypes.string,
};

const InletWhirlpool = (props) => (
  <SvgParent viewBox={'0 0 50 100'}>
    <SvgLiquidInletWhirlpool className={styles.liquid} style={Liquids.strokeStyle(props.liquid)} />
    <SvgTubeInletWhirlpool className={styles.tube} />
    <FlowArrows flow={props.flow} />
  </SvgParent>
);
InletWhirlpool.propTypes = {
  flow: React.PropTypes.string,
  liquid: React.PropTypes.string,
};

export const Tubes = {
  Input,
  Output,
  Straight,
  Elbow,
  Tee,
  Cross,
  Bridge,
  Inlet,
  InletWhirlpool,
};
