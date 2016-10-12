/**
*
* SelectAndApply
*
*/

import React from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import styles from './styles.css';
import { Button, DropdownButton, Glyphicon, ButtonGroup, MenuItem } from 'react-bootstrap';

const SelectAndApply = (props) => {
  const { options, selected, modified } = props;
  const selectedOption = options.find((obj) => obj.id === selected) || { id: -1, value: 'new' };
  let title = selectedOption.value;

  const renderedOptions = options.map((opt) => (
    <MenuItem
      className={styles.options}
      key={opt.id}
      eventKey={opt.id}
      onSelect={function (eventKey) { alert(eventKey); }}
    >
      {opt.value}
    </MenuItem>
  ));
  if (modified) {
    title += ' (modified)';
    renderedOptions.push(<MenuItem divider key={'divider'} />);
    renderedOptions.push(
      <MenuItem
        className={styles.options}
        key={'save'}
        eventKey={'save'}
        onSelect={function (eventKey) { alert('create new'); }}
      >
        <i>Save (overwrite)</i>
      </MenuItem>
    );
    renderedOptions.push(
      <MenuItem
        className={styles.options}
        key={'new'}
        eventKey={'new'}
        onSelect={function (eventKey) { alert('create new'); }}
      >
        <i>Save as...</i>
      </MenuItem>
    );
  }
  return (
    <div className={styles.selectAndApply}>
      <ButtonGroup>
        <Button className={styles.prevButton}><Glyphicon glyph="menu-left" /></Button>
        <DropdownButton id={'step'} className={styles.selected} title={title}>
          {renderedOptions}
        </DropdownButton>
        <Button className={styles.nextButton}><Glyphicon glyph="menu-right" /></Button>
        <Button className={styles.applyButton}><FormattedMessage {...messages.apply} /></Button>
      </ButtonGroup>
    </div>
  );
};

SelectAndApply.propTypes = {
  options: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      id: React.PropTypes.number,
      value: React.PropTypes.string,
    }),
  ),
  selected: React.PropTypes.number,
  modified: React.PropTypes.bool,
};
SelectAndApply.defaultProps = {
  options: [],
  selected: 0,
  modified: false,
};

export default SelectAndApply;
