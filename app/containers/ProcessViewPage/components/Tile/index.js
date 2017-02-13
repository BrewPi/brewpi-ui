/**
*
* Tile
*
*/

import React from 'react';
import styles from './styles.css';
const classNames = require('classnames');

const Tile = (props) => {
  const x = props.x;
  const y = props.y;
  let coordinates;
  let gridStyle;
  if (props.showCoordinates) {
    coordinates = <span className={styles.coordinates}>{x},{y}</span>;
  }
  if (props.showGrid) {
    gridStyle = styles.grid;
  }

  return (
    <div className={classNames(styles.tile, gridStyle)}>
      <div className={styles.content}>{props.children}</div>
      {coordinates}
    </div>
  );
};

Tile.propTypes = {
  x: React.PropTypes.number.isRequired,
  y: React.PropTypes.number.isRequired,
  showCoordinates: React.PropTypes.bool,
  children: React.PropTypes.node,
  showGrid: React.PropTypes.bool,
};

Tile.defaultProps = {
  x: -1,
  y: -1,
  showCoordinates: false,
  showGrid: false,
};

export default Tile;
