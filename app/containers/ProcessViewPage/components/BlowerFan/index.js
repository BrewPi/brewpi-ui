import React from 'react';
import styles from './styles.css';
const classNames = require('classnames');
import { getRotateClass } from '../sharedCss';

const SvgBlades = require('./svg/blades.svg?tag=g');
const SvgFanbase = require('./svg/fanbase.svg?tag=g');

import { SvgParent } from '../SvgParent';


export const BlowerFan = (props) => {
  const rotateClass = getRotateClass(props.powered, false);
  return (
    <SvgParent>
      <g className={styles.bladesWrapper}>
        <SvgBlades className={classNames(styles.blades, rotateClass)} />
      </g>
      <SvgFanbase className={styles.fanbase} />
    </SvgParent>
  );
};
BlowerFan.propTypes = {
  powered: React.PropTypes.string,
};

export default BlowerFan;
