const BigNumber = require("bignumber.js");
const colors = require("./style.cjs");

const tailWind = function(length = 400, fontSize = 16) {
  const chunk = 8;
  const unit = new BigNumber(1).div(chunk);
  const value = new BigNumber(fontSize).div(4).div(chunk);
  const spacing = {};
  for (let index = 1, size = length * chunk; index <= size; index++) {
    const key = new BigNumber(index).times(unit).toFixed(6);
    const data = new BigNumber(index).times(value).div(fontSize).toFixed(6);
    spacing[Number(key).toString()] = Number(data).toString() + "rem";
  }
  return spacing;
}

const opacity = function() {
  const value = {};
  for(let i = 0; i <= 100; i++) {
    const key = String(i);
    value[key] = String(i / 100);
  }
  return value;
}

const tailwindValue = tailWind();

module.exports = { 
  opacity: opacity(),
  spacing: tailwindValue,
  height: tailwindValue, 
  width: Object.assign({ fit: "fit-content" }, tailwindValue), 
  colors
};