import React from 'react';
import styles from './styles.css';
import { Liquids } from '../Liquids';
import { FlowArrows, FlowArrowsCfc, pickLiquid } from '../Flows';

const SvgCfc = require('./svg/tubes_cfc.svg?tag=g');
const SvgLiquidCfcTop = require('./svg/liquid_cfc_top.svg?tag=g');
const SvgLiquidCfcBottom = require('./svg/liquid_cfc_bottom.svg?tag=g');
const SvgLiquidTubesTop = require('./svg/liquid_tubes_top.svg?tag=g');
const SvgLiquidTubesBottom = require('./svg/liquid_tubes_bottom.svg?tag=g');

import { SvgParent } from '../SvgParent';

export class Cfc extends React.Component {
  static flows = () => ([
    [{ l: 'r', r: 'l' }, { l: 'r', r: 'l' }, { l: 'r', r: 'l' }],
    [{ l: 'r', r: 'l' }, { l: 'r', r: 'l' }, { l: 'r', r: 'l' }],
  ]);
  render() {
    let liquidTop;
    let liquidBottom;
    let flowArrows;
    if (this.props.flows !== undefined) {
      liquidTop = pickLiquid(this.props.flows[0][0]);
      liquidBottom = pickLiquid(this.props.flows[1][0]);
      flowArrows = <FlowArrowsCfc flows={this.props.flows} />;
    }
    return (
      <SvgParent viewBox={'0 0 150 100'}>
        <SvgLiquidTubesTop className={styles.liquidTubes} style={Liquids.strokeStyle(liquidTop)} />
        <SvgLiquidTubesBottom className={styles.liquidTubes} style={Liquids.strokeStyle(liquidBottom)} />
        <SvgLiquidCfcTop className={styles.liquidBody} style={Liquids.strokeStyle(liquidTop)} />
        <SvgLiquidCfcBottom className={styles.liquidBody} style={Liquids.strokeStyle(liquidBottom)} />
        <SvgCfc className={styles.tubes} />
        {flowArrows}
      </SvgParent>
    );
  }
}
Cfc.propTypes = {
  flows: React.PropTypes.arrayOf(
    React.PropTypes.arrayOf(
      React.PropTypes.arrayOf(
        React.PropTypes.object
      )
    )
  ),
};
