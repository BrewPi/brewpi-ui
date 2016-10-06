/*
 * Rotates each character of a string by a multiple of 90 degrees
 * for the characters rtlb: right, top, left, bottom.
 * For 90 degrees, left will become top, top will become right, etc.
 */
const rotateString = (oldString, angle) => {
  let newString = '';
  const lookup = { l: 't', t: 'r', r: 'b', b: 'l' };
  for (const ch of oldString) {
    let newCh = ch;
    let angleRemaining = angle;
    while (angleRemaining > 0) {
      newCh = lookup[newCh];
      angleRemaining -= 90;
    }
    newString += newCh;
  }
  return newString;
};

/*
 * For a dictionary of keys and string values representing flow..
 * example: {l:'r', r:'l'} represents a simple tube:
 * flow from left to right or right to left.
 * This function will update the flows as if the block was rotated.
 */
export const rotateFlows = (oldFlows, angle) => {
  const newFlows = {};
  for (const [key, value] of Object.entries(oldFlows)) {
    const newKey = rotateString(key, angle);
    const newValue = rotateString(value, angle);
    newFlows[newKey] = newValue;
  }
  return newFlows;
};
