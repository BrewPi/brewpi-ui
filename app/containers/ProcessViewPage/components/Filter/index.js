import React from 'react';
import styles from './styles.css';
import { Liquids } from '../Liquids';

const SvgFilter = require('./svg/filter.svg?tag=g');
const SvgInlet = require('../Tubes/svg/tube_dip.svg?tag=g');
const SvgLiquidInlet = require('../Tubes/svg/liquid_dip.svg?tag=g');

import { SvgParent } from '../SvgParent';

export const Filter = (props) => (
  <SvgParent viewBox={'0 0 200 50'}>
    <SvgLiquidInlet className={styles.liquid} style={Liquids.strokeStyle(props.liquid)} />
    <SvgInlet className={styles.lines} />
    <SvgFilter className={styles.filter} />
  </SvgParent>
);
Filter.propTypes = {
  liquid: React.PropTypes.string,
};
