import React from 'react';
import styles from './styles.css';
import { Button, Glyphicon } from 'react-bootstrap';
const classNames = require('classnames');


const Toggle = (props) => {
  let iconElement;
  if (props.enabled) {
    iconElement = <Glyphicon glyph="check" className={classNames(styles.icon, styles.enabled)} />;
  } else {
    iconElement = <Glyphicon glyph="unchecked" className={classNames(styles.icon, styles.disabled)} />;
  }

  return (
    <Button className={styles.toggleButton} onClick={() => props.onClicked(props.enabled)}>
      {iconElement}
      <span className={styles.name}>{props.name}</span>
    </Button>
  );
};

Toggle.propTypes = {
  enabled: React.PropTypes.bool,
  name: React.PropTypes.string,
  onClicked: React.PropTypes.func.isRequired,
};

Toggle.defaultProps = {
  enabled: false,
};

export default Toggle;
