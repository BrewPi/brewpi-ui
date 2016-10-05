/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "props" }] */
import React from 'react';
import styles from './styles.css';
import { Liquids } from '../Liquids';

const SvgBottle = require('./svg/bottle.svg?tag=g');
const SvgSetpoint = require('./svg/setpoint.svg?tag=g');
const SvgTemp = require('./svg/temp.svg?tag=g');
const SvgName = require('./svg/name.svg?tag=g');
const SvgLiquidBottle = require('./svg/liquid_bottle.svg?tag=g');

import { SvgParent } from '../SvgParent';

export const Bottle = (props) => (
  <SvgParent viewBox={'0 0 100 200'}>
    <SvgLiquidBottle className={styles.bottlefill} style={Liquids.fillStyle(props.liquid)} />
    <SvgBottle className={styles.bottle} />
    <SvgSetpoint className={styles.setpoint} />
    <SvgTemp className={styles.temp} />
    <SvgName className={styles.bottlename} />
  </SvgParent>
);
Bottle.propTypes = {
  liquid: React.PropTypes.string,
};
