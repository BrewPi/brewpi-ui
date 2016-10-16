/**
*
* processView
*
*/

import React from 'react';

import styles from './styles.css';
import Tile from '../Tile';
import { Part } from '../Part';
import { Table } from 'immutable-table';


class ProcessView extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const layout = this.props.layout;
    const flows = this.props.flows;
    const tiles = [];
    let row = [];

    const cols = layout.width;
    const rows = layout.height;
    for (let y = 0; y < rows; y += 1) {
      row = [];
      for (let x = 0; x < cols; x += 1) {
        const key = `tile-${x}-${y}`;
        const partsInCell = layout.getCell(x, y);
        const flowInCell = flows.getCell(x, y);
        const partComponents = [];
        let keyVal = 0;
        if (partsInCell !== undefined) {
          for (const part of partsInCell) {
            partComponents.push(<Part data={part} key={keyVal} flow={flowInCell} />);
            keyVal += 1;
          }
        }
        row.push(
          <Tile key={key} x={x} y={y} showCoordinates={this.props.showCoordinates}>
            {partComponents}
          </Tile>
        );
      }
      tiles.push(<div className={styles.row} key={`row-${y}`}>{row}</div>);
    }
    return (
      <div className={styles.ProcessView}>
        <div className={styles.tiles}>{tiles}</div>
      </div>
    );
  }
}

ProcessView.propTypes = {
  layout: React.PropTypes.instanceOf(Table),
  flows: React.PropTypes.instanceOf(Table),
  showCoordinates: React.PropTypes.bool,
};

export default ProcessView;
