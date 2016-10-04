/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "props" }] */
import React from 'react';
import styles from './styles.css';
import { Liquids } from '../Liquids';

const SvgElement = require('./svg/heater_element.svg?tag=g');
const SvgDisplay = require('./svg/heater_display.svg?tag=g');
const SvgValue = require('./svg/value.svg?tag=g');

import { SvgParent } from '../SvgParent';

export const Heater = (props) => (
  <SvgParent viewBox={'0 0 250 50'}>
    <SvgElement className={styles.element} />
    <SvgDisplay className={styles.display} style={Liquids.fillStyle(props.liquid)} />
    <SvgValue className={styles.value} />
  </SvgParent>
);
Heater.propTypes = {
  liquid: React.PropTypes.string,
};
