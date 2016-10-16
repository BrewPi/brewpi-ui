/*
 *
 * ProcessViewPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import styles from './styles.css';
import ProcessView from './components/ProcessView';
import { Table } from 'immutable-table';
import {
  viewNameSelector,
  viewIdSelector,
  layoutTableSelector,
  actualFlowTableSelector,
  showCoordinatesSelector,
  stepsSelector,
  activeStepIdSelector,
} from './selectors.js';
import * as actions from './actions';
import StepSelect from './components/StepSelect';

class ProcessViewPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    this.props.fetchView(this.props.params.viewId);
  }

  componentWillReceiveProps(nextProps) {
    // respond to parameter in url slug
    if (this.props.params.viewId !== nextProps.params.viewId) {
      this.props.fetchView(nextProps.params.viewId);
    }
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
          <h2>{this.props.viewName}</h2><h3><FormattedMessage {...messages.header} /></h3>
        </div>
        <div className={styles.stepSelect}>
          <StepSelect
            steps={this.props.steps}
            selected={this.props.activeStepId}
            modified={this.props.stepModified}
            onSelect={this.props.onStepSelected}
          />
        </div>
        <ProcessView
          className={styles.processView}
          layout={this.props.layout}
          flows={this.props.flows}
          showCoordinates={this.props.showCoordinates}
        />
      </div>
    );
  }
}
ProcessViewPage.propTypes = {
  params: React.PropTypes.shape({
    viewId: React.PropTypes.string,
  }),
  viewId: React.PropTypes.string,
  viewName: React.PropTypes.string,
  layout: React.PropTypes.instanceOf(Table),
  flows: React.PropTypes.instanceOf(Table),
  showCoordinates: React.PropTypes.bool,
  steps: React.PropTypes.object,
  stepModified: React.PropTypes.bool,
  activeStepId: React.PropTypes.number,
  // actions
  onStepSelected: React.PropTypes.func,
  fetchView: React.PropTypes.func,
};
ProcessViewPage.defaultProps = {
  params: {
    viewId: '',
  },
  viewId: '',
};


const mapStateToProps = (state, props) => ({
  viewId: viewIdSelector(state, props),
  viewName: viewNameSelector(state, props),
  layout: layoutTableSelector(state, props),
  flows: actualFlowTableSelector(state, props),
  showCoordinates: showCoordinatesSelector(state, props),
  steps: stepsSelector(state, props),
  activeStepId: activeStepIdSelector(state, props),
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchView: (viewId) => dispatch(actions.viewFetchRequested(viewId)),
    onStepSelected: (stepId) => dispatch(actions.stepSelected(stepId)),
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProcessViewPage);
