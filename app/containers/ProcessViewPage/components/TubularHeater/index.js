import React from 'react';
import styles from './styles.css';

const SvgTubularHeater = require('./svg/tubularheater.svg?tag=g');

import { SvgParent } from '../SvgParent';

export const TubularHeater = () => (
  <SvgParent viewBox={'0 0 225 50'}>
    <SvgTubularHeater className={styles.tubularheater} />
  </SvgParent>
);
TubularHeater.propTypes = {
  powered: React.PropTypes.string, // TODO: display power (red glow?)
};
