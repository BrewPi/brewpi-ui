import React from 'react';
import styles from './styles.css';
import { Liquids } from '../Liquids';
import { FlowArrows, pickLiquid } from '../Flows';

const SvgCoil = require('./svg/coil.svg?tag=g');
const SvgLiquidCoil = require('./svg/liquid_coil.svg?tag=g');

import { SvgParent } from '../SvgParent';

export class Coil extends React.Component {
  static flows = () => ([
    [{ l: 'r', r: 'l' }, { l: 'b', b: 'l' }, {}],
    [{ l: 'r', r: 'l' }, { t: 'l', l: 't' }, {}],
  ]);
  render() {
    let liquid;
    let flowArrows;
    if (this.props.flows !== undefined) {
      liquid = pickLiquid(this.props.flows[0][0]);
      flowArrows = (
        <g key="flowCoil">
          <g key="flowtop" className={styles.flowTop} >
            <FlowArrows flows={this.props.flows[0][0]} />
          </g>
          <g key="flowbottom" className={styles.flowBottom} transform={'translate(0,50)'}>
            <FlowArrows flows={this.props.flows[1][0]} />
          </g>
        </g>
      );
    }
    return (
      <SvgParent viewBox={'0 0 150 100'}>
        <SvgLiquidCoil className={styles.liquid} style={Liquids.strokeStyle(liquid)} />
        <SvgCoil className={styles.coil} />
        {flowArrows}
      </SvgParent>
    );
  }
}
Coil.propTypes = {
  flows: React.PropTypes.arrayOf(
    React.PropTypes.arrayOf(
      React.PropTypes.arrayOf(
        React.PropTypes.object
      )
    )
  ),
};

