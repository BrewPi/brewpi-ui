/**
*
* CatalogPage
*
*/

import React from 'react';

import styles from './styles.css';
import { Table } from 'react-bootstrap';
import { Valves } from 'components/Valves';
import { Tubes } from 'components/Tubes';

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
              <td>Tube Input</td>
              <td>
                <Tubes.Input />
              </td>
              <td>TODO</td>
            </tr>
            <tr>
              <td>Tube Straight</td>
              <td>
                <Tubes.Straight />
              </td>
              <td>TODO</td>
            </tr>
            <tr>
              <td>Tube Elbow</td>
              <td>
                <Tubes.Elbow />
              </td>
              <td>TODO</td>
            </tr>
            <tr>
              <td>Valve</td>
              <td>
                <Valves.Manual />
              </td>
              <td>
                <Valves.Manual position={'closed'} />
                <Valves.Manual position={'midway'} />
              </td>
            </tr>
            <tr>
              <td>Motor Valve</td>
              <td>
                <Valves.Motor />
              </td>
              <td>
                <Valves.Motor powered={'opening'} />
                <Valves.Motor powered={'closing'} />
                <Valves.Motor powered={'opening'} position={'midway'} />
                <Valves.Motor powered={'idle'} position={'midway'} />
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
