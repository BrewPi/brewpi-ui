const fills = {
  water: '#1A8AAB',
  hotwater: '#DB0023',
  beer: '#E1AC00',
  wort: '#c78a49',
  runoff: '#d69d5f',
  background: '#24333D',
  conflict: 'orange',
};
function color(liquid) {
  return liquid ? fills[liquid] : fills.background;
}

function fillStyle(liquid) {
  return (
    {
      fill: color(liquid),
    }
  );
}

function strokeStyle(liquid) {
  return (
    {
      stroke: color(liquid),
    }
  );
}

export const Liquids = {
  color,
  fillStyle,
  strokeStyle,
};
