import React from 'react';
import styles from './styles.css';
import { Liquids } from '../Liquids';

export class Kettle extends React.Component {
  liquidHeight() {
    return `${(100 * this.props.settings.volume) / this.props.options.volume}%`;
  }
  render() {
    const style = { height: this.liquidHeight() };
    Object.assign(style, { background: Liquids.color(this.props.settings.liquid) });
    return (
      <div className={styles.kettleContainer}>
        <div className={styles.kettleFill} style={style} />
        <div className={styles.kettle} />
        <span className={styles.volume}>{this.props.settings.volume.toFixed(1)}L</span>
      </div>
    );
  }
}
Kettle.propTypes = {
  settings: React.PropTypes.shape({
    liquid: React.PropTypes.string,
    volume: React.PropTypes.number,
  }),
  options: React.PropTypes.shape({
    volume: React.PropTypes.number,
  }),
};
Kettle.defaultProps = {
  settings: {
    volume: 0,
  },
  options: {
    volume: 100,
  },
};

