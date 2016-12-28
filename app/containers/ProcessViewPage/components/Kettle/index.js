import React from 'react';
import styles from './styles.css';
import { Liquids } from '../Liquids';

export class Kettle extends React.Component {
  static flows = (data) => {
    const options = data.get('options');
    const settings = data.get('settings');
    const [width, height] = Kettle.dims(options);
    const totalVolume = options ? options.get('volume') || 100 : 100;
    const volume = settings ? settings.get('volume') || 0 : 0;
    const filledTiles = parseInt((volume * height) / totalVolume, 10);
    const flows = Array.from(new Array(height), (v, k) => (
      Array.from(new Array(width), () => {
        let pressure = (k + filledTiles) - height;
        pressure = (pressure > 0) ? pressure : 0;
        return { s: `k+${pressure}` };
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
    return `${(100 * vol) / total}%`;
  }
  render() {
    const [width, height] = Kettle.dims(this.props.options);
    const liquid = (this.props.settings) ? this.props.settings.liquid : undefined;
    const volume = (this.props.settings) ? this.props.settings.volume || 0 : 0;
    const kettleStyle = {
      width: `${50 * width}px`,
      height: `${50 * height}px`,
    };
    const liquidStyle = {
      height: this.liquidHeight(),
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
    hideVolume: React.PropTypes.boolean,
  }),
};
