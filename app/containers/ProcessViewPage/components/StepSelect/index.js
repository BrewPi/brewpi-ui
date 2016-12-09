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

const StepSelect = (props) => {
  const { steps, selected, modified } = props;
  const selectedOption = steps.find((obj) => obj.get('id') === selected);
  let title = selectedOption ? selectedOption.get('name') : '';

  const onNext = () => {
    for (let newSelected = selected + 1; newSelected <= steps.last().get('id'); newSelected += 1) {
      if (steps.find((obj) => obj.get('id') === newSelected)) {
        props.onSelect(newSelected);
        return;
      }
    }
  };

  const onPrevious = () => {
    for (let newSelected = selected - 1; newSelected >= steps.first().get('id'); newSelected -= 1) {
      if (steps.find((obj) => obj.get('id') === newSelected)) {
        props.onSelect(newSelected);
        return;
      }
    }
  };


  const renderedOptions = steps.map((step) => (
    <MenuItem
      className={styles.options}
      key={step.get('id')}
      eventKey={step.get('id')}
      onSelect={props.onSelect}
    >
      {step.get('name')}
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
        onSelect={props.onNew}
      >
        <i>Save (overwrite)</i>
      </MenuItem>
    );
    renderedOptions.push(
      <MenuItem
        className={styles.options}
        key={'new'}
        eventKey={'new'}
        onSelect={props.onSave}
      >
        <i>Save as...</i>
      </MenuItem>
    );
  }
  return (
    <div className={styles.selectAndApply}>
      <ButtonGroup>
        <Button onClick={onPrevious} className={styles.prevButton}><Glyphicon glyph="menu-left" /></Button>
        <DropdownButton id={'step'} className={styles.selected} title={title}>
          {renderedOptions}
        </DropdownButton>
        <Button onClick={onNext} className={styles.nextButton}><Glyphicon glyph="menu-right" /></Button>
        <Button className={styles.applyButton}><FormattedMessage {...messages.apply} /></Button>
      </ButtonGroup>
    </div>
  );
};

StepSelect.propTypes = {
  steps: React.PropTypes.object,
  selected: React.PropTypes.number,
  modified: React.PropTypes.bool,
  onSelect: React.PropTypes.func,
  onSave: React.PropTypes.func,
  onNew: React.PropTypes.func,
};
StepSelect.defaultProps = {
  steps: [],
  selected: 0,
  modified: false,
};

export default StepSelect;
