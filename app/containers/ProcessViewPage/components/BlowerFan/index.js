import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions';
const classNames = require('classnames');

import styles from './styles.css';
import { RotateCss } from '../sharedCss';
import { SvgParent } from '../SvgParent';

const SvgBlades = require('./svg/blades.svg?tag=g');
const SvgFanbase = require('./svg/fanbase.svg?tag=g');

class BlowerFan extends React.Component {
  render() {
    const power = this.props.settings.power;
    const speed = this.props.settings.speed;
    let bladeRotateStyle = {};
    let bladeRotateClass = {};
    if (power === true) {
      bladeRotateStyle = RotateCss.speedStyle(speed);
      bladeRotateClass = RotateCss.styles.rotate;
    }
    return (
      <button className={styles.pump} onClick={() => this.props.onClicked(this.props.id, this.props.settings.power)}>
        <SvgParent>
          <g className={styles.bladesWrapper}>
            <SvgBlades className={classNames(styles.blades, bladeRotateClass)} style={bladeRotateStyle} />
          </g>
          <SvgFanbase className={styles.fanbase} />
        </SvgParent>
      </button>
    );
  }
}
BlowerFan.propTypes = {
  settings: React.PropTypes.shape({
    power: React.PropTypes.boolean,
    speed: React.PropTypes.number, // 0-100
  }),
  id: React.PropTypes.string,
  onClicked: React.PropTypes.func,
};
BlowerFan.defaultProps = {
  settings: {
    power: false,
    speed: 100,
  },
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    onClicked: (id, oldPower) => dispatch(actions.powerTogglableClicked(id, oldPower)),
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(BlowerFan);
