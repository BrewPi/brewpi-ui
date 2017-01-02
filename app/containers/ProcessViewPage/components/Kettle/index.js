import React from 'react';
import styles from './styles.css';
import { Liquids } from '../Liquids';
import { pickLiquid } from '../Flows';

export class Kettle extends React.Component {
  static flows = (data) => {
    const options = data.get('options');
    const settings = data.get('settings');
    const [width, height] = Kettle.dims(options.toJS());
    const totalVolume = options ? options.get('volume') || 100 : 100;
    const volume = settings ? settings.get('volume') || 0 : 0;
    const filledTiles = parseInt(Math.round((volume * height) / totalVolume), 10);
    const flows = Array.from(new Array(height), (v, k) => (
      Array.from(new Array(width), (v2, k2) => {
        if (options.get('useAsTube')) {
          // kettle is treated as one big tube:
          // - not a source
          // - all inputs are connected to all outputs
          // - liquid is taken from input
          const tileFlow = { k: '' };
          if (k === 0) { // top
            tileFlow.k += 'b';
            tileFlow.b = 'k';
            // only have horizontal flow on the first row to prevent loops
            if (k2 === 0) { // left
              tileFlow.k += 'r';
              tileFlow.r = 'k';
            } else if (k2 === width - 1) { // right
              tileFlow.k += 'l';
              tileFlow.l = 'k';
            } else {
              tileFlow.k += 'lr';
              tileFlow.r = 'k';
              tileFlow.l = 'k';
            }
          } else if (k === height - 1) { // bottom
            tileFlow.k += 't';
            tileFlow.t = 'k';
          } else {
            tileFlow.k += 'bt';
            tileFlow.t = 'k';
            tileFlow.b = 'k';
          }
          return tileFlow;
        }
        // normal kettle
        // liquid level determines which tiles can source
        const pressure = (k + filledTiles) - height;
        if (pressure >= 0) {
          return { s: `k+${pressure}`, k: 's' };
        }
        return { k: 's' };
      })
    ));
    return flows;
  }
  static dims(options) {
    const width = (options) ? options.width || 4 : 4;
    const height = (options) ? options.height || 6 : 6;
    return [width, height];
  }
  liquidHeight() {
    const vol = this.props.settings ? this.props.settings.volume || 0 : 0;
    const total = this.props.options ? this.props.options.volume || 100 : 100;
    return `calc(${(100 * vol) / total}% - 8px)`;
  }
  grainHeight() {
    const vol = this.props.settings ? this.props.settings.grain || 0 : 0;
    const total = this.props.options ? this.props.options.volume || 100 : 100;
    return `calc(${(100 * vol) / total}% - 8px)`;
  }
  render() {
    const [width, height] = Kettle.dims(this.props.options);
    let liquid;
    let liquidHeight;
    if (this.props.options.useAsTube) { // get liquid from the flows through the tube
      liquid = pickLiquid(this.props.flows, 0, 0);
      liquidHeight = 'calc(100% - 8px)';
    } else { // liquid is set in part settings
      liquid = (this.props.settings) ? this.props.settings.liquid : undefined;
      liquidHeight = this.liquidHeight();
    }
    const volume = (this.props.settings) ? this.props.settings.volume || 0 : 0;
    const kettleStyle = {
      width: `${50 * width}px`,
      height: `${50 * height}px`,
    };
    const liquidStyle = {
      height: liquidHeight,
      background: Liquids.color(liquid),
    };
    const grainStyle = {
      height: this.grainHeight(),
    };
    const volumeStyle = (volume === 0 || this.props.options.hideVolume === true) ? { display: 'none' } : {};

    return (
      <div className={styles.kettleContainer} style={kettleStyle}>
        <div className={styles.kettleFill} style={liquidStyle} />
        <div className={styles.grain} style={grainStyle} />
        <div className={styles.kettle} style={kettleStyle} />
        <span className={styles.volume} style={volumeStyle}>{volume.toFixed(1)}L</span>
      </div>
    );
  }
}
Kettle.propTypes = {
  settings: React.PropTypes.shape({
    volume: React.PropTypes.number, // actual volume
    liquid: React.PropTypes.string,
    grain: React.PropTypes.number, // grain in volume units
  }),
  options: React.PropTypes.shape({
    volume: React.PropTypes.number, // max volume
    hideVolume: React.PropTypes.boolean, // volume span is hidden
    useAsTube: React.PropTypes.boolean, // use as a big tube (100% full when any input)
  }),
  flows: React.PropTypes.array,
  id: React.PropTypes.string,
};
Kettle.defaultProps = {
  settings: {},
  options: {},
};
