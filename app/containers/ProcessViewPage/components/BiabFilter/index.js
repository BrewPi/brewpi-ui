import React from 'react';
import styles from './styles.css';

export class BiabFilter extends React.Component {
  static dims(options) {
    const width = (options) ? options.width || 4 : 4;
    const height = (options) ? options.height || 6 : 6;
    return [width, height];
  }
  grainHeight() {
    const vol = this.props.settings ? this.props.settings.grain || 0 : 0;
    const total = this.props.options ? this.props.options.volume || 100 : 100;
    return `${(100 * vol) / total}%`;
  }
  render() {
    const [width, height] = BiabFilter.dims(this.props.options);
    const biabFilterContainerStyle = {
      width: `${50 * width}px`,
      height: `${50 * height}px`,
    };
    const biabFilterStyle = {
      width: `${(50 * width) - 20}px`,
      height: `${(50 * height)}px`,
    };
    const grainStyle = {
      height: this.grainHeight(),
    };
    return (
      <div className={styles.biabFilterContainer} style={biabFilterContainerStyle}>
        <div className={styles.biabFilter} style={biabFilterStyle}>
          <div className={styles.grain} style={grainStyle} />
        </div>
      </div>
    );
  }
}
BiabFilter.propTypes = {
  settings: React.PropTypes.shape({
    grain: React.PropTypes.number, // grain in volume units
  }),
  options: React.PropTypes.shape({
    volume: React.PropTypes.number, // max volume
  }),
};
