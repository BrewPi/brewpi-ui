/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "props" }] */
import React from 'react';
import styles from './styles.css';
import { Liquids } from '../Liquids';
const classNames = require('classnames');
import { getPowerClass, getRotateClass } from '../sharedCss';

const SvgTubes = require('./svg/tubes.svg?tag=g');
const SvgBall = require('./svg/ball.svg?tag=g');
const SvgBlades = require('./svg/blades.svg?tag=g');
const SvgLiquidPump = require('./svg/liquid_pump.svg?tag=g');

import { SvgParent } from '../SvgParent';


export const Pump = (props) => {
  const powerClass = getPowerClass(props.powered);
  const rotateClass = getRotateClass(props.powered);
  return (
    <SvgParent>

      <SvgBall className={styles.ball} style={Liquids.fillStyle(props.liquid)} />
      <g className={styles.bladesWrapper}>
        <SvgBlades className={classNames(styles.blades, rotateClass)} />
      </g>
      <SvgLiquidPump className={styles.liquid} style={Liquids.strokeStyle(props.liquid)} />
      <SvgTubes className={classNames(styles.tubes)} />
    </SvgParent>
  );
};
Pump.propTypes = {
  powered: React.PropTypes.string,
  liquid: React.PropTypes.string,
};

export default Pump;
