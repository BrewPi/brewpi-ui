import React from 'react';
import styles from './styles.css';
const classNames = require('classnames');
import { getPowerClass, getRotateClass } from '../sharedCss';

const SvgFanbase = require('./svg/fanbase.svg?tag=g');
const SvgFanblades = require('./svg/fanblades.svg?tag=g');
const SvgMotor = require('./svg/motor.svg?tag=g');
const SvgMotorPower = require('./svg/motor-power.svg?tag=g');
const SvgIconDefrost = require('../Icons/svg/defrost.svg');
const SvgIconHeating = require('../Icons/svg/heating.svg');

import { SvgParent } from '../SvgParent';

export const FridgeFan = (props) => {
  const powerClass = props.powered;
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

export const FridgeShelf = () => (
  <div>
    <div className={styles.fridgeShelf}></div>
  </div>
);

export const FridgeTall = () => (
  <div className={styles.fridgeContainer}>
    <div className={classNames(styles.fridgeTop, styles.fridgeCompartment)}>
      <span className={styles.fridgeName}>Fridge #1</span>
      <span className={styles.setpoint}>20°</span>
    </div>
    <div className={classNames(styles.fridgeMiddle, styles.fridgeCompartment)}>
      <span className={styles.temp}>20°</span>
    </div>
    <div className={classNames(styles.fridgeBottom, styles.fridgeCompartment)}>
      <div className={styles.divCooling}>
        <span className={styles.coolingPercentage}>22%</span>
        <SvgIconDefrost className={classNames(styles.iconDefrost)} />
      </div>
      <div className={styles.divHeating}>
        <span className={styles.heatingPercentage}>0%</span>
        <SvgIconHeating className={classNames(styles.iconHeating)} />
      </div>
    </div>
  </div>
);
