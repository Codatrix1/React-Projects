// How to convert RGB to HEX: Googled from Stackoverflow

const componentToHex = function (c) {
  const hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
};

const rgbToHex = function (r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
};

export default rgbToHex;
