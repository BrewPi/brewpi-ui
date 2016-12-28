/* eslint-disable react/no-multi-comp */
/* eslint-disable react/prefer-stateless-function */

import React from 'react';
import styles from './styles.css';

const SvgTubeInput = require('./svg/tube_input.svg?tag=g');
const SvgTubeOutput = require('./svg/tube_output.svg?tag=g');
const SvgLiquidInput = require('./svg/liquid_input.svg?tag=g');
const SvgLiquidOutput = require('./svg/liquid_output.svg?tag=g');
const SvgLiquidDip = require('./svg/liquid_dip.svg?tag=g');
const SvgTubeStraight = require('./svg/tube_straight.svg?tag=g');
const SvgLiquidStraight = require('./svg/liquid_straight.svg?tag=g');
const SvgTubeElbow = require('./svg/tube_elbow.svg?tag=g');
const SvgLiquidElbow = require('./svg/liquid_elbow.svg?tag=g');
const SvgTubeTee = require('./svg/tube_tee.svg?tag=g');
const SvgLiquidTee = require('./svg/liquid_tee.svg?tag=g');
const SvgTubeCross = require('./svg/tube_cross.svg?tag=g');
const SvgLiquidCross = require('./svg/liquid_cross.svg?tag=g');
const SvgTubeBridge = require('./svg/tube_bridge.svg?tag=g');
const SvgLiquidBridge = require('./svg/liquid_bridge.svg?tag=g');
const SvgTubeInlet = require('./svg/tube_inlet.svg?tag=g');
const SvgLiquidInlet = require('./svg/liquid_inlet.svg?tag=g');
const SvgTubeInletStraight = require('./svg/tube_inlet-straight.svg?tag=g');
const SvgLiquidInletStraight = require('./svg/liquid_inlet-straight.svg?tag=g');
const SvgTubeDip = require('./svg/tube_dip.svg?tag=g');
const SvgTubeInletWhirlpool = require('./svg/tube_inlet-whirlpool.svg?tag=g');
const SvgLiquidInletWhirlpool = require('./svg/liquid_inlet-whirlpool.svg?tag=g');
const SvgFitting = require('./svg/fitting.svg?tag=g');
const SvgLiquidFitting = require('./svg/liquid_fitting.svg?tag=g');

import { SvgParent } from '../SvgParent';
import { FlowArrows, FlowArrows2D, FlowArrowsBridge, pickLiquid } from '../Flows';
import { Liquids } from '../Liquids';

class Input extends React.Component {
  static flows = () => ({ s: 'r+99' }); // source on the right edge

  render() {
    return (
      <SvgParent>
        <SvgLiquidInput className={styles.liquid} style={Liquids.strokeStyle(pickLiquid(this.props.flows))} />
        <SvgTubeInput className={styles.tube} />
        <FlowArrows flows={this.props.flows} />
      </SvgParent>
    );
  }
}
Input.propTypes = {
  flows: React.PropTypes.array,
};

class Output extends React.Component {
  static flows = () => ({ l: 's' }); // sink on the left edge
  render() {
    return (
      <SvgParent>
        <SvgLiquidOutput className={styles.liquid} style={Liquids.strokeStyle(pickLiquid(this.props.flows))} />
        <SvgTubeOutput className={styles.tube} />
        <FlowArrows flows={this.props.flows} />
      </SvgParent>
    );
  }
}
Output.propTypes = {
  flows: React.PropTypes.array,
};


class Straight extends React.Component {
  static flows = () => ({ r: 'l', l: 'r' });

  render() {
    return (
      <SvgParent>
        <SvgLiquidStraight className={styles.liquid} style={Liquids.strokeStyle(pickLiquid(this.props.flows))} />
        <SvgTubeStraight className={styles.tube} />
        <FlowArrows flows={this.props.flows} />
      </SvgParent>
    );
  }
}
Straight.propTypes = {
  flows: React.PropTypes.array,
};

class Elbow extends React.Component {
  static flows = () => ({ t: 'r', r: 't' });

  render() {
    return (
      <SvgParent>
        <SvgLiquidElbow className={styles.liquid} style={Liquids.strokeStyle(pickLiquid(this.props.flows))} />
        <SvgTubeElbow className={styles.tube} />
        <FlowArrows flows={this.props.flows} />
      </SvgParent>
    );
  }
}
Elbow.propTypes = {
  flows: React.PropTypes.array,
};

class Tee extends React.Component {
  static flows = () => ({ l: 'tr', r: 'tl', t: 'rl' });
  render() {
    return (
      <SvgParent>
        <SvgLiquidTee className={styles.liquid} style={Liquids.strokeStyle(pickLiquid(this.props.flows))} />
        <SvgTubeTee className={styles.tube} />
        <FlowArrows flows={this.props.flows} />
      </SvgParent>
    );
  }
}
Tee.propTypes = {
  flows: React.PropTypes.array,
};

class Cross extends React.Component {
  static flows = () => ({ l: 'rtb', r: 'ltb', t: 'brl', b: 'tlr' });
  render() {
    return (
      <SvgParent>
        <SvgLiquidCross className={styles.liquid} style={Liquids.strokeStyle(pickLiquid(this.props.flows))} />
        <SvgTubeCross className={styles.tube} />
        <FlowArrows flows={this.props.flows} />
      </SvgParent>
    );
  }
}
Cross.propTypes = {
  flows: React.PropTypes.array,
};

class Bridge extends React.Component {
  static flows = () => ({ r: 'l', l: 'r' });
  render() {
    return (
      <SvgParent>
        <SvgLiquidBridge className={styles.liquid} style={Liquids.strokeStyle(pickLiquid(this.props.flows))} />
        <SvgTubeBridge className={styles.tube} />
        <FlowArrowsBridge flows={this.props.flows} />
      </SvgParent>
    );
  }
}
Bridge.propTypes = {
  flows: React.PropTypes.array,
};

class Inlet extends React.Component {
  static flows = () => ({ l: 'k' });
  render() {
    return (
      <SvgParent>
        <SvgLiquidInlet className={styles.liquid} style={Liquids.strokeStyle(pickLiquid(this.props.flows))} />
        <SvgTubeInlet className={styles.tube} />
        <FlowArrows flows={this.props.flows} />
      </SvgParent>
    );
  }
}
Inlet.propTypes = {
  flows: React.PropTypes.array,
};

class InletStraight extends React.Component {
  static flows = () => ({ l: 'k' });
  render() {
    return (
      <SvgParent>
        <SvgLiquidInletStraight className={styles.liquid} style={Liquids.strokeStyle(pickLiquid(this.props.flows))} />
        <SvgTubeInletStraight className={styles.tube} />
        <FlowArrows flows={this.props.flows} />
      </SvgParent>
    );
  }
}
InletStraight.propTypes = {
  flows: React.PropTypes.array,
};


class Dip extends React.Component {
  static flows = () => ({ k: 'l' });
  render() {
    return (
      <SvgParent>
        <SvgLiquidDip className={styles.liquid} style={Liquids.strokeStyle(pickLiquid(this.props.flows))} />
        <SvgTubeDip className={styles.tube} />
        <FlowArrows flows={this.props.flows} />
      </SvgParent>
    );
  }
}
Dip.propTypes = {
  flows: React.PropTypes.array,
};

class InletWhirlpool extends React.Component {
  static flows = () => ([[{ l: 'b' }], [{ t: 'b' }], [{ t: 'b' }], [{ t: 'k' }]]);
  render() {
    return (
      <SvgParent viewBox={'0 0 50 200'}>
        <SvgLiquidInletWhirlpool className={styles.liquid} style={Liquids.strokeStyle(pickLiquid(this.props.flows, 0, 0))} />
        <SvgTubeInletWhirlpool className={styles.tube} />
        <FlowArrows2D flows={this.props.flows} />
      </SvgParent>
    );
  }
}
InletWhirlpool.propTypes = {
  flows: React.PropTypes.array,
};

class Fitting extends React.Component {
  static flows = (data) => {
    const input = data.getIn(['settings', 'dir']) === 'in';
    return (input) ? { l: 'k' } : { k: 'l' }; // only input when explicitly set as input
  }
  render() {
    return (
      <SvgParent viewBox={'0 0 50 50'}>
        <SvgLiquidFitting className={styles.liquid} style={Liquids.strokeStyle(pickLiquid(this.props.flows))} />
        <SvgFitting className={styles.tube} />
      </SvgParent>
    );
  }
}
Fitting.propTypes = {
  flows: React.PropTypes.array,
};

export const Tubes = {
  Input,
  Output,
  Dip,
  Straight,
  Elbow,
  Tee,
  Cross,
  Bridge,
  Inlet,
  InletStraight,
  InletWhirlpool,
  Fitting,
};
