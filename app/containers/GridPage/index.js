/*
 *
 * GridPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import styles from './styles.css';
import GridContainer from 'containers/GridContainer';

export class GridPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.gridPage}>
        <Helmet
          title="Grid Page"
          meta={[
            { name: 'description', content: 'Description of GridPage' },
          ]}
        />
        <h2><FormattedMessage {...messages.header} /></h2>
        <GridContainer />
      </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapDispatchToProps)(GridPage);
