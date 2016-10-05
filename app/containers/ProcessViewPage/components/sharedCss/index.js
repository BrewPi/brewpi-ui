import styles from './styles.css';

const powerClasses = {
  off: styles.powerOff,
  on: styles.powerOn,
  slow: styles.powerOn,
  fast: styles.powerOn,
  default: styles.powerOff,
};

const rotateClasses = {
  off: styles.rotateOff,
  on: styles.rotateFast,
  slow: styles.rotateSlow,
  fast: styles.rotateFast,
  default: styles.rotateOff,
};

export const getPowerClass = (powered) => powerClasses[powered] || powerClasses.default;
export const getRotateClass = (powered) => rotateClasses[powered] || rotateClasses.default;
