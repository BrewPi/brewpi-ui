/**
*
* CatalogPage
*
*/

import React from 'react';

import styles from './styles.css';
import { Table } from 'react-bootstrap';
import * as Valves from '../../components/Valves/index.js';

class CatalogPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.catalogPage}>
        <Table className={styles.partsTable} striped bordered condensed hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Base</th>
              <th>Examples</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Valve</td>
              <td>
                <Valves.Manual />
              </td>
              <td>TODO</td>
            </tr>
            <tr>
              <td>Motor Valve</td>
              <td>
                <Valves.Motor />
              </td>
              <td>
                <Valves.Motor powered={'opening'} />
              </td>
            </tr>
            <tr>
              <td>Check Valve</td>
              <td>
                <Valves.Check />
              </td>
              <td>TODO</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

export default CatalogPage;
