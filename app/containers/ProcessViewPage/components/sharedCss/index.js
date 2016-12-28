import styles from './styles.css';

const speedStyle = (speed, clockwise = true) => ({
  animationDuration: `${(3.0 * 100) / speed}s`,
  animationDirection: (clockwise) ? 'normal' : 'reversed',
});


export const RotateCss = {
  styles,
  speedStyle,
};
