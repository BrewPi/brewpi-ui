import React from 'react';
import styles from './styles.css';

export const SetPoint = (props) => (
  <div className={styles.setPointRoot}>
    <span className={styles.temp}>20.0°</span>
    <span className={styles.setPoint}>21.0°</span>
  </div>
);
SetPoint.propTypes = {
  settings: React.PropTypes.object,
};
