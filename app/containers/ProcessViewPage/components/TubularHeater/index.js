/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "props" }] */
import React from 'react';
import styles from './styles.css';

const SvgTubularHeater = require('./svg/tubularheater.svg?tag=g');

import { SvgParent } from '../SvgParent';

export const TubularHeater = (props) => (
  <SvgParent viewBox={'0 0 225 50'}>
    <SvgTubularHeater className={styles.tubularheater} />
  </SvgParent>
);
TubularHeater.propTypes = {
  liquid: React.PropTypes.string,
};
