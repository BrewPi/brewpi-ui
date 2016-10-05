/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "props" }] */
import React from 'react';
import styles from './styles.css';
import { Liquids } from '../Liquids';

const SvgKeg = require('./svg/keg.svg?tag=g');
const SvgSetpoint = require('./svg/setpoint.svg?tag=g');
const SvgTemp = require('./svg/temp.svg?tag=g');
// const SvgName = require('./svg/name.svg?tag=g');
const SvgLiquidKeg = require('./svg/liquid_keg.svg?tag=g');

import { SvgParent } from '../SvgParent';

export const Keg = (props) => (
  <SvgParent viewBox={'0 0 100 250'}>
    <SvgLiquidKeg className={styles.kegFill} style={Liquids.fillStyle(props.liquid)} />
    <SvgKeg className={styles.keg} />
    <SvgSetpoint className={styles.setpoint} />
    <SvgTemp className={styles.temp} />
  </SvgParent>
);
Keg.propTypes = {
  liquid: React.PropTypes.string,
};
