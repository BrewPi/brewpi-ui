/**
*
* processView
*
*/

import React from 'react';

import styles from './styles.css';


class ProcessView extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.ProcessView}>
        {this.props.children}
      </div>
    );
  }
}

ProcessView.propTypes = {
  children: React.PropTypes.node,
};

export default ProcessView;
