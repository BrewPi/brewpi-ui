/* eslint-disable react/no-multi-comp */

import React from 'react';
const classNames = require('classnames');
import styles from './styles.css';
import { Map } from 'immutable';
import { FlowArrows } from '../Flows';

// load svg's and inline them wigh g tag instead of svg tag, because they are used nested
const SvgBall = require('./svg/ball.svg?tag=g');
const SvgMotor = require('./svg/motor.svg?tag=g');
const SvgCheck = require('./svg/check-arrow.svg?tag=g');
const SvgTube = require('./svg/split-tube.svg?tag=g');
const SvgMotorPower = require('./svg/motor-power.svg?tag=g');

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

// Render liquid all the way through, or only up to the ball if the valve is closed, but there is inflow from a side.
const renderLiquid = (flows) => {
  let left = false;
  let middle = false;
  let right = false;
  if (typeof flows !== 'undefined') {
    for (const flow of flows.values()) {
      for (const [inEdge, outEdges] of Object.entries(flow.dir)) {
        if (outEdges !== '') {
          middle = flow.liquid; // flow from one side to the other side, everything is filled
          left = flow.liquid;
          right = flow.liquid;
        } else {
          // blocked flow on an edge, render up to ball
          switch (inEdge) {
            case 'l':
              left = flow.liquid;
              // render liquid on the left side
              break;
            case 'r':
              right = flow.liquid;
              // render liquid on the right side
              break;
            default:
              break;
          }
        }
      }
    }
  }
  return (
    <g className={styles.liquid}>
      {(left) ? <g key={'l'} style={Liquids.strokeStyle(left)}><line x1="0" y1="25" x2="10" y2="25" /></g> : null }
      {(middle) ? <g key={'m'} style={Liquids.fillStyle(middle)}><circle cx="25" cy="25" r="16" /></g> : null }
      {(right) ? <g key={'r'} style={Liquids.strokeStyle(right)}><line x1="40" y1="25" x2="50" y2="25" /></g> : null }
    </g>
  );
};


class Manual extends React.Component {
  static flows = (data) => {
    const pos = data.getIn(['settings', 'pos']);
    return (pos !== 'closed') ? { r: 'l', l: 'r' } : { r: '', l: '' };
  };

  render() {
    const posClass = posClasses[this.props.settings.pos] || posClasses.default;
    const renderedLiquid = renderLiquid(this.props.flows);
    return (
      <div className={styles.Valve}>
        <SvgParent>
          {renderedLiquid}
          <SvgTube className={styles.tube} />
          <SvgBall className={classNames(styles.ball, posClass)} />
          <FlowArrows flows={this.props.flows} />
        </SvgParent>
        <span className={styles.id}>{this.props.id}</span>
      </div>
    );
  }
}

Manual.propTypes = {
  settings: React.PropTypes.object,
  flows: React.PropTypes.array,
  id: React.PropTypes.string,
};
Manual.defaultProps = {
  settings: new Map(),
};


class Motor extends React.Component {
  static flows = (data) => {
    const pos = data.getIn(['settings', 'pos']);
    return (pos !== 'closed') ? { r: 'l', l: 'r' } : { r: '', l: '' };
  };
  render() {
    const powerClass = powerClasses[this.props.settings.powered] || powerClasses.default;
    const posClass = posClasses[this.props.settings.pos] || posClasses.default;
    const renderedLiquid = renderLiquid(this.props.flows);
    return (
      <div className={styles.Valve}>
        <SvgParent>
          {renderedLiquid}
          <SvgTube className={styles.tube} />
          <SvgBall className={classNames(styles.ball, posClass)} />
          <SvgMotor className={powerClass} />
          <SvgMotorPower className={styles.powerIcon} />
          <FlowArrows flows={this.props.flows} />
        </SvgParent>
        <span className={styles.id}>{this.props.id}</span>
      </div>
    );
  }
}
Motor.propTypes = {
  settings: React.PropTypes.object,
  flows: React.PropTypes.array,
  id: React.PropTypes.string,
};
Motor.defaultProps = {
  settings: new Map(),
};

class Check extends React.Component {
  static flows = () => ({ l: 'r', r: '' });
  render() {
    const renderedLiquid = renderLiquid(this.props.flows);
    return (
      <SvgParent>
        {renderedLiquid}
        <SvgTube className={styles.tube} />
        <SvgCheck />
        <FlowArrows flows={this.props.flows} />
      </SvgParent>
    );
  }
}
Check.propTypes = {
  flows: React.PropTypes.array,
};

export const Valves = {
  Manual,
  Motor,
  Check,
};
