import React from 'react';
import styles from './styles.css';
import { Liquids } from '../Liquids';
import { SvgParent } from '../SvgParent';
import { FlowArrows, pickLiquid } from '../Flows';
const SvgFilter = require('./svg/filter.svg?tag=g');
const SvgDip = require('../Tubes/svg/tube_dip.svg?tag=g');
const SvgLiquidDip = require('../Tubes/svg/liquid_dip.svg?tag=g');


export class FilterBottom extends React.Component {
  static flows = () => ({ k: 'l' });
  render() {
    return (
      <SvgParent viewBox={'0 0 200 50'}>
        <SvgLiquidDip className={styles.liquid} style={Liquids.strokeStyle(pickLiquid(this.props.flows))} />
        <SvgDip className={styles.lines} />
        <SvgFilter className={styles.filter} />
        <FlowArrows flows={this.props.flows} />
      </SvgParent>
    );
  }
}
FilterBottom.propTypes = {
  flows: React.PropTypes.array,
};
