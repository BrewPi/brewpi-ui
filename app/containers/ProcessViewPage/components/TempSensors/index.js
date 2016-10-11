import React from 'react';
import styles from './styles.css';
import { Liquids } from '../Liquids';

const SvgDisplay = require('./svg/display.svg?tag=g');
const SvgValue = require('./svg/value.svg?tag=g');

import { SvgParent } from '../SvgParent';

const Inline = (props) => (
  <SvgParent>
    <SvgDisplay className={styles.display} style={Liquids.fillStyle(props.liquid)} />
    <SvgValue className={styles.value} />
  </SvgParent>
);
Inline.propTypes = {
  liquid: React.PropTypes.string,
};

export const TempSensors = {
  Inline,
};
