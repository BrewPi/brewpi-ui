import React from 'react';
import styles from './styles.css';
const classNames = require('classnames');

const SvgIconCooling = require('../Icons/svg/cooling.svg');

export const GlycolChiller = () => (
  <div className={styles.glycolContainer}>
    <div className={classNames(styles.glycolCompartment)}>
      <span className={styles.fridgeName}>Glycol chiller #1</span>
      <span className={styles.setpoint}>20°</span>
      <SvgIconCooling className={classNames(styles.iconDefrost)} />
    </div>
  </div>
);
