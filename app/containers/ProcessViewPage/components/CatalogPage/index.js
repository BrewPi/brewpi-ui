/**
*
* CatalogPage
*
*/

import React from 'react';

import styles from './styles.css';
import { Table } from 'react-bootstrap';
import { Valves } from '../Valves';
import { Tubes } from '../Tubes';
import { Pump } from '../Pump';
import { BlowerFan } from '../BlowerFan';
import { TempSensors } from '../TempSensors';
import { Cfc } from '../Cfc';
import { Filter } from '../Filter';
import { Lauterhexe } from '../Lauterhexe';
import { HeatingElement } from '../HeatingElement';
import { TubularHeater } from '../TubularHeater';
import { Coil } from '../Coil';
import { Kettle } from '../Kettle';
import { Carboy } from '../Carboy';
import { Keg } from '../Keg';
import { GlycolReservoir } from '../GlycolReservoir';
import { FridgeTall } from '../FridgeTall';
import { Conical } from '../Conical';
import { BeerBottle } from '../BeerBottle';


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
              <td>
                <Tubes.Output liquid={'water'} />
                <Tubes.Output liquid={'hotwater'} />
                <Tubes.Output liquid={'beer'} />
              </td>
            </tr>
            <tr>
              <td>Tube Dip</td>
              <td>
                <Tubes.Dip />
              </td>
              <td>
                <Tubes.Dip liquid={'water'} flow={'Ws'} />
                <Tubes.Dip liquid={'hotwater'} flow={'Ws'} />
                <Tubes.Dip liquid={'beer'} flow={'Ws'} />
              </td>
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
                <Tubes.Bridge flow={'Ew'} liquid={'water'} />
                <Tubes.Bridge flow={'eW'} liquid={'hotwater'} />
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
                <Valves.Manual liquid={'water'} />
              </td>
              <td>
                <Valves.Manual position={'closed'} liquid={'water'} />
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
                <Valves.Motor powered={'idle'} position={'closed'} />
              </td>
            </tr>
            <tr>
              <td>Check Valve</td>
              <td>
                <Valves.Check />
              </td>
              <td>
                <Valves.Check liquid={'water'} />
                <Valves.Check liquid={'hotwater'} />
                <Valves.Check liquid={'beer'} />
              </td>
            </tr>
            <tr>
              <td>Pump</td>
              <td>
                <Pump />
              </td>
              <td>
                <Pump powered={'on'} liquid={'water'} />
                <Pump powered={'slow'} liquid={'hotwater'} />
                <Pump powered={'fast'} liquid={'beer'} />
              </td>
            </tr>
            <tr>
              <td>Blower fan</td>
              <td>
                <BlowerFan />
              </td>
              <td>
                <BlowerFan powered={'on'} liquid={'water'} />
                <BlowerFan powered={'slow'} liquid={'hotwater'} />
                <BlowerFan powered={'fast'} liquid={'beer'} />
              </td>
            </tr>
            <tr>
              <td>Inline temperature sensor</td>
              <td>
                <TempSensors.Inline />
              </td>
              <td>
                <TempSensors.Inline liquid={'water'} />
                <TempSensors.Inline liquid={'hotwater'} />
                <TempSensors.Inline liquid={'beer'} />
              </td>
            </tr>
            <tr>
              <td>Counter flow chiller</td>
              <td>
                <Cfc />
              </td>
              <td>
                <Cfc liquid={'water'} />
                <Cfc liquid={'hotwater'} />
                <Cfc liquid={'beer'} />
              </td>
            </tr>
            <tr>
              <td>Filter</td>
              <td>
                <Filter />
              </td>
              <td>
                <Filter liquid={'water'} />
              </td>
            </tr>
            <tr>
              <td>Lauterhexe</td>
              <td>
                <Lauterhexe />
              </td>
              <td>
                <Lauterhexe liquid={'water'} />
              </td>
            </tr>
            <tr>
              <td>Heater</td>
              <td>
                <HeatingElement />
              </td>
              <td>
                <HeatingElement liquid={'water'} />
                <HeatingElement liquid={'hotwater'} />
              </td>
            </tr>
            <tr>
              <td>Tubular Heater</td>
              <td>
                <TubularHeater />
              </td>
              <td>
                <TubularHeater />
                <TubularHeater />
              </td>
            </tr>
            <tr>
              <td>Coil</td>
              <td>
                <Coil />
              </td>
              <td>
                <Coil liquid={'water'} />
                <Coil liquid={'hotwater'} />
              </td>
            </tr>
            <tr>
              <td>Kettle</td>
              <td>
                <Kettle />
              </td>
              <td>
                <Kettle liquid={'water'} />
                <Kettle liquid={'hotwater'} />
                <Kettle liquid={'beer'} />
              </td>
            </tr>
            <tr>
              <td>Carboy</td>
              <td>
                <Carboy />
              </td>
              <td>
                <Carboy liquid={'water'} />
                <Carboy liquid={'hotwater'} />
                <Carboy liquid={'beer'} />
              </td>
            </tr>
            <tr>
              <td>Keg</td>
              <td>
                <Keg />
              </td>
              <td>
                <Keg liquid={'water'} />
                <Keg liquid={'hotwater'} />
                <Keg liquid={'beer'} />
              </td>
            </tr>
            <tr>
              <td>Glycol Reservoir</td>
              <td>
                <GlycolReservoir />
              </td>
              <td>
                <GlycolReservoir />
              </td>
            </tr>
            <tr>
              <td>Fridge Tall</td>
              <td>
                <FridgeTall />
              </td>
              <td>
                <FridgeTall />
              </td>
            </tr>
            <tr>
              <td>Conical</td>
              <td>
                <Conical />
              </td>
              <td>
                <Conical liquid={'water'} />
                <Conical liquid={'hotwater'} />
                <Conical liquid={'beer'} />
              </td>
            </tr>
            <tr>
              <td>Beer Bottle</td>
              <td>
                <BeerBottle />
              </td>
              <td>
                <BeerBottle liquid={'water'} />
                <BeerBottle liquid={'hotwater'} />
                <BeerBottle liquid={'beer'} />
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

export default CatalogPage;
