/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "props" }] */
import React from 'react';
import styles from './styles.css';
import { Liquids } from '../Liquids';
const classNames = require('classnames');
import { getPowerClass, getRotateClass } from '../sharedCss';

const SvgBall = require('./svg/ball.svg?tag=g');
const SvgBlades = require('./svg/blades.svg?tag=g');
const SvgMotor = require('./svg/motor.svg?tag=g');
const SvgMotorPower = require('./svg/motor-power.svg?tag=g');

import { SvgParent } from '../SvgParent';


export const Pump = (props) => {
  const powerClass = getPowerClass(props.powered);
  const rotateClass = getRotateClass(props.powered);
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
