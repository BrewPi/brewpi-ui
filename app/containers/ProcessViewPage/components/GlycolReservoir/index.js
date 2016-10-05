/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "props" }] */
import React from 'react';
import styles from './styles.css';

const SvgGlycolReservoir = require('./svg/glycol_reservoir.svg?tag=g');
const SvgIconCool = require('./svg/icon_cool.svg?tag=g');

import { SvgParent } from '../SvgParent';

export const GlycolReservoir = (props) => (
  <SvgParent viewBox={'0 0 100 150'}>
    <SvgGlycolReservoir className={styles.glycolreservoir} />
    <SvgIconCool className={styles.glycolreservoir} />
  </SvgParent>
);
GlycolReservoir.propTypes = {
  liquid: React.PropTypes.string,
};
