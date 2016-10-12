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
import { viewNameSelector, viewSlugSelector, layoutTableSelector, showCoordinatesSelector } from './selectors.js';
import * as actions from './actions';
import SelectAndApply from 'components/SelectAndApply';

class ProcessViewPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.dispatch(actions.viewFetchRequested(viewSlugSelector(null, this.props)));
  }

  componentDidUpdate(prevProps) {
    // respond to parameter in url slug
    const oldViewSlug = viewSlugSelector(null, prevProps);
    const newViewSlug = viewSlugSelector(null, this.props);
    if (oldViewSlug !== newViewSlug) {
      this.props.dispatch(actions.viewFetchRequested(newViewSlug));
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
          <SelectAndApply
            options={[
              { id: 1, value: 'option1' },
              { id: 2, value: 'option2' },
            ]}
            selected={1}
            modified
          />
        </div>
        <ProcessView className={styles.processView} layout={this.props.layout} showCoordinates={this.props.showCoordinates} />
      </div>
    );
  }
}
ProcessViewPage.propTypes = {
  layout: React.PropTypes.instanceOf(Table),
  viewName: React.PropTypes.string,
  params: React.PropTypes.shape({
    viewName: React.PropTypes.string,
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
  dispatch: React.PropTypes.func.isRequired,
};
ProcessViewPage.defaultProps = {
  params: {
    viewName: '',
  },
};


const mapStateToProps = (state, props) => ({
  viewSlug: viewSlugSelector(state, props),
  viewName: viewNameSelector(state, props),
  layout: layoutTableSelector(state, props),
  showCoordinates: showCoordinatesSelector(state, props),
  steps: [{
    id: 0,
    name: 'valves_closed',
    partSettings: [
      {
        id: '0',
        settings: {
          pos: closed,
        },
      },
    ],
  }],
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProcessViewPage);
