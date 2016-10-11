import React from 'react';
import styles from './styles.css';
import { Liquids } from '../Liquids';
const classNames = require('classnames');
import { getRotateClass } from '../sharedCss';

const SvgTubes = require('./svg/tubes.svg?tag=g');
const SvgBall = require('./svg/ball.svg?tag=g');
const SvgBlades = require('./svg/blades.svg?tag=g');

import { SvgParent } from '../SvgParent';


export const SubmersiblePump = (props) => {
  const rotateClass = getRotateClass(props.powered);
  return (
    <SvgParent>
      <SvgBall className={styles.ball} style={Liquids.fillStyle(props.liquid)} />
      <g className={styles.bladesWrapper}>
        <SvgBlades className={classNames(styles.blades, rotateClass)} />
      </g>
      <SvgTubes className={classNames(styles.tubes)} />
    </SvgParent>
  );
};
SubmersiblePump.propTypes = {
  powered: React.PropTypes.string,
  liquid: React.PropTypes.string,
};

export default SubmersiblePump;
