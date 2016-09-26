/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "props" }] */
import React from 'react';
import styles from './styles.css';

const SvgTubeInput = require('./svg/tube_input.svg?tag=g');
const SvgTubeOutput = require('./svg/tube_output.svg?tag=g');
const SvgLiquidInput = require('./svg/liquid_input.svg?tag=g');
const SvgLiquidOutput = require('./svg/tube_output.svg?tag=g');
const SvgTubeStraight = require('./svg/tube_straight.svg?tag=g');
const SvgLiquidStraight = require('./svg/liquid_straight.svg?tag=g');
const SvgTubeElbow = require('./svg/tube_elbow.svg?tag=g');
const SvgLiquidElbow = require('./svg/liquid_elbow.svg?tag=g');
import { SvgParent } from 'components/SvgParent';
import { FlowArrows } from 'components/FlowArrows';

const Input = (props) => (
  <SvgParent>
    <SvgTubeInput className={styles.tube} />
    <SvgLiquidInput className={styles.liquid} />
  </SvgParent>
);

const Output = (props) => (
  <SvgParent>
    <SvgTubeOutput className={styles.tube} />
    <SvgLiquidOutput className={styles.liquid} />
  </SvgParent>
);

const Straight = (props) => (
  <SvgParent>
    <SvgTubeStraight className={styles.tube} />
    <SvgLiquidStraight className={styles.liquid} />
    <FlowArrows flow={props.flow} />
  </SvgParent>
);
Straight.propTypes = {
  flow: React.PropTypes.string,
};

const Elbow = (props) => (
  <SvgParent>
    <SvgTubeElbow className={styles.tube} />
    <SvgLiquidElbow className={styles.liquid} />
    <FlowArrows flow={props.flow} />
  </SvgParent>
);
Elbow.propTypes = {
  flow: React.PropTypes.string,
};

export const Tubes = {
  Input,
  Output,
  Straight,
  Elbow,
};
