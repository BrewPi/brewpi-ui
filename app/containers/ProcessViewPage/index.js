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
import { Table } from 'immutable-table';
import { makeViewSelector, layoutTableSelector, showCoordinatesSelector } from './selectors.js';
import * as actions from './actions';

class ProcessViewPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componendDidMount() {
    this.dispatch(actions.pageLoaded, { viewId: this.props.params.viewId });
  }

  render() {
    return (
      <div className={styles.ProcessViewPage}>
        <Helmet
          title="ProcessView Page"
          meta={[
            { name: 'description', content: 'Description of ProcessViewPage' },
          ]}
        />
        <div className={styles.header}>
        <h2>{this.props.params.viewId}</h2><h3><FormattedMessage {...messages.header} /></h3>
      </div>
        <ProcessView className={styles.processview} layout={this.props.layout} showCoordinates={this.props.showCoordinates} />
      </div>
    );
  }
}

ProcessViewPage.propTypes = {
  layout: React.PropTypes.instanceOf(Table),
  // view: React.PropTypes.object,
  params: React.PropTypes.shape({
    viewId: React.PropTypes.string,
  }),
  showCoordinates: React.PropTypes.bool,
  steps: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      id: React.PropTypes.number,
      name: React.PropTypes.string,
      settings: React.PropTypes.arrayOf(
        React.PropTypes.shape({
          id: React.PropTypes.string,
          settings: React.PropTypes.object,
        })
      ),
    })
  ),
};

const makeMapStateToProps = () => {
  const viewSelector = makeViewSelector();
  const mapStateToProps = (state, props) => ({
    view: viewSelector(state, props),
    layout: layoutTableSelector(state, props),
    showCoordinates: showCoordinatesSelector(state, props),
    steps: [{
      id: 0,
      name: 'valves_closed',
      settings: [
        {
          id: '0',
          settings: {
            pos: closed,
          },
        },
      ],
    }],
  });
  return mapStateToProps;
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(makeMapStateToProps, mapDispatchToProps)(ProcessViewPage);
