/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "props" }] */
import React from 'react';
import styles from './styles.css';
const classNames = require('classnames');
import { getPowerClass, getRotateClass } from '../sharedCss';

const SvgFanbase = require('./svg/fanbase.svg?tag=g');
const SvgFanblades = require('./svg/fanblades.svg?tag=g');
const SvgMotor = require('./svg/motor.svg?tag=g');
const SvgMotorPower = require('./svg/motor-power.svg?tag=g');

import { SvgParent } from '../SvgParent';

const FridgeFan = (props) => {
  const powerClass = getPowerClass(props.powered);
  const rotateClass = getRotateClass(props.powered);
  return (
    <SvgParent>
      <SvgFanbase className={styles.fanbase} />
      <SvgFanblades className={classNames(styles.blades, rotateClass)} />
      <SvgMotor className={styles.motor} />
      <SvgMotorPower className={classNames(styles.motorPower, powerClass)} />
    </SvgParent>
  );
};
FridgeFan.propTypes = {
  powered: React.PropTypes.string,
};

export const FridgeTall = (props) => (
  <div className={styles.container}>
    <div className={styles.top}>
      <span className={styles.fridgename}>Fridge #1</span>
      <span className={styles.setpoint}>20°</span>
    </div>
    <div className={styles.middle}>
      <FridgeFan powered={'slow'} />
      <span className={styles.temp}>20°</span>
    </div>
    <div className={styles.bottom}>
      <div className={styles.divcooler}>
        <span className={styles.cooler}>22%</span>
      </div>
      <div className={styles.divheater}>
        <span className={styles.heater}>0%</span>
      </div>
    </div>
  </div>
);
FridgeTall.propTypes = {
  liquid: React.PropTypes.string,
};
