import React from 'react';
import styles from './styles.css';

const SvgLauterhexe = require('./svg/lauterhexe.svg?tag=g');

import { SvgParent } from '../SvgParent';

export const Lauterhexe = (props) => (
  <SvgParent viewBox={'0 0 200 50'}>
    <SvgLauterhexe className={styles.lauterhexe} />
  </SvgParent>
);
Lauterhexe.propTypes = {
  liquid: React.PropTypes.string,
};
