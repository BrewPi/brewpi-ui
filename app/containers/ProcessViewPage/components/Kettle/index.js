import React from 'react';
import styles from './styles.css';
import { Liquids } from '../Liquids';

export class Kettle extends React.Component {
  static flows = (settings, options) => {
    const [width, height] = options ? Kettle.dims(options) : [4, 6];
    const flows = Array.from(new Array(height), () => (
      Array.from(new Array(width), () => ({ s: 'k' }))
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
    return `${(100 * vol) / total}%`;
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
