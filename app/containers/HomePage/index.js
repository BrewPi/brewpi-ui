/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { withRouter } from 'react-router';

class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.history.push('/processview/herms-automated-valves'); // eslint-disable-line
  }

  render() {
    return (
      <h1>
        <FormattedMessage {...messages.header} />
      </h1>
    );
  }
}

export default withRouter(HomePage);
