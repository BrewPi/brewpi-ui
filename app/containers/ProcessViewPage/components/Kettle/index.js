import React from 'react';
import styles from './styles.css';
import { Liquids } from '../Liquids';

export const Kettle = (props) => (
  <div className={styles.kettleContainer}>
    <div className={styles.kettleFill} />
    <div className={styles.kettle} />
    <span className={styles.volume}>20.0L</span>
  </div>
);

Kettle.propTypes = {
  liquid: React.PropTypes.string,
};
