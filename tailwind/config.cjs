
const tailWind = function(length = 100, fontSize = 16) {
  const unit = 0.125;
  const spacing = {};
  for (let i = 1; i <= length; i++) {
    for(let size = 1; size <= 8; size++) {
      const key = size * unit * i;
      const value = key * 4 / fontSize;
      spacing[String(key)] = `${value}rem`;
    }
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



const colors = {
  red: "#E57373",
  black: "#262626",
  primary: "#3c6cfe",
  error: "#FC4B3B",
  yellow: "#FAAD14"
};

const tailwindValue = tailWind();

module.exports = { 
  opacity: opacity(),
  spacing: tailwindValue,
  height: tailwindValue, 
  width: Object.assign({ fit: "fit-content" }, tailwindValue), 
  colors
};