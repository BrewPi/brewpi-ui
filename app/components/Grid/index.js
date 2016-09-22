/**
*
* Grid
*
*/

import React from 'react';

import styles from './styles.css';

import Tile from '../../components/Tile';
import * as Valves from '../../components/Valves/index.js';

class Grid extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.grid}>
        <Tile>
          <Valves.Manual rotate={90} /> 
        </Tile>
      </div>
    );
  }
}

export default Grid;
