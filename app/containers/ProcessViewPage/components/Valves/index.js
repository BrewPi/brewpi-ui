/* eslint-disable react/no-multi-comp */

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions';
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
const SvgTBall = require('./svg/t-ball.svg?tag=g');
const SvgTTube = require('./svg/t-tube.svg?tag=g');

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
  const liquid = { l: false, r: false, t: false, b: false, c: false };
  if (typeof flows !== 'undefined') {
    for (const flow of flows.values()) {
      for (const [inEdge, outEdges] of Object.entries(flow.dir)) {
        for (const key of Object.keys(liquid)) {
          if (key === inEdge) {
            liquid[key] = flow.liquid;
          }
          if (outEdges.indexOf(key) > -1) {
            liquid[key] = flow.liquid;
            liquid.c = flow.liquid; // if there is an outflow, the center is also filled
          }
        }
      }
    }
  }
  return (
    <g className={styles.liquid}>
      {(liquid.l) ? <g key={'l'} style={Liquids.strokeStyle(liquid.l)}><line x1="0" y1="25" x2="10" y2="25" /></g> : null }
      {(liquid.r) ? <g key={'r'} style={Liquids.strokeStyle(liquid.r)}><line x1="40" y1="25" x2="50" y2="25" /></g> : null }
      {(liquid.t) ? <g key={'t'} style={Liquids.strokeStyle(liquid.t)}><line x1="25" y1="0" x2="25" y2="10" /></g> : null }
      {(liquid.b) ? <g key={'b'} style={Liquids.strokeStyle(liquid.b)}><line x1="25" y1="40" x2="25" y2="50" /></g> : null }
      {(liquid.c) ? <g key={'c'} style={Liquids.fillStyle(liquid.c)}><circle cx="25" cy="25" r="16" /></g> : null }
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
      <button className={styles.Valve} onClick={() => this.props.onValveClicked(this.props.id, this.props.settings.pos)}>
        <SvgParent>
          {renderedLiquid}
          <SvgTube className={styles.tube} />
          <SvgBall className={classNames(styles.ball, posClass)} />
          <FlowArrows flows={this.props.flows} />
        </SvgParent>
        <span className={styles.id}>{this.props.id}</span>
      </button>
    );
  }
}

Manual.propTypes = {
  settings: React.PropTypes.object,
  flows: React.PropTypes.array,
  id: React.PropTypes.string,
  onValveClicked: React.PropTypes.func,
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
      <button className={styles.Valve} onClick={() => this.props.onValveClicked(this.props.id, this.props.settings.pos)}>
        <SvgParent>
          {renderedLiquid}
          <SvgTube className={styles.tube} />
          <SvgBall className={classNames(styles.ball, posClass)} />
          <SvgMotor className={powerClass} />
          <SvgMotorPower className={styles.powerIcon} />
          <FlowArrows flows={this.props.flows} />
        </SvgParent>
        <span className={styles.id}>{this.props.id}</span>
      </button>
    );
  }
}
Motor.propTypes = {
  settings: React.PropTypes.object,
  flows: React.PropTypes.array,
  id: React.PropTypes.string,
  onValveClicked: React.PropTypes.func,
};
Motor.defaultProps = {
  settings: new Map(),
};

class ManualTee extends React.Component {
  static flows = (data) => {
    const pos = data.getIn(['settings', 'pos']);
    const variant = data.getIn(['options', 'variant']);
    const possibleFlows = {
      v1: { open: { b: 'lr', l: 'rb', r: 'bl', t: '' }, closed: { l: 'b', b: 'l', t: '', r: '' } },
      v2: { open: { b: 'l', l: 'b', t: '', r: '' }, closed: { l: 'r', r: 'l', t: '', b: '' } },
      v3: { open: { l: 'r', r: 'l', t: '', b: '' }, closed: { b: 'r', r: 'b', l: '', t: '' } },
      v4: { open: { b: 'r', r: 'b', l: '', t: '' }, closed: { l: 'rb', r: 'bl', b: 'rl', t: '' } },
    };
    let possibleFlow = possibleFlows.v1; // default to variant 1
    if (variant in possibleFlows) {
      possibleFlow = possibleFlows[variant];
    }
    return (pos !== 'closed') ? possibleFlow.open : possibleFlow.closed;
  };

  render() {
    const posClass = posClasses[this.props.settings.pos] || posClasses.default;
    const renderedLiquid = renderLiquid(this.props.flows);
    const variantClass = { v1: styles.variant1, v2: styles.variant2, v3: styles.variant3, v4: styles.variant4 };
    return (
      <button className={styles.Valve} onClick={() => this.props.onValveClicked(this.props.id, this.props.settings.pos)}>
        <SvgParent>
          {renderedLiquid}
          <SvgTTube className={styles.tube} />
          <g className={variantClass[this.props.options.variant]}>
            <SvgTBall className={classNames(styles.ball, posClass)} />
          </g>
          <FlowArrows flows={this.props.flows} />
        </SvgParent>
        <span className={styles.id}>{this.props.id}</span>
      </button>
    );
  }
}

ManualTee.propTypes = {
  settings: React.PropTypes.object,
  options: React.PropTypes.object,
  flows: React.PropTypes.array,
  id: React.PropTypes.string,
  onValveClicked: React.PropTypes.func,
};
ManualTee.defaultProps = {
  settings: new Map(),
  options: new Map(),
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    onValveClicked: (valveId, oldPos) => dispatch(actions.valveClicked(valveId, oldPos)),
  }, dispatch);
}

export const Valves = {
  Manual: connect(null, mapDispatchToProps)(Manual),
  Motor: connect(null, mapDispatchToProps)(Motor),
  ManualTee: connect(null, mapDispatchToProps)(ManualTee),
  Check,
};
