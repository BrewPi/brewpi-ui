import React from 'react';
import styles from './styles.css';

const SvgBall = require('./svg/ball.svg');
const SvgShell = require('./svg/ball-shell.svg');
const SvgMotor = require('./svg/motor.svg');
const SvgCheck = require('./svg/check-arrow.svg');
const SvgTube = require('./svg/split-tube.svg');
const SvgMotorPower = require('./svg/motor-power.svg');

import { SvgParent } from 'components/SvgParent';


const Manual = (props) => (
  <SvgParent>
    <SvgTube className={styles.tube} />
    <SvgShell />
    <SvgBall />
  </SvgParent>
);

const Motor = (props) => (
  <SvgParent>
    <SvgTube className={styles.tube} />
    <SvgShell />
    <SvgBall />
    <SvgMotor className={styles.motor} />
    <SvgMotorPower className={styles.power_opening} />
  </SvgParent>
);

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
