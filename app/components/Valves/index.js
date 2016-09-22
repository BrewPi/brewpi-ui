import React from 'react';
import SVG from '../../svg/svg.js';

export const Manual = (props) => {
  const className = props.rotate ? 'rotate-' + props.rotate : '';
  return <SVG.Valve.Manual className={className} />;
};

export const Motor = (props) => {
  const className = props.rotate ? 'rotate-' + props.rotate : '';
  return <SVG.Valve.Motor className={className} />;
};

export const Check = (props) => {
  const className = props.rotate ? 'rotate-' + props.rotate : '';
  return <SVG.Valve.Check className={className} />;
};
