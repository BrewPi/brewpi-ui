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
import Pump from '../Pump';
import PumpSubmersible from '../PumpSubmersible';
import BlowerFan from '../BlowerFan';
import Burner from '../Burner';
import { TempSensors } from '../TempSensors';
import { Cfc } from '../Cfc';
import { GlycolChiller } from '../GlycolChiller';
import { FilterBottom } from '../FilterBottom';
import { Lauterhexe } from '../Lauterhexe';
import { HeatingElement } from '../HeatingElement';
import { TubularHeater } from '../TubularHeater';
import { Coil } from '../Coil';
import { CoilImmersion } from '../CoilImmersion';
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
                <Tubes.Input flows={[{ dir: { s: 'r' }, flowing: 'sR', liquid: 'water' }]} />
                <Tubes.Input flows={[{ dir: { s: 'r' }, flowing: 'sR', liquid: 'hotwater' }]} />
                <Tubes.Input flows={[{ dir: { s: 'r' }, flowing: 'sR', liquid: 'beer' }]} />
              </td>
            </tr>
            <tr>
              <td>Tube Output</td>
              <td>
                <Tubes.Output />
              </td>
              <td>
                <Tubes.Output flows={[{ dir: { l: 's' }, flowing: 'lS', liquid: 'water' }]} />
                <Tubes.Output flows={[{ dir: { l: 's' }, flowing: 'lS', liquid: 'hotwater' }]} />
                <Tubes.Output flows={[{ dir: { l: 's' }, flowing: 'lS', liquid: 'beer' }]} />
              </td>
            </tr>
            <tr>
              <td>Tube Straight</td>
              <td>
                <Tubes.Straight />
              </td>
              <td>
                <Tubes.Straight flows={[{ dir: { l: 'r' }, flowing: 'lR', liquid: 'water' }]} />
                <Tubes.Straight flows={[{ dir: { l: 'r' }, flowing: 'lR', liquid: 'hotwater' }]} />
                <Tubes.Straight flows={[{ dir: { l: 'r' }, flowing: 'lR', liquid: 'beer' }]} />

              </td>
            </tr>
            <tr>
              <td>Tube Elbow</td>
              <td>
                <Tubes.Elbow />
              </td>
              <td>
                <Tubes.Elbow flows={[{ dir: { t: 'r' }, flowing: 'tR', liquid: 'water' }]} />
                <Tubes.Elbow flows={[{ dir: { t: 'r' }, flowing: 'tR', liquid: 'hotwater' }]} />
                <Tubes.Elbow flows={[{ dir: { t: 'r' }, flowing: 'tR', liquid: 'beer' }]} />
              </td>
            </tr>
            <tr>
              <td>Tube Tee</td>
              <td>
                <Tubes.Tee />
              </td>
              <td>
                <Tubes.Tee flows={[{ dir: { l: 'tr' }, flowing: 'lTR', liquid: 'water' }]} />
                <Tubes.Tee flows={[{ dir: { t: 'lr' }, flowing: 'tLR', liquid: 'hotwater' }]} />
                <Tubes.Tee flows={[{ dir: { t: 'lr' }, flowing: 'tLR', liquid: 'beer' }]} />
              </td>
            </tr>
            <tr>
              <td>Tube Cross</td>
              <td>
                <Tubes.Cross />
              </td>
              <td>
                <Tubes.Cross flows={[{ dir: { l: 'trb' }, flowing: 'lTRB', liquid: 'water' }]} />
                <Tubes.Cross flows={[{ dir: { l: 'trb' }, flowing: 'lTRB', liquid: 'hotwater' }]} />
                <Tubes.Cross flows={[{ dir: { l: 'trb' }, flowing: 'lTRB', liquid: 'beer' }]} />
              </td>
            </tr>
            <tr>
              <td>Tube Bridge</td>
              <td>
                <Tubes.Bridge />
              </td>
              <td>
                <Tubes.Bridge flows={[{ dir: { l: 'r' }, flowing: 'lR', liquid: 'water' }]} />
                <Tubes.Bridge flows={[{ dir: { l: 'r' }, flowing: 'lR', liquid: 'hotwater' }]} />
                <Tubes.Bridge flows={[{ dir: { l: 'r' }, flowing: 'lR', liquid: 'beer' }]} />
              </td>
            </tr>
            <tr>
              <td>Fitting</td>
              <td>
                <Tubes.Fitting />
              </td>
              <td>
                <Tubes.Fitting flows={[{ dir: { l: 'k' }, flowing: 'lK', liquid: 'water' }]} />
                <Tubes.Fitting flows={[{ dir: { l: 'k' }, flowing: 'lK', liquid: 'hotwater' }]} />
                <Tubes.Fitting flows={[{ dir: { l: 'k' }, flowing: 'lK', liquid: 'beer' }]} />
              </td>
            </tr>
            <tr>
              <td>Tube Inlet Straight</td>
              <td>
                <Tubes.InletStraight />
              </td>
              <td>
                <Tubes.InletStraight flows={[{ dir: { l: 'k' }, flowing: 'lK', liquid: 'water' }]} />
                <Tubes.InletStraight flows={[{ dir: { l: 'k' }, flowing: 'lK', liquid: 'hotwater' }]} />
                <Tubes.InletStraight flows={[{ dir: { l: 'k' }, flowing: 'lK', liquid: 'beer' }]} />
              </td>
            </tr>
            <tr>
              <td>Tube Dip</td>
              <td>
                <Tubes.Dip />
              </td>
              <td>
                <Tubes.Dip flows={[{ dir: { k: 'l' }, flowing: 'kL', liquid: 'water' }]} />
                <Tubes.Dip flows={[{ dir: { k: 'l' }, flowing: 'kL', liquid: 'hotwater' }]} />
                <Tubes.Dip flows={[{ dir: { k: 'l' }, flowing: 'kL', liquid: 'beer' }]} />
              </td>
            </tr>
            <tr>
              <td>Tube Inlet</td>
              <td>
                <Tubes.Inlet />
              </td>
              <td>
                <Tubes.Inlet flows={[{ dir: { l: 'k' }, flowing: 'lK', liquid: 'water' }]} />
                <Tubes.Inlet flows={[{ dir: { l: 'k' }, flowing: 'lK', liquid: 'hotwater' }]} />
                <Tubes.Inlet flows={[{ dir: { l: 'k' }, flowing: 'lK', liquid: 'beer' }]} />
              </td>
            </tr>
            <tr>
              <td>Tube Inlet Whirlpool</td>
              <td>
                <Tubes.InletWhirlpool />
              </td>
              <td>
                <Tubes.InletWhirlpool
                  flows={[
                    [[{ dir: { l: 'b' }, flowing: 'lB', liquid: 'water' }]],
                    [[{ dir: { t: 'b' }, flowing: 'tB', liquid: 'water' }]],
                    [[{ dir: { t: 'k' }, flowing: 'tK', liquid: 'water' }]],
                  ]}
                />
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
                  flows={[{ dir: { l: 'r' }, flowing: 'lR', liquid: 'water' }]}
                />
                <Valves.Manual
                  settings={{ pos: 'closed' }}
                  flows={[{ dir: { l: '' }, flowing: '', liquid: 'water' }]}
                />
                <Valves.Manual
                  settings={{ pos: 'midway' }}
                  flows={[{ dir: { l: 'r' }, flowing: 'lR', liquid: 'water' }]}
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
                  flows={[{ dir: { l: 'r' }, flowing: 'lR', liquid: 'water' }]}
                />
                <Valves.Motor
                  settings={{ powered: 'opening', pos: 'midway' }}
                  flows={[{ dir: { l: 'r' }, flowing: 'lR', liquid: 'water' }]}
                />
                <Valves.Motor
                  settings={{ pos: 'closed' }}
                  flows={[
                    { dir: { l: '' }, flowing: '', liquid: 'water' },
                    { dir: { r: '' }, flowing: '', liquid: 'beer' },
                  ]}
                />
                <Valves.Motor
                  settings={{ powered: 'closing', pos: 'midway' }}
                  flows={[
                    { dir: { l: 'r' }, flowing: '', liquid: 'water' },
                  ]}
                />
                <Valves.Motor
                  settings={{ pos: 'closed' }}
                  flows={[
                    { dir: { l: '' }, flowing: '', liquid: 'water' },
                  ]}
                />
                <Valves.Motor
                  settings={{ pos: 'closed' }}
                  flows={[
                    { dir: { r: '' }, flowing: '', liquid: 'beer' },
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
                    { dir: { l: 'r' }, flowing: 'lR', liquid: 'water' },
                  ]}
                />
                <Valves.Check
                  flows={[
                    { dir: { r: '' }, flowing: '', liquid: 'hotwater' },
                  ]}
                />
                <Valves.Check
                  flows={[
                    { dir: { l: 'r' }, flowing: 'lR', liquid: 'beer' },
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
                <Pump settings={{ power: true, speed: 20 }} flows={[{ dir: { l: 'r' }, flowing: 'lR', liquid: 'water' }]} />
                <Pump settings={{ power: true, speed: 50 }} flows={[{ dir: { l: 'r' }, flowing: 'lR', liquid: 'beer' }]} />
                <Pump settings={{ power: true, speed: 100 }} flows={[{ dir: { l: 'r' }, flowing: 'lR', liquid: 'hotwater' }]} />
              </td>
            </tr>
            <tr>
              <td>Submersible pump</td>
              <td>
                <PumpSubmersible />
              </td>
              <td>
                <PumpSubmersible settings={{ power: true, speed: 20 }} flows={[{ dir: { l: 'r' }, flowing: 'lR', liquid: 'water' }]} />
                <PumpSubmersible settings={{ power: true, speed: 50 }} flows={[{ dir: { l: 'r' }, flowing: 'lR', liquid: 'beer' }]} />
                <PumpSubmersible settings={{ power: true, speed: 100 }} flows={[{ dir: { l: 'r' }, flowing: 'lR', liquid: 'hotwater' }]} />
              </td>
            </tr>
            <tr>
              <td>Blower fan</td>
              <td>
                <BlowerFan />
              </td>
              <td>
                <BlowerFan settings={{ power: true, speed: 20 }} flows={[{ dir: { l: 'r' }, flowing: 'lR', liquid: '$1' }]} />
                <BlowerFan settings={{ power: true, speed: 50 }} flows={[{ dir: { l: 'r' }, flowing: 'lR', liquid: '$1' }]} />
                <BlowerFan settings={{ power: true, speed: 100 }} flows={[{ dir: { l: 'r' }, flowing: 'lR', liquid: '$1' }]} />
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
                    [[{ dir: { l: 'r' }, flowing: 'lR', liquid: 'water' }], [{ dir: { l: 'r' }, flowing: 'lR', liquid: 'water' }], [{ dir: { l: 'r' }, flowing: 'lR', liquid: 'water' }]],
                    [[], [], []],
                  ]}
                />
                <Cfc
                  flows={[
                    [[{ dir: { l: 'r' }, flowing: 'lR', liquid: 'water' }], [{ dir: { l: 'r' }, flowing: 'lR', liquid: 'water' }], [{ dir: { l: 'r' }, flowing: 'lR', liquid: 'water' }]],
                    [[{ dir: { r: 'l' }, flowing: 'rL', liquid: 'beer' }], [{ dir: { r: 'l' }, flowing: 'rL', liquid: 'beer' }], [{ dir: { r: 'l' }, flowing: 'rL', liquid: 'beer' }]],
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
              <td>Filter Bottom</td>
              <td>
                <FilterBottom />
              </td>
              <td>
                <FilterBottom
                  flows={[{ dir: { k: 'l' }, flowing: 'kL', liquid: 'water' }]}
                />
              </td>
            </tr>
            <tr>
              <td>Lauterhexe</td>
              <td>
                <Lauterhexe />
              </td>
              <td>
                <Lauterhexe />
              </td>
            </tr>
            <tr>
              <td>Heater</td>
              <td>
                <HeatingElement />
              </td>
              <td>
                <HeatingElement settings={{ duty: 70 }} />
                <HeatingElement settings={{ duty: 100 }} />
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
              <td>Gas Burner</td>
              <td>
                <Burner />
              </td>
              <td>
                <Burner settings={{ power: true, intensity: 25 }} />
                <Burner settings={{ power: true, intensity: 50 }} />
                <Burner settings={{ power: true, intensity: 75 }} />
                <Burner settings={{ power: true, intensity: 100 }} />
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
                    [[{ dir: { l: 'r' }, flowing: 'lR', liquid: 'water' }], [{ dir: { l: 'b' }, flowing: 'lB', liquid: 'water' }], []],
                    [[{ dir: { r: 'l' }, flowing: 'rL', liquid: 'water' }], [{ dir: { t: 'l' }, flowing: 'tL', liquid: 'water' }], []],
                  ]}
                />
                <Coil
                  flows={[
                    [[{ dir: { l: 'r' }, flowing: 'lR', liquid: 'water' }], [{ dir: { l: 'b' }, flowing: 'lB', liquid: 'water' }], []],
                    [[{ dir: { r: 'l' }, flowing: 'rL', liquid: 'water' }], [{ dir: { t: 'l' }, flowing: 'tL', liquid: 'water' }], []],
                  ]}
                />
              </td>
            </tr>
            <tr>
              <td>Coil Immersion</td>
              <td>
                <CoilImmersion />
              </td>
              <td>
                <CoilImmersion
                  flows={[
                    [[{ dir: { t: 'b' }, flowing: 'tB', liquid: 'water' }], [{ dir: { b: 't' }, flowing: 'bT', liquid: 'water' }]],
                    [[{ dir: { t: 'r' }, flowing: 'tR', liquid: 'water' }], [{ dir: { l: 't' }, flowing: 'lT', liquid: 'water' }]],
                  ]}
                />
                <CoilImmersion
                  flows={[
                    [[{ dir: { b: 't' }, flowing: 'bT', liquid: 'water' }], [{ dir: { t: 'b' }, flowing: 'tB', liquid: 'water' }]],
                    [[{ dir: { r: 't' }, flowing: 'rT', liquid: 'water' }], [{ dir: { t: 'l' }, flowing: 'tL', liquid: 'water' }]],
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
                <Kettle settings={{ liquid: 'hotwater', volume: 30, grain: 20 }} options={{ volume: 70, width: 4, height: 4 }} />
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
                <BeerBottle liquid={'#7f210f'} />
                <BeerBottle liquid={'#2d0801'} />
                <BeerBottle liquid={'#bc9945'} />
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

export default CatalogPage;
