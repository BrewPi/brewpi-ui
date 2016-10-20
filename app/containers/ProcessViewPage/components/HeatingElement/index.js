import React from 'react';
import styles from './styles.css';
const classNames = require('classnames');

const SvgElement = require('./svg/element.svg?tag=g');

import { SvgParent } from '../SvgParent';

export const HeatingElement = (props) => {
  const { flip, settings } = props;
  const unflipStyle = flip ? styles.unflip : undefined; // is parent flipped?
  const duty = (settings) ? settings.duty || 0 : 0;
  const enclosureBgStyle = { height: `${duty}%` };
  return (
    <div className={styles.root}>
      <div className={styles.enclosure}>
        <div className={classNames(styles.value, unflipStyle)}>{duty}%</div>
        <div className={styles.enclosureBg} style={enclosureBgStyle} />
      </div>
      <SvgParent viewBox={'0 0 250 50'}>
        <SvgElement className={styles.element} />
      </SvgParent>
    </div>
  );
};
HeatingElement.propTypes = {
  flip: React.PropTypes.bool,
  settings: React.PropTypes.object,
};
