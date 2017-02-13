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
const classNames = require('classnames');

class ProcessView extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const layout = this.props.layout;
    const flows = this.props.flows;
    const tiles = [];
    let row = [];

    const cols = layout.width;
    const rows = layout.height;
    let gridStyle;
    if (this.props.showGrid) {
      gridStyle = styles.grid;
    }
    for (let y = 0; y < rows; y += 1) {
      row = [];
      for (let x = 0; x < cols; x += 1) {
        const key = `tile-${x}-${y}`;
        const partsInCell = layout.getCell(x, y);
        const partComponents = [];
        let keyVal = 0;
        if (partsInCell !== undefined) {
          for (const part of partsInCell) {
            const dims = Part.flowDimensions(part);
            const flowsInPart = flows.slice(x, y, dims.width, dims.height);
            partComponents.push(<Part data={part} key={keyVal} flows={flowsInPart} />);
            keyVal += 1;
          }
        }
        row.push(
          <Tile key={key} x={x} y={y} showCoordinates={this.props.showCoordinates} showGrid={this.props.showGrid}>
            {partComponents}
          </Tile>
        );
      }
      tiles.push(<div className={classNames(styles.row, gridStyle)} key={`row-${y}`}>{row}</div>);
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
  showGrid: React.PropTypes.bool,
};

export default ProcessView;
