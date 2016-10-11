/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "props" }] */
import React from 'react';
import styles from './styles.css';
import { Liquids } from '../Liquids';

const SvgConical = require('./svg/conical.svg?tag=g');
const SvgLiquidConical = require('./svg/liquid_conical.svg?tag=g');
const SvgConicalLegs = require('./svg/conical_legs.svg?tag=g');
const SvgSetpoint = require('./svg/setpoint.svg?tag=g');
const SvgTemp = require('./svg/temp.svg?tag=g');
const SvgCoil = require('../Coil/svg/coil.svg?tag=g');


import { SvgParent } from '../SvgParent';

export const Conical = (props) => (
  <SvgParent viewBox={'0 0 150 450'}>
    <SvgLiquidConical className={styles.conicalFill} style={Liquids.fillStyle(props.liquid)} />
    <SvgConical className={styles.conical} />
    <SvgSetpoint className={styles.setpoint} />
    <SvgTemp className={styles.temp} />
    <SvgCoil className={styles.coil} />
    <SvgConicalLegs className={styles.conicalLegs} />
  </SvgParent>
);
Conical.propTypes = {
  liquid: React.PropTypes.string,
};
