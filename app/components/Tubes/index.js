/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "props" }] */
import React from 'react';
import styles from './styles.css';
import liquidStyle from '../liquids.css';
const classNames = require('classnames');

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

const liquids = {
  beer: liquidStyle.beer,
  water: liquidStyle.water,
  hotwater: liquidStyle.hotwater,
};

const Input = (props) => {
  const liquidClass = liquids[props.liquid];
  return (
    <SvgParent>
      <SvgTubeInput className={styles.tube} />
      <SvgLiquidInput className={classNames(styles.liquid, liquidClass)} />
    </SvgParent>
  );
};
Input.propTypes = {
  flow: React.PropTypes.string,
  liquid: React.PropTypes.string,
};

const Output = (props) => (
  <SvgParent>
    <SvgTubeOutput className={styles.tube} />
    <SvgLiquidOutput className={styles.liquid} />
  </SvgParent>
);
Output.propTypes = {
  flow: React.PropTypes.string,
  liquid: React.PropTypes.string,
};

const Straight = (props) => {
  const liquidClass = liquids[props.liquid];
  return (
    <SvgParent>
      <SvgTubeStraight className={styles.tube} />
      <SvgLiquidStraight className={classNames(styles.liquid, liquidClass)} />
      <FlowArrows flow={props.flow} />
    </SvgParent>
  );
};
Straight.propTypes = {
  flow: React.PropTypes.string,
  liquid: React.PropTypes.string,
};

const Elbow = (props) => {
  const liquidClass = liquids[props.liquid];
  return (
    <SvgParent>
      <SvgTubeElbow className={styles.tube} />
      <SvgLiquidElbow className={classNames(styles.liquid, liquidClass)} />
      <FlowArrows flow={props.flow} />
    </SvgParent>
  );
};
Elbow.propTypes = {
  flow: React.PropTypes.string,
  liquid: React.PropTypes.string,
};

export const Tubes = {
  Input,
  Output,
  Straight,
  Elbow,
};
