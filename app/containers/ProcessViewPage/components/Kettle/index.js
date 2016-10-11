import React from 'react';
import styles from './styles.css';
import { Liquids } from '../Liquids';

const SvgKettle = require('./svg/kettle.svg?tag=g');
const SvgLiquidKettle = require('./svg/liquid_kettle.svg?tag=g');
const SvgValue1 = require('./svg/value1.svg?tag=g');
const SvgValue2 = require('./svg/value2.svg?tag=g');


import { SvgParent } from '../SvgParent';

export const Kettle = (props) => (
  <SvgParent viewBox={'0 0 200 300'}>
    <SvgLiquidKettle className={styles.kettleFill} style={Liquids.fillStyle(props.liquid)} />
    <SvgKettle className={styles.kettle} />
    <SvgValue1 className={styles.temp} />
    <SvgValue2 className={styles.volume} />
  </SvgParent>
);
Kettle.propTypes = {
  liquid: React.PropTypes.string,
};
