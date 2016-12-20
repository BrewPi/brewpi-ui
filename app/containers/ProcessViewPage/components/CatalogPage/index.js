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
import { SubmersiblePump } from '../SubmersiblePump';
import { BlowerFan } from '../BlowerFan';
import { TempSensors } from '../TempSensors';
import { Cfc } from '../Cfc';
import { GlycolChiller } from '../GlycolChiller';
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
                <Tubes.Input flows={[{ dir: { s: 'r' }, liquid: 'water' }]} />
                <Tubes.Input flows={[{ dir: { s: 'r' }, liquid: 'hotwater' }]} />
                <Tubes.Input flows={[{ dir: { s: 'r' }, liquid: 'beer' }]} />
              </td>
            </tr>
            <tr>
              <td>Tube Output</td>
              <td>
                <Tubes.Output />
              </td>
              <td>
                <Tubes.Output flows={[{ dir: { l: 's' }, liquid: 'water' }]} />
                <Tubes.Output flows={[{ dir: { l: 's' }, liquid: 'hotwater' }]} />
                <Tubes.Output flows={[{ dir: { l: 's' }, liquid: 'beer' }]} />
              </td>
            </tr>
            <tr>
              <td>Tube Straight</td>
              <td>
                <Tubes.Straight />
              </td>
              <td>
                <Tubes.Straight flows={[{ dir: { l: 'r' }, liquid: 'water' }]} />
                <Tubes.Straight flows={[{ dir: { l: 'r' }, liquid: 'hotwater' }]} />
                <Tubes.Straight flows={[{ dir: { l: 'r' }, liquid: 'beer' }]} />

              </td>
            </tr>
            <tr>
              <td>Tube Elbow</td>
              <td>
                <Tubes.Elbow />
              </td>
              <td>
                <Tubes.Elbow flows={[{ dir: { t: 'r' }, liquid: 'water' }]} />
                <Tubes.Elbow flows={[{ dir: { t: 'r' }, liquid: 'hotwater' }]} />
                <Tubes.Elbow flows={[{ dir: { t: 'r' }, liquid: 'beer' }]} />
              </td>
            </tr>
            <tr>
              <td>Tube Tee</td>
              <td>
                <Tubes.Tee />
              </td>
              <td>
                <Tubes.Tee flows={[{ dir: { l: 'tr' }, liquid: 'water' }]} />
                <Tubes.Tee flows={[{ dir: { t: 'lr' }, liquid: 'hotwater' }]} />
                <Tubes.Tee flows={[{ dir: { t: 'lr' }, liquid: 'beer' }]} />
              </td>
            </tr>
            <tr>
              <td>Tube Cross</td>
              <td>
                <Tubes.Cross />
              </td>
              <td>
                <Tubes.Cross flows={[{ dir: { l: 'trb' }, liquid: 'water' }]} />
                <Tubes.Cross flows={[{ dir: { l: 'trb' }, liquid: 'hotwater' }]} />
                <Tubes.Cross flows={[{ dir: { l: 'trb' }, liquid: 'beer' }]} />
              </td>
            </tr>
            <tr>
              <td>Tube Bridge</td>
              <td>
                <Tubes.Bridge />
              </td>
              <td>
                <Tubes.Bridge flows={[{ dir: { l: 'r' }, liquid: 'water' }]} />
                <Tubes.Bridge flows={[{ dir: { l: 'r' }, liquid: 'hotwater' }]} />
                <Tubes.Bridge flows={[{ dir: { l: 'r' }, liquid: 'beer' }]} />
              </td>
            </tr>
            <tr>
              <td>Fitting</td>
              <td>
                <Tubes.Fitting />
              </td>
              <td>
                <Tubes.Fitting flows={[{ dir: { l: 'k' }, liquid: 'water' }]} />
                <Tubes.Fitting flows={[{ dir: { l: 'k' }, liquid: 'hotwater' }]} />
                <Tubes.Fitting flows={[{ dir: { l: 'k' }, liquid: 'beer' }]} />
              </td>
            </tr>
            <tr>
              <td>Tube Inlet Straight</td>
              <td>
                <Tubes.InletStraight />
              </td>
              <td>
                <Tubes.InletStraight flows={[{ dir: { l: 'k' }, liquid: 'water' }]} />
                <Tubes.InletStraight flows={[{ dir: { l: 'k' }, liquid: 'hotwater' }]} />
                <Tubes.InletStraight flows={[{ dir: { l: 'k' }, liquid: 'beer' }]} />
              </td>
            </tr>
            <tr>
              <td>Tube Dip</td>
              <td>
                <Tubes.Dip />
              </td>
              <td>
                <Tubes.Dip flows={[{ dir: { k: 'l' }, liquid: 'water' }]} />
                <Tubes.Dip flows={[{ dir: { k: 'l' }, liquid: 'hotwater' }]} />
                <Tubes.Dip flows={[{ dir: { k: 'l' }, liquid: 'beer' }]} />
              </td>
            </tr>
            <tr>
              <td>Tube Inlet</td>
              <td>
                <Tubes.Inlet />
              </td>
              <td>
                <Tubes.Inlet flows={[{ dir: { l: 'k' }, liquid: 'water' }]} />
                <Tubes.Inlet flows={[{ dir: { l: 'k' }, liquid: 'hotwater' }]} />
                <Tubes.Inlet flows={[{ dir: { l: 'k' }, liquid: 'beer' }]} />
              </td>
            </tr>
            <tr>
              <td>Tube Inlet Whirlpool</td>
              <td>
                <Tubes.InletWhirlpool />
              </td>
              <td>
                <Tubes.InletWhirlpool flows={[{ dir: { l: 'k' }, liquid: 'water' }]} />
                <Tubes.InletWhirlpool flows={[{ dir: { l: 'k' }, liquid: 'hotwater' }]} />
                <Tubes.InletWhirlpool flows={[{ dir: { l: 'k' }, liquid: 'beer' }]} />
              </td>
            </tr>
            <tr>
              <td>Valve</td>
              <td>
                <Valves.Manual liquid={'water'} />
              </td>
              <td>
                <Valves.Manual
                  settings={{ pos: 'open' }}
                  flows={[{ dir: { l: 'r' }, liquid: 'water' }]}
                />
                <Valves.Manual
                  settings={{ pos: 'closed' }}
                  flows={[{ dir: { l: '' }, liquid: 'water' }]}
                />
                <Valves.Manual
                  settings={{ pos: 'midway' }}
                  flows={[{ dir: { l: 'r' }, liquid: 'water' }]}
                />
              </td>
            </tr>
            <tr>
              <td>Motor Valve</td>
              <td>
                <Valves.Motor />
              </td>
              <td>
                <Valves.Motor
                  settings={{ pos: 'open' }}
                  flows={[{ dir: { l: 'r' }, liquid: 'water' }]}
                />
                <Valves.Motor
                  settings={{ powered: 'opening', pos: 'midway' }}
                  flows={[{ dir: { l: 'r' }, liquid: 'water' }]}
                />
                <Valves.Motor
                  settings={{ pos: 'closed' }}
                  flows={[
                    { dir: { l: '' }, liquid: 'water' },
                    { dir: { r: '' }, liquid: 'beer' },
                  ]}
                />
                <Valves.Motor
                  settings={{ powered: 'closing', pos: 'midway' }}
                  flows={[
                    { dir: { l: 'r' }, liquid: 'water' },
                  ]}
                />
                <Valves.Motor
                  settings={{ pos: 'closed' }}
                  flows={[
                    { dir: { l: '' }, liquid: 'water' },
                  ]}
                />
                <Valves.Motor
                  settings={{ pos: 'closed' }}
                  flows={[
                    { dir: { r: '' }, liquid: 'beer' },
                  ]}
                />
              </td>
            </tr>
            <tr>
              <td>Check Valve</td>
              <td>
                <Valves.Check />
              </td>
              <td>
                <Valves.Check
                  flows={[
                    { dir: { l: 'r' }, liquid: 'water' },
                  ]}
                />
                <Valves.Check
                  flows={[
                    { dir: { r: '' }, liquid: 'hotwater' },
                  ]}
                />
                <Valves.Check
                  flows={[
                    { dir: { l: 'r' }, liquid: 'beer' },
                  ]}
                />
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
              <td>Submersible pump</td>
              <td>
                <SubmersiblePump />
              </td>
              <td>
                <SubmersiblePump powered={'on'} liquid={'water'} />
                <SubmersiblePump powered={'slow'} liquid={'hotwater'} />
                <SubmersiblePump powered={'fast'} liquid={'beer'} />
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
                <Cfc
                  flows={[
                    [[{ dir: { l: 'r' }, liquid: 'water' }], [{ dir: { l: 'r' }, liquid: 'water' }], [{ dir: { l: 'r' }, liquid: 'water' }]],
                    [[], [], []],
                  ]}
                />
                <Cfc
                  flows={[
                    [[{ dir: { l: 'r' }, liquid: 'water' }], [{ dir: { l: 'r' }, liquid: 'water' }], [{ dir: { l: 'r' }, liquid: 'water' }]],
                    [[{ dir: { r: 'l' }, liquid: 'beer' }], [{ dir: { r: 'l' }, liquid: 'beer' }], [{ dir: { r: 'l' }, liquid: 'beer' }]],
                  ]}
                />
              </td>
            </tr>
            <tr>
              <td>Glycol Chiller</td>
              <td>
                <GlycolChiller />
              </td>
              <td>
                <GlycolChiller liquid={'water'} />
                <GlycolChiller liquid={'hotwater'} />
                <GlycolChiller liquid={'beer'} />
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
                <Coil
                  flows={[
                    [[{ dir: { l: 'b' }, liquid: 'water' }], [], []],
                    [[{ dir: { t: 'l' }, liquid: 'water' }], [], []],
                  ]}
                />
                <Coil
                  flows={[
                    [[{ dir: { l: 'b' }, liquid: 'hotwater' }], [], []],
                    [[{ dir: { t: 'l' }, liquid: 'hotwater' }], [], []],
                  ]}
                />
              </td>
            </tr>
            <tr>
              <td>Kettle</td>
              <td>
                <Kettle />
              </td>
              <td>
                <Kettle settings={{ liquid: 'beer', volume: 20 }} options={{ volume: 70 }} />
                <Kettle settings={{ liquid: 'water', volume: 50 }} options={{ volume: 70, width: 3, height: 2 }} />
                <Kettle settings={{ liquid: 'hotwater', volume: 30 }} options={{ volume: 70, width: 4, height: 4 }} />
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
