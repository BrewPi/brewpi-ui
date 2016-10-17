const fills = {
  water: '#1A8AAB',
  beer: '#E1AC00',
  hotwater: '#DB0023',
  background: '#24333D',
  conflict: 'orange',
};

function fillStyle(liquid) {
  const fill = liquid ? fills[liquid] : fills.background;
  return (
    {
      fill,
    }
  );
}

function strokeStyle(liquid) {
  const stroke = liquid ? fills[liquid] : fills.background;
  return (
    {
      stroke,
    }
  );
}

export const Liquids = {
  fillStyle,
  strokeStyle,
};
