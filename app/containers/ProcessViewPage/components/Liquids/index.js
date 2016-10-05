const colors = {
  water: '#1A8AAB',
  beer: '#E1AC00',
  hotwater: '#DB0023',
  background: '#24333D',
};

function fillStyle(liquid) {
  const fill = liquid ? colors[liquid] : colors.background;
  return (
    {
      fill,
    }
  );
}

function strokeStyle(liquid) {
  const stroke = liquid ? colors[liquid] : colors.background;
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
