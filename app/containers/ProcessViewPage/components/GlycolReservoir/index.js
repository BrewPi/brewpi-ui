import React from 'react';
import styles from './styles.css';
const classNames = require('classnames');

const SvgGlycolReservoir = require('./svg/glycol_reservoir.svg?tag=g');
const SvgIconCooling = require('../Icons/svg/cooling.svg');

import { SvgParent } from '../SvgParent';

export const GlycolReservoir = (props) => (
  <SvgParent viewBox={'0 0 100 150'}>
    <SvgGlycolReservoir className={styles.glycolReservoir} />
    <SvgIconCooling className={classNames(styles.iconCooling)} />
  </SvgParent>
);
GlycolReservoir.propTypes = {
  liquid: React.PropTypes.string,
};
