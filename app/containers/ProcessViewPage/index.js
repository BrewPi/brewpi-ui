/*
 *
 * ProcessViewPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import styles from './styles.css';
import ProcessView from './components/ProcessView';
import { makeViewSelector, layoutTableSelector } from './selectors.js';
import Tile from './components/Tile';
import { Part } from './components/Part';
import { Table } from 'immutable-table';
import * as actions from './actions';


export class ProcessViewPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componendDidMount() {
    this.dispatch(actions.componentLoaded, { viewId: '1' });
  }

  renderTiles(layout) {
    const tiles = [];
    let row = [];

    const cols = layout.width;
    const rows = layout.height;
    for (let y = 0; y < rows; y += 1) {
      row = [];
      for (let x = 0; x < cols; x += 1) {
        const key = `tile-${x}-${y}`;
        const partData = layout.getCell(x, y);
        row.push(
          <Tile key={key} x={x} y={y}>
            <Part data={partData} />
          </Tile>
        );
      }
      tiles.push(<div className={styles.row} key={`row-${y}`}>{row}</div>);
    }
    return <div className={styles.tiles}>{tiles}</div>;
  }

  render() {
    const parts = this.props.layout;
    const tiles = this.renderTiles(parts);
    return (
      <div className={styles.ProcessViewPage}>
        <Helmet
          title="ProcessView Page"
          meta={[
            { name: 'description', content: 'Description of ProcessViewPage' },
          ]}
        />
        <h2><FormattedMessage {...messages.header} /></h2>
        <ProcessView>
          { tiles }
        </ProcessView>
        <span>viewId: {JSON.stringify(this.props.params.viewId) }</span><br />
        <span>view: {JSON.stringify(this.props.view) }</span><br />
        <span>layout: {JSON.stringify(this.props.layout) }</span><br />
      </div>
    );
  }
}

ProcessViewPage.propTypes = {
  layout: React.PropTypes.instanceOf(Table),
  view: React.PropTypes.object,
  params: React.PropTypes.object,
};

const makeMapStateToProps = () => {
  const viewSelector = makeViewSelector();
  const mapStateToProps = (state, props) => ({
    view: viewSelector(state, props),
    layout: layoutTableSelector(state, props),
  });
  return mapStateToProps;
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(makeMapStateToProps, mapDispatchToProps)(ProcessViewPage);
