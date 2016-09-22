const SVG = {
  Empty: require('./pattern/grid.svg'),
  Valve: {
    Motor: require('./motorized-valve/motorized-valve.svg'),
    Manual: require('./manual-valve/manual-valve.svg'),
    Check: require('./check-valve/check-valve.svg'),
  },
  Tube: {
    Straight: require('./tubes/tube.svg'),
    Knee: require('./90degrees/90degrees.svg'),
    Tee: require('./tee/tee.svg'),
    Cross: require('./cross/cross.svg'),
    Bridge: require('./bridge/bridge.svg'),
  },
};

export default SVG;