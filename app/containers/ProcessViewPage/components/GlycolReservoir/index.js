import React from 'react';
import styles from './styles.css';

const SvgGlycolReservoir = require('./svg/glycol_reservoir.svg?tag=g');

import { SvgParent } from '../SvgParent';

export const GlycolReservoir = () => (
  <SvgParent viewBox={'0 0 100 150'}>
    <SvgGlycolReservoir className={styles.glycolReservoir} />
  </SvgParent>
);
GlycolReservoir.propTypes = {
  liquid: React.PropTypes.string,
};
