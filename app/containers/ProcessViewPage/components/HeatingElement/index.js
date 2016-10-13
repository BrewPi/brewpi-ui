import React from 'react';
import styles from './styles.css';
import { Liquids } from '../Liquids';
const classNames = require('classnames');

const SvgElement = require('./svg/heater_element.svg?tag=g');
const SvgDisplay = require('./svg/heater_display.svg?tag=g');

import { SvgParent } from '../SvgParent';

export const HeatingElement = (props) => {
  const { flip } = props; // is parent flipped?
  const unflipStyle = flip ? styles.unflip : undefined;
  return (
    <div className={styles.root}>
      <SvgParent viewBox={'0 0 250 50'}>
        <SvgElement className={styles.element} />
        <SvgDisplay className={styles.display} style={Liquids.fillStyle(props.liquid)} />
      </SvgParent>
      <span className={classNames(styles.value, unflipStyle)}>0%</span>
    </div>
  );
};
HeatingElement.propTypes = {
  flip: React.PropTypes.bool,
  liquid: React.PropTypes.string,
};
