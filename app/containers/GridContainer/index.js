/*
 *
 * GridContainer is a connected component that receives grid layout and settings from Redux
 * and passes it on the the statelss Grid component as props.
 */

import React from 'react';
import { connect } from 'react-redux';
import Grid from '../../components/Grid';
import { makeGridSettingsSelector, makeLayoutSelector } from './selectors.js';

export class GridContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Grid />
      </div>
    );
  }
}

const makeMapStateToProps = () => {
  const gridSettingsSelector = makeGridSettingsSelector();
  const layoutSelector = makeLayoutSelector();
  const mapStateToProps = (state, props) => ({
    settings: gridSettingsSelector(state, props),
    layout: layoutSelector(state, props),
  });
  return mapStateToProps;
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(makeMapStateToProps, mapDispatchToProps)(GridContainer);
