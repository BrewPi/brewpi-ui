import React from 'react';
import styles from './styles.css';
import { Liquids } from '../Liquids';

const SvgBeerBottle = require('./svg/beerbottle.svg?tag=g');
const SvgLiquidBeerBottle = require('./svg/liquid_beerbottle.svg?tag=g');

import { SvgParent } from '../SvgParent';

export const BeerBottle = (props) => (
  <SvgParent viewBox={'0 0 50 75'}>
    <SvgBeerBottle className={styles.beerBottle} />
    <SvgLiquidBeerBottle className={styles.beerBottleFill} style={Liquids.fillStyle(props.liquid)} />
  </SvgParent>
);
BeerBottle.propTypes = {
  liquid: React.PropTypes.string,
};
