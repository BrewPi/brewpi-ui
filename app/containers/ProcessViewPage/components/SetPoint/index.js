import React from 'react';
import styles from './styles.css';

export const SetPoint = (props) => {
  const setText = (props.settings.set) ? props.settings.set.toFixed(1) : '--.-';
  const valText = (props.settings.val) ? props.settings.val.toFixed(1) : '--.-';
  return (
    <div className={styles.setPointRoot}>
      <span className={styles.temp}>{valText}°</span>
      <span className={styles.setPoint}>{setText}°</span>
    </div>
  );
};
SetPoint.propTypes = {
  settings: React.PropTypes.shape({
    set: React.PropTypes.number,
    val: React.PropTypes.number,
  }),
};
SetPoint.defaultProps = {
  settings: {},
};
