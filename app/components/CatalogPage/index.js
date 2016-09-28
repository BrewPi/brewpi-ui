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
              <td>
                <Tubes.Input liquid={'water'} />
                <Tubes.Input liquid={'hotwater'} />
                <Tubes.Input liquid={'beer'} />
              </td>
            </tr>
            <tr>
              <td>Tube Output</td>
              <td>
                <Tubes.Output />
              </td>
              <td>TODO</td>
            </tr>
            <tr>
              <td>Tube Straight</td>
              <td>
                <Tubes.Straight />
              </td>
              <td>
                <Tubes.Straight flow={'wE'} liquid={'water'} />
                <Tubes.Straight flow={'wE'} liquid={'hotwater'} />
                <Tubes.Straight flow={'We'} liquid={'beer'} />

              </td>
            </tr>
            <tr>
              <td>Tube Elbow</td>
              <td>
                <Tubes.Elbow />
              </td>
              <td>
                <Tubes.Elbow flow={'nE'} liquid={'water'} />
                <Tubes.Elbow flow={'Ne'} liquid={'hotwater'} />
                <Tubes.Elbow flow={'nE'} liquid={'beer'} />
              </td>
            </tr>
            <tr>
              <td>Tube Tee</td>
              <td>
                <Tubes.Tee />
              </td>
              <td>
                <Tubes.Tee flow={'wNE'} liquid={'water'} />
                <Tubes.Tee flow={'wNE'} liquid={'hotwater'} />
                <Tubes.Tee flow={'wNE'} liquid={'beer'} />
              </td>
            </tr>
            <tr>
              <td>Tube Cross</td>
              <td>
                <Tubes.Cross />
              </td>
              <td>
                <Tubes.Cross flow={'NEsw'} liquid={'water'} />
                <Tubes.Cross flow={'NEsw'} liquid={'hotwater'} />
                <Tubes.Cross flow={'NEsw'} liquid={'beer'} />
              </td>
            </tr>
            <tr>
              <td>Tube Bridge</td>
              <td>
                <Tubes.Bridge />
              </td>
              <td>
                <Tubes.Bridge flow={'NEsw'} liquid={'water'} />
                <Tubes.Bridge flow={'neSW'} liquid={'hotwater'} />
                <Tubes.Bridge flow={'Ew'} liquid={'beer'} />
              </td>
            </tr>
            <tr>
              <td>Tube Inlet</td>
              <td>
                <Tubes.Inlet />
              </td>
              <td>
                <Tubes.Inlet flow={'Sw'} liquid={'water'} />
                <Tubes.Inlet flow={'Sw'} liquid={'hotwater'} />
                <Tubes.Inlet flow={'Sw'} liquid={'beer'} />
              </td>
            </tr>
            <tr>
              <td>Tube Inlet Whirlpool</td>
              <td>
                <Tubes.InletWhirlpool />
              </td>
              <td>
                <Tubes.InletWhirlpool flow={'Sw'} liquid={'water'} />
                <Tubes.InletWhirlpool flow={'Sw'} liquid={'hotwater'} />
                <Tubes.InletWhirlpool flow={'Sw'} liquid={'beer'} />
              </td>
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
