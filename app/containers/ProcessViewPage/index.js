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
  flowTableSelector,
  showCoordinatesSelector,
  showGridSelector,
  stepsSelector,
  activeStepIdSelector,
  activeStepNotesSelector,
} from './selectors.js';
import * as actions from './actions';
import StepSelect from './components/StepSelect';
import Toggle from './components/Toggle';
import { ButtonGroup } from 'react-bootstrap';

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
          <div className={styles.headerLeft}></div>
          <div className={styles.headerCenter}>
            <div className={styles.title}>
              <h3 className={styles.processViewTitle}><FormattedMessage {...messages.header} />:</h3>
              <h3 className={styles.viewName}>{this.props.viewName}</h3>
            </div>
            <div className={styles.stepSelect}>
              <StepSelect
                steps={this.props.steps}
                selected={this.props.activeStepId}
                modified={this.props.stepModified}
                onSelect={this.props.onStepSelected}
              />
            </div>
          </div>
          <div className={styles.headerRight}>
            <ButtonGroup vertical>
              <Toggle className={styles.toggle} name="Coordinates" enabled={this.props.showCoordinates} onClicked={this.props.onCoordinatesToggle} />
              <Toggle className={styles.toggle} name="Grid" enabled={this.props.showGrid} onClicked={this.props.onGridToggle} />
            </ButtonGroup>
          </div>
        </div>
        <div className={styles.content}>
          <ProcessView
            className={styles.processView}
            layout={this.props.layout}
            flows={this.props.flows}
            showCoordinates={this.props.showCoordinates}
            showGrid={this.props.showGrid}
          />
          <div className={styles.notes}>
            <h4>Notes</h4>
            <ul className={styles.text}>
              {this.props.activeStepNotes.map((item) => <li>{item}</li>)}
            </ul>
          </div>
        </div>
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
  showGrid: React.PropTypes.bool,
  steps: React.PropTypes.object,
  stepModified: React.PropTypes.bool,
  activeStepId: React.PropTypes.number,
  activeStepNotes: React.PropTypes.string,
  // actions
  onStepSelected: React.PropTypes.func,
  fetchView: React.PropTypes.func,
  onCoordinatesToggle: React.PropTypes.func,
  onGridToggle: React.PropTypes.func,
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
  flows: flowTableSelector(state, props),
  showCoordinates: showCoordinatesSelector(state, props),
  showGrid: showGridSelector(state, props),
  steps: stepsSelector(state, props),
  activeStepId: activeStepIdSelector(state, props),
  activeStepNotes: activeStepNotesSelector(state, props),
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchView: (viewId) => dispatch(actions.viewFetchRequested(viewId)),
    onStepSelected: (stepId) => dispatch(actions.stepSelected(stepId)),
    onGridToggle: (wasEnabled) => dispatch(actions.gridToggled(wasEnabled)),
    onCoordinatesToggle: (wasEnabled) => dispatch(actions.coordinatesToggled(wasEnabled)),
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProcessViewPage);
