/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "props" }] */
import React from 'react';
const classNames = require('classnames');
import styles from './styles.css';

// load svg's and inline them wigh g tag instead of svg tag, because they are used nested
const SvgBall = require('./svg/ball.svg?tag=g');
const SvgMotor = require('./svg/motor.svg?tag=g');
const SvgCheck = require('./svg/check-arrow.svg?tag=g');
const SvgTube = require('./svg/split-tube.svg?tag=g');
const SvgMotorPower = require('./svg/motor-power.svg?tag=g');
const SvgLiquidStraight = require('./svg/liquid_straight.svg?tag=g');
const SvgLiquidStraightSplit = require('./svg/liquid_straight_split.svg?tag=g');
const SvgLiquidBall = require('./svg/liquid_ball.svg?tag=g');

import { SvgParent } from '../SvgParent';
import { Liquids } from '../Liquids';

const powerClasses = {
  opening: styles.powerOpening,
  closing: styles.powerClosing,
  default: styles.powerIdle,
};
const posClasses = {
  open: styles.ballOpen,
  closed: styles.ballClosed,
  midway: styles.ballMidway,
  default: styles.ballOpen,
};

const Manual = (props) => {
  const posClass = posClasses[props.position] || posClasses.default;
  return (
    <SvgParent>
      <SvgLiquidStraightSplit className={styles.liquid} style={Liquids.strokeStyle(props.liquid)} />
      <SvgTube className={styles.tube} />
      <SvgBall className={classNames(styles.ball, posClass)} />
    </SvgParent>
  );
};
Manual.propTypes = {
  position: React.PropTypes.string,
  liquid: React.PropTypes.string,
};


const Motor = (props) => {
  const powerClass = powerClasses[props.powered] || powerClasses.default;
  const posClass = posClasses[props.position] || posClasses.default;

  return (
    <SvgParent>
      <SvgLiquidStraightSplit className={styles.liquid} style={Liquids.strokeStyle(props.liquid)} />
      <SvgTube className={styles.tube} />
      <SvgBall className={classNames(styles.ball, posClass)} />
      <SvgMotor className={powerClass} />
      <SvgMotorPower className={styles.powerIcon} />
    </SvgParent>
  );
};
Motor.propTypes = {
  powered: React.PropTypes.string,
  position: React.PropTypes.string,
  liquid: React.PropTypes.string,
};

const Check = (props) => (
  <SvgParent>
    <SvgLiquidBall className={styles.ball} style={Liquids.fillStyle(props.liquid)} />
    <SvgLiquidStraight className={styles.liquid} style={Liquids.strokeStyle(props.liquid)} />
    <SvgTube className={styles.tube} />
    <SvgCheck />
  </SvgParent>
);
Check.propTypes = {
  liquid: React.PropTypes.string,
};

export const Valves = {
  Manual,
  Motor,
  Check,
};
