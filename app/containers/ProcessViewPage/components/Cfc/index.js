/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "props" }] */
import React from 'react';
import styles from './styles.css';
import { Liquids } from '../Liquids';

const SvgCfc = require('./svg/tubes_cfc.svg?tag=g');
const SvgLiquidCfcTop = require('./svg/liquid_cfc_top.svg?tag=g');
const SvgLiquidCfcBottom = require('./svg/liquid_cfc_bottom.svg?tag=g');
const SvgLiquidTubesTop = require('./svg/liquid_tubes_top.svg?tag=g');
const SvgLiquidTubesBottom = require('./svg/liquid_tubes_bottom.svg?tag=g');

import { SvgParent } from '../SvgParent';

export const Cfc = (props) => (
  <SvgParent viewBox={'0 0 150 100'}>
    <SvgLiquidTubesTop className={styles.liquidTubes} style={Liquids.strokeStyle(props.liquid)} />
    <SvgLiquidTubesBottom className={styles.liquidTubes} style={Liquids.strokeStyle(props.liquid)} />
    <SvgLiquidCfcTop className={styles.liquidBody} style={Liquids.strokeStyle(props.liquid)} />
    <SvgLiquidCfcBottom className={styles.liquidBody} style={Liquids.strokeStyle(props.liquid)} />
    <SvgCfc className={styles.tubes} />
  </SvgParent>
);
Cfc.propTypes = {
  liquid: React.PropTypes.string,
};
