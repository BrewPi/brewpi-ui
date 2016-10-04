/**
*
* Tile
*
*/

import React from 'react';
import styles from './styles.css';

const Tile = (props) => {
  const x = props.x;
  const y = props.y;
  let coordinates;
  if (props.showCoordinates) {
    coordinates = <span className={styles.coordinates}>{x},{y}</span>;
  }

  return (
    <div className={styles.tile}>
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
};

Tile.defaultProps = {
  x: -1,
  y: -1,
  showCoordinates: true,
};

export default Tile;
