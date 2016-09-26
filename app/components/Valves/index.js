/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "props" }] */
import React from 'react';
import styles from './styles.css';

// load svg's and inline them wigh g tag instead of svg tag, because they are used nested
const SvgBall = require('./svg/ball.svg?tag=g');
const SvgMotor = require('./svg/motor.svg?tag=g');
const SvgCheck = require('./svg/check-arrow.svg?tag=g');
const SvgTube = require('./svg/split-tube.svg?tag=g');
const SvgMotorPower = require('./svg/motor-power.svg?tag=g');

import { SvgParent } from 'components/SvgParent';

const powerClasses = {
  opening: styles.powerOpening,
  closing: styles.powerClosing,
  default: styles.powerIdle,
};
const posClasses = {
  open: styles.ballOpen,
  closed: styles.ballClosed,
  midway: styles.ballMidway,
  default: styles.ballOpen,
};

const Manual = (props) => {
  const posClass = posClasses[props.position] || posClasses.default;
  return (
    <SvgParent>
      <SvgTube className={styles.tube} />
      <SvgBall className={posClass} />
    </SvgParent>
  );
};
Manual.propTypes = {
  position: React.PropTypes.string,
};


const Motor = (props) => {
  const powerClass = powerClasses[props.powered] || powerClasses.default;
  const posClass = posClasses[props.position] || posClasses.default;

  return (
    <SvgParent>
      <SvgTube className={styles.tube} />
      <SvgBall className={posClass} />
      <SvgMotor className={powerClass} />
      <SvgMotorPower className={styles.powerIcon} />
    </SvgParent>
  );
};
Motor.propTypes = {
  powered: React.PropTypes.string,
  position: React.PropTypes.string,
};

const Check = (props) => (
  <SvgParent>
    <SvgTube className={styles.tube} />
    <SvgCheck />
  </SvgParent>
);

export const Valves = {
  Manual,
  Motor,
  Check,
};
