const colors = {
  water: '#1A8AAB',
  beer: '#E1AC00',
  hotwater: '#DB0023',
};

function fillStyle(liquid) {
  const fill = liquid ? colors[liquid] : 'none';
  return (
    {
      fill,
    }
  );
}

function strokeStyle(liquid) {
  const stroke = liquid ? colors[liquid] : 'none';
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
