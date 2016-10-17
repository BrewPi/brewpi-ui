/* eslint-disable react/no-multi-comp */

import React from 'react';
const classNames = require('classnames');
import styles from './styles.css';
import { Map } from 'immutable';

// load svg's and inline them wigh g tag instead of svg tag, because they are used nested
const SvgBall = require('./svg/ball.svg?tag=g');
const SvgMotor = require('./svg/motor.svg?tag=g');
const SvgCheck = require('./svg/check-arrow.svg?tag=g');
const SvgTube = require('./svg/split-tube.svg?tag=g');
const SvgMotorPower = require('./svg/motor-power.svg?tag=g');
const SvgLiquidStraight = require('./svg/liquid_straight.svg?tag=g');
const SvgLiquidStraightSplit = require('./svg/liquid_straight_split.svg?tag=g');
const SvgLiquidBall = require('./svg/liquid_ball.svg?tag=g');

import { SvgParent } from '../SvgParent';
import { Liquids } from '../Liquids';

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

class Manual extends React.Component {
  static flows = (data) => {
    const pos = data.getIn(['settings', 'pos']);
    return (pos !== 'closed') ? { r: 'l', l: 'r' } : {};
  };

  render() {
    const posClass = posClasses[this.props.settings.get('pos')] || posClasses.default;
    return (
      <SvgParent>
        <SvgLiquidStraightSplit className={styles.liquid} style={Liquids.strokeStyle(this.props.liquid)} />
        <SvgTube className={styles.tube} />
        <SvgBall className={classNames(styles.ball, posClass)} />
      </SvgParent>
    );
  }
}

Manual.propTypes = {
  settings: React.PropTypes.object,
  liquid: React.PropTypes.string,
};
Manual.defaultProps = {
  settings: new Map(),
};


class Motor extends React.Component {
  static flows = (data) => {
    const pos = data.getIn(['settings', 'pos']);
    return (pos !== 'closed') ? { r: 'l', l: 'r' } : {};
  };
  render() {
    const powerClass = powerClasses[this.props.powered] || powerClasses.default;
    const posClass = posClasses[this.props.settings.get('pos')] || posClasses.default;

    return (
      <SvgParent>
        <SvgLiquidStraightSplit className={styles.liquid} style={Liquids.strokeStyle(this.props.liquid)} />
        <SvgTube className={styles.tube} />
        <SvgBall className={classNames(styles.ball, posClass)} />
        <SvgMotor className={powerClass} />
        <SvgMotorPower className={styles.powerIcon} />
      </SvgParent>
    );
  }
}
Motor.propTypes = {
  settings: React.PropTypes.object,
  powered: React.PropTypes.string,
  liquid: React.PropTypes.string,
};
Motor.defaultProps = {
  settings: new Map(),
};

class Check extends React.Component {
  static flows = () => ({ l: 'r' });
  render() {
    return (
      <SvgParent>
        <SvgLiquidBall className={styles.ball} style={Liquids.fillStyle(this.props.liquid)} />
        <SvgLiquidStraight className={styles.liquid} style={Liquids.strokeStyle(this.props.liquid)} />
        <SvgTube className={styles.tube} />
        <SvgCheck />
      </SvgParent>
    );
  }
}
Check.propTypes = {
  liquid: React.PropTypes.string,
};

export const Valves = {
  Manual,
  Motor,
  Check,
};
