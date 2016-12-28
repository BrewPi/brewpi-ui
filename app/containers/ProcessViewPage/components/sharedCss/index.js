import styles from './styles.css';

const speedStyle = (speed, clockwise = true) => ({
  'animation-duration': `${(3.0 * 100) / speed}s`,
  'animation-direction': (clockwise) ? 'normal' : 'reversed',
});


export const RotateCss = {
  styles,
  speedStyle,
};
