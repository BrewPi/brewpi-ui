import React from 'react';
import styles from './styles.css';

const SvgTubeStraight = require('./svg/tube_straight.svg');
const SvgLiquidStraight = require('./svg/liquid_straight.svg');
import { SvgParent } from 'components/SvgParent';

const Straight = (props) => (
  <SvgParent>
    <SvgTubeStraight className={styles.tube} />
    <SvgLiquidStraight className={styles.liquid} />
  </SvgParent>
);

export const Tubes = {
  Straight,
};
