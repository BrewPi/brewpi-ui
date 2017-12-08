import React from 'react';
import styles from './styles.css';
import { Liquids } from '../Liquids';
import { pickLiquid } from '../Flows';

const SvgDisplay = require('./svg/display.svg?tag=g');

import { SvgParent } from '../SvgParent';


class Inline extends React.Component {
  static flows = () => ({ r: 'l', l: 'r' });
  render() {
    const valueText = (this.props.settings.val) ? this.props.settings.val.toFixed(1) : '--.-';
    const fontSize = valueText.length >= 5 ? '14px' : '16px';
    const fontStyle = { fontSize };

    return (
      <SvgParent>
        <SvgDisplay className={styles.display} style={Liquids.fillStyle(pickLiquid(this.props.flows))} />
        <text className={styles.value} transform="translate(26 31)" style={fontStyle} >
          {valueText}°
        </text>
      </SvgParent>
    );
  }
}
Inline.propTypes = {
  settings: React.PropTypes.shape({
    val: React.PropTypes.number,
  }),
  flows: React.PropTypes.array,
};
Inline.defaultProps = {
  settings: {},
};


export const TempSensors = {
  Inline,
};
