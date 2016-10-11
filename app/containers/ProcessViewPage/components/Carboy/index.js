import React from 'react';
import styles from './styles.css';
import { Liquids } from '../Liquids';

const SvgCarboy = require('./svg/carboy.svg?tag=g');
const SvgSetpoint = require('./svg/setpoint.svg?tag=g');
const SvgTemp = require('./svg/temp.svg?tag=g');
const SvgName = require('./svg/name.svg?tag=g');
const SvgLiquidCarboy = require('./svg/liquid_carboy.svg?tag=g');

import { SvgParent } from '../SvgParent';

export const Carboy = (props) => (
  <SvgParent viewBox={'0 0 100 200'}>
    <SvgLiquidCarboy className={styles.carboyFill} style={Liquids.fillStyle(props.liquid)} />
    <SvgCarboy className={styles.carboy} />
    <SvgSetpoint className={styles.setpoint} />
    <SvgTemp className={styles.temp} />
    <SvgName className={styles.carboyName} />
  </SvgParent>
);
Carboy.propTypes = {
  liquid: React.PropTypes.string,
};
