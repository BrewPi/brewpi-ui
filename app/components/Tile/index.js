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

Tile.defaultPropsTypes = {
  x: React.PropTypes.number,
  y: React.PropTypes.number,
  showCoordinates: React.PropTypes.boolean,
};
Tile.defaultProps = {
  x: -1,
  y: -1,
  showCoordinates: true,
};

export default Tile;
