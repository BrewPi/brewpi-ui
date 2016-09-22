import React from 'react';
import SVG from '../../svg/svg.js';
import styles from './styles.css';

const SvgBall = require('./svg/ball.svg');
const SvgShell = require('./svg/ball_shell.svg');
const SvgMotor = require('./svg/motor.svg');
const SvgTube = require('./svg/split_tube.svg');


export const Manual = (props) => {
  let svgClass = '';
  if (props.rotate) {
    svgClass = styles[`rotate-${props.rotate}`];
  }
  return (
    <svg className={svgClass}>
      <SvgTube className={styles.tube} />
      <SvgShell />
      <SvgBall />
    </svg>
    );
};

export const Motor = (props) => {
  const className = props.rotate ? 'rotate-' + props.rotate : '';
  return <SVG.Valve.Motor className={className} />;
};

export const Check = (props) => {
  const className = props.rotate ? 'rotate-' + props.rotate : '';
  return <SVG.Valve.Check className={className} />;
};
