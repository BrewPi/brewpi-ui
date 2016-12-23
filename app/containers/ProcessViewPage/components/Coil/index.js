import React from 'react';
import styles from './styles.css';
import { Liquids } from '../Liquids';
import { pickLiquid } from '../Flows';

const SvgCoil = require('./svg/coil.svg?tag=g');
const SvgLiquidCoil = require('./svg/liquid_coil.svg?tag=g');

import { SvgParent } from '../SvgParent';

export class Coil extends React.Component {
  static flows = () => ([
    [{ l: 'b', b: 'l' }, {}, {}],
    [{ t: 'l', l: 't' }, {}, {}],
  ]);
  render() {
    let liquid;
    if (this.props.flows !== undefined) {
      liquid = pickLiquid(this.props.flows[0][0]);
    }
    return (
      <SvgParent viewBox={'0 0 150 100'}>
        <SvgLiquidCoil className={styles.liquid} style={Liquids.strokeStyle(liquid)} />
        <SvgCoil className={styles.coil} />
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

