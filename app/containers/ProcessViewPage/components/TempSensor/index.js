/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "props" }] */
import React from 'react';
import styles from './styles.css';
import { Liquids } from '../Liquids';

const SvgSplitTube = require('./svg/split-tube.svg?tag=g');
const SvgDisplay = require('./svg/display.svg?tag=g');
const SvgValue = require('./svg/value.svg?tag=g');

import { SvgParent } from '../SvgParent';

export const TempSensor = (props) => (
  <SvgParent>
    <SvgSplitTube className={styles.splitTube} />
    <SvgDisplay className={styles.display} style={Liquids.fillStyle(props.liquid)} />
    <SvgValue className={styles.value} />
  </SvgParent>
);
TempSensor.propTypes = {
  liquid: React.PropTypes.string,
};
