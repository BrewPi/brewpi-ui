import React from 'react';
import styles from './styles.css';
import { Liquids } from '../Liquids';
const classNames = require('classnames');
import { getRotateClass } from '../sharedCss';

const SvgTubes = require('./svg/tubes.svg?tag=g');
const SvgBall = require('./svg/ball.svg?tag=g');
const SvgBlades = require('./svg/blades.svg?tag=g');
const SvgLiquidPump = require('./svg/liquid_pump.svg?tag=g');

import { SvgParent } from '../SvgParent';
import { pickLiquid } from '../Flows';

export class Pump extends React.Component {
  static flows = () => ({ l: 'r' });
  render() {
    const powered = this.props.settings.powered;
    const rotateClass = getRotateClass(powered);
    const liquid = pickLiquid(this.props.flows, Pump.flows());
    return (
      <div>
        <SvgParent>
          <SvgBall className={styles.ball} style={Liquids.fillStyle(liquid)} />
          <g className={styles.bladesWrapper}>
            <SvgBlades className={classNames(styles.blades, rotateClass)} />
          </g>
          <SvgLiquidPump className={styles.liquid} style={Liquids.strokeStyle(liquid)} />
          <SvgTubes className={classNames(styles.tubes)} />
        </SvgParent>
        <span className={styles.id}>{this.props.id}</span>
      </div>
    );
  }
}
Pump.propTypes = {
  settings: React.PropTypes.object,
  flows: React.PropTypes.array,
  id: React.PropTypes.string,
};
Pump.defaultProps = {
  settings: new Map(),
};


export default Pump;
