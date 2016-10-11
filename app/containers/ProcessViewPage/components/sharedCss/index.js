import styles from './styles.css';
const classNames = require('classnames');

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
export const getRotateClass = (powered, clockwise = true) => {
  const rotate = rotateClasses[powered] || rotateClasses.default;
  const dir = (clockwise) ? styles.clockwise : styles.counterClockwise;
  return classNames(rotate, dir);
};
