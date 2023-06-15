"use strict";

// global variables
const selectType = document.getElementById("select-type");
const units = document.getElementById("units");

// array of units
let massUnits = ["kilogram", "gram", "pound", "ounce"];
let lengthUnits = ["kilometer", "meter", "cetimeter", "millimeter", "mile", "yard", "foot", "inch"];
let tempUnits = ["celsius", "fahrenheit", "kelvin"];

// class of formulae
class Formulae {
  // mass
  // convert to SI unit {kg}
  static gToKg = x => x / 1000;
  static poundToKg = x => x / 2.205;
  static ounceToKg = x => x / 35.274;
  // SI unit to specific units
  static kgToG = x => x * 1000;
  static kgToPound = x => x * 2.205;
  static kgToOunce = x => x * 35.274;

  // length
  // convert to SI unit {meter}
  static kmToM = x => x * 1000;
  static cmToM = x => x / 100;
  static mmToM = x => x / 1000;
  static mileToM = x => x * 1609;
  static yardToM = x => x / 1.094;
  static footToM = x => x / 3.281;
  static inchToM = x => x / 39.37;
  // SI unit to specific units
  static mToKm = x => x / 1000;
  static mToCm = x => x * 100;
  static mToMm = x => x * 1000;
  static mToMile = x => x / 1609;
  static mToYard = x => x * 1.094;
  static mToFoot = x => x * 3.281;
  static mToInch = x => x * 39.37;

  // temperature
  // convert to SI unit {kelvin}
  static cToK = x => {
    return Number(Number(x + 273.15).toFixed(2));
  };
  static fToK = x => {
    let result = (x - 32) * (5/9) + 273.15;
    return Number(Number(result).toFixed(2));
  };
  // SI unit to specific units
  static kToC = x => {
    let result = x - 273.15;
    return Number(Number(result).toFixed(2));
  };
  static kToF = x => {
    let result = (x - 273.15) * (9/5) + 32;
    return Number(Number(result).toFixed(2));
  };
}

// type selector event
selectType.addEventListener("input", (e) => {
  switch (e.target.value) {
    case "mass": addUnits(massUnits);
    break;
    case "length": addUnits(lengthUnits);
    break;
    case "temperature": addUnits(tempUnits);
    break;
  }
});

// refresh event
document.addEventListener("DOMContentLoaded", () => selectType.value = "");

// add input bar of units for a type
function addUnits(type) {
  // clear out the existing units
  units.textContent = "";
  // loop over the units array
  type.forEach(unit => {
    let div = document.createElement("div");
    div.className = "row";

    let label = document.createElement("label");
    label.className = "label-style";
    label.setAttribute("for", `${unit}`);
    label.textContent = `${unit[0].toUpperCase() + unit.slice(1)}:`;

    let input = document.createElement("input");
    input.className = "input-bar";
    input.setAttribute("type", "number");
    input.setAttribute("id", `${unit}`);

    div.appendChild(label);
    div.appendChild(input);
    units.appendChild(div);
  });

  const inputBar = Array.from(document.querySelectorAll("input.input-bar"));
  
  inputBar.forEach(bar => bar.addEventListener("input", mainFunc));

  let number;

  function mainFunc(e) {
    // console.log(e.target.id);
    switch (e.target.id) {
      case "kilogram": 
        number = e.target.value;
        inputBar[1].value = `${Formulae.kgToG(number)}`;
        inputBar[2].value = `${Formulae.kgToPound(number)}`;
        inputBar[3].value = `${Formulae.kgToOunce(number)}`;
      break;
      case "gram": 
        number = Formulae.gToKg(e.target.value);
        inputBar[0].value = `${number}`;
        inputBar[2].value = `${Formulae.kgToPound(number)}`;
        inputBar[3].value = `${Formulae.kgToOunce(number)}`;
      break;
      case "pound": 
        number = Formulae.poundToKg(e.target.value);
        inputBar[0].value = `${number}`;
        inputBar[1].value = `${Formulae.kgToG(number)}`;
        inputBar[3].value = `${Formulae.kgToOunce(number)}`;
      break;
      case "ounce": 
        number = Formulae.ounceToKg(e.target.value);
        inputBar[0].value = `${number}`;
        inputBar[1].value = `${Formulae.kgToG(number)}`;
        inputBar[2].value = `${Formulae.kgToPound(number)}`;
      break;
      case "kilometer" :
        number = Formulae.kmToM(e.target.value);
        inputBar[1].value = `${number}`;
        inputBar[2].value = `${Formulae.mToCm(number)}`;
        inputBar[3].value = `${Formulae.mToMm(number)}`;
        inputBar[4].value = `${Formulae.mToMile(number)}`;
        inputBar[5].value = `${Formulae.mToYard(number)}`;
        inputBar[6].value = `${Formulae.mToFoot(number)}`;
        inputBar[7].value = `${Formulae.mToInch(number)}`;
      break;
      case "meter" :
        number = e.target.value;
        inputBar[0].value = `${Formulae.mToKm(number)}`;
        inputBar[2].value = `${Formulae.mToCm(number)}`;
        inputBar[3].value = `${Formulae.mToMm(number)}`;
        inputBar[4].value = `${Formulae.mToMile(number)}`;
        inputBar[5].value = `${Formulae.mToYard(number)}`;
        inputBar[6].value = `${Formulae.mToFoot(number)}`;
        inputBar[7].value = `${Formulae.mToInch(number)}`;
      break;
      case "cetimeter" :
        number = Formulae.cmToM(e.target.value);
        inputBar[0].value = `${Formulae.mToKm(number)}`;
        inputBar[1].value = `${number}`;
        inputBar[3].value = `${Formulae.mToMm(number)}`;
        inputBar[4].value = `${Formulae.mToMile(number)}`;
        inputBar[5].value = `${Formulae.mToYard(number)}`;
        inputBar[6].value = `${Formulae.mToFoot(number)}`;
        inputBar[7].value = `${Formulae.mToInch(number)}`;
      break;
      case "millimeter" :
        number = Formulae.mmToM(e.target.value);
        inputBar[0].value = `${Formulae.mToKm(number)}`;
        inputBar[1].value = `${number}`;
        inputBar[2].value = `${Formulae.mToCm(number)}`;
        inputBar[4].value = `${Formulae.mToMile(number)}`;
        inputBar[5].value = `${Formulae.mToYard(number)}`;
        inputBar[6].value = `${Formulae.mToFoot(number)}`;
        inputBar[7].value = `${Formulae.mToInch(number)}`;
      break;
      case "mile" :
        number = Formulae.mileToM(e.target.value);
        inputBar[0].value = `${Formulae.mToKm(number)}`;
        inputBar[1].value = `${number}`;
        inputBar[2].value = `${Formulae.mToCm(number)}`;
        inputBar[3].value = `${Formulae.mToMm(number)}`;
        inputBar[5].value = `${Formulae.mToYard(number)}`;
        inputBar[6].value = `${Formulae.mToFoot(number)}`;
        inputBar[7].value = `${Formulae.mToInch(number)}`;
      break;
      case "yard" :
        number = Formulae.yardToM(e.target.value);
        inputBar[0].value = `${Formulae.mToKm(number)}`;
        inputBar[1].value = `${number}`;
        inputBar[2].value = `${Formulae.mToCm(number)}`;
        inputBar[3].value = `${Formulae.mToMm(number)}`;
        inputBar[4].value = `${Formulae.mToMile(number)}`;
        inputBar[6].value = `${Formulae.mToFoot(number)}`;
        inputBar[7].value = `${Formulae.mToInch(number)}`;
      break;
      case "foot" :
        number = Formulae.footToM(e.target.value);
        inputBar[0].value = `${Formulae.mToKm(number)}`;
        inputBar[1].value = `${number}`;
        inputBar[2].value = `${Formulae.mToCm(number)}`;
        inputBar[3].value = `${Formulae.mToMm(number)}`;
        inputBar[4].value = `${Formulae.mToMile(number)}`;
        inputBar[5].value = `${Formulae.mToYard(number)}`;
        inputBar[7].value = `${Formulae.mToInch(number)}`;
      break;
      case "inch" :
        number = Formulae.inchToM(e.target.value);
        inputBar[0].value = `${Formulae.mToKm(number)}`;
        inputBar[1].value = `${number}`;
        inputBar[2].value = `${Formulae.mToCm(number)}`;
        inputBar[3].value = `${Formulae.mToMm(number)}`;
        inputBar[4].value = `${Formulae.mToMile(number)}`;
        inputBar[5].value = `${Formulae.mToYard(number)}`;
        inputBar[6].value = `${Formulae.mToFoot(number)}`;
      break;
      case "celsius" :
        number = Formulae.cToK(Number(e.target.value));
        inputBar[1].value = `${Formulae.kToF(number)}`;
        inputBar[2].value = `${number}`;
      break;
      case "fahrenheit" :
        number = Formulae.fToK(Number(e.target.value));
        inputBar[0].value = `${Formulae.kToC(number)}`;
        inputBar[2].value = `${number}`;
      break;
      case "kelvin" :
        number = e.target.value;
        inputBar[0].value = `${Formulae.kToC(number)}`;
        inputBar[1].value = `${Formulae.kToF(number)}`;
      break;
    }
    // console.log(`${number}units`);
  }
}

