import React from 'react';
import styles from './styles.css';

const SvgLauterhexe = require('./svg/lauterhexe.svg?tag=g');

import { SvgParent } from '../SvgParent';

export class Lauterhexe extends React.Component {
  static flows = () => ([{ k: 'l' }, {}, {}, {}]);
  render() {
    return (
      <SvgParent viewBox={'0 0 200 50'}>
        <SvgLauterhexe className={styles.lauterhexe} />
      </SvgParent>
    );
  }
}
