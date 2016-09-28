/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "props" }] */
import React from 'react';
import styles from './styles.css';
import { Liquids } from 'components/Liquids';
const classNames = require('classnames');

const SvgBall = require('./svg/ball.svg?tag=g');
const SvgBlades = require('./svg/blades.svg?tag=g');
const SvgMotor = require('./svg/motor.svg?tag=g');
const SvgMotorPower = require('./svg/motor-power.svg?tag=g');

import { SvgParent } from 'components/SvgParent';

const powerClasses = {
  off: styles.powerOff,
  on: styles.powerOn,
  slow: styles.powerOn,
  fast: styles.powerOn,
  default: styles.powerOff,
};

const rotateClasses = {
  off: styles.rotateOff,
  on: styles.rotateFast,
  slow: styles.rotateSlow,
  fast: styles.rotateFast,
  default: styles.rotateOff,
};

export const Pump = (props) => {
  const powerClass = powerClasses[props.powered] || powerClasses.default;
  const rotateClass = rotateClasses[props.powered] || rotateClasses.default;
  return (
    <SvgParent>
      <SvgBall className={styles.ball} style={Liquids.fillStyle(props.liquid)} />
      <SvgBlades className={classNames(styles.blades, rotateClass)} />
      <SvgMotor className={styles.motor} />
      <SvgMotorPower className={classNames(styles.motorPower, powerClass)} />
    </SvgParent>
  );
};
Pump.propTypes = {
  powered: React.PropTypes.string,
  liquid: React.PropTypes.string,
};

export default Pump;
