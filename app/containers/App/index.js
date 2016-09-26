/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';

// Import react-bootstrap components for Navbar
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router';

import styles from './styles.css';

export default class App extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div className={styles.container}>
        <Navbar inverse>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to={'/'}>BrewPi</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem>
                <Link to={'/process-view'}>Process View</Link>
              </NavItem>
              <NavItem>
                <Link to={'/catalog'}>Catalog</Link>
              </NavItem>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">Settings</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        {React.Children.toArray(this.props.children)}
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.node,
};
