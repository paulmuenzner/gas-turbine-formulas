/*************
Testing all gas turbine functions from gasturbine.formula.ts
*************/

import { GasTurbine } from "../index";

const gasturbine = new GasTurbine();

// BRAYTON CYCLE EFFICIENCY 1
test("Thermal efficiency of simple Brayton cycle function (Seven test procedures / Max ten decimal places (precision))", () => {
  expect(gasturbine.nth1(299, 499, 1190, 699)).toBeCloseTo(0.4211287988, 10);
  expect(gasturbine.nth1(288, 429, 1150, 729)).toBeCloseTo(0.3883495146, 10);
  expect(gasturbine.nth1(309.4, 427, 1360, 809)).toBeCloseTo(0.4645230439, 10);
  expect(gasturbine.nth1(281.7, 440, 1404, 819)).toBeCloseTo(0.4426348548, 10);
  expect(gasturbine.nth1(298.1, 425.6, 1270, 800)).toBeCloseTo(
    0.4056134533,
    10
  );
  expect(gasturbine.nth1(297, 430, 1210, 799)).toBeCloseTo(0.3564102564, 10);
  expect(gasturbine.nth1(277, 415.88, 1220, 781.88)).toBeCloseTo(
    0.3721335124,
    10
  );
});

// BRAYTON CYCLE EFFICIENCY 2
test("Thermal efficiency of Brayton cycle. Following input values represent rather isentropic turbine efficiency (Seven test procedures / Max ten decimal places (precision))", () => {
  expect(gasturbine.nth2(1.65, 0.707, 3.877)).toBeCloseTo(0.243229301, 10);
  expect(gasturbine.nth2(1.666, 0.722, 3.866)).toBeCloseTo(0.244180031, 10);
  expect(gasturbine.nth2(1.64, 0.72, 3.826)).toBeCloseTo(0.2404600105, 10);
  expect(gasturbine.nth2(1.701, 0.77, 3.9)).toBeCloseTo(0.2387179487, 10);
  expect(gasturbine.nth2(1.72, 0.766, 3.722)).toBeCloseTo(0.2563138098, 10);
  expect(gasturbine.nth2(1.694, 0.7, 3.699)).toBeCloseTo(0.268721276, 10);
  expect(gasturbine.nth2(1.6701, 0.7, 3.803)).toBeCloseTo(0.2550880884, 10);
});

// BRAYTON CYCLE EFFICIENCY 3 (based on pressure ratio)
test("Thermal efficiency of Brayton cycle. (Seven test procedures / Max ten decimal places (precision))", () => {
  expect(gasturbine.nth3(2, 1.5)).toBeCloseTo(0.206299474, 10);
  expect(gasturbine.nth3(2.41, 1.5)).toBeCloseTo(0.2541336989, 10);
  expect(gasturbine.nth3(2.51, 1.5)).toBeCloseTo(0.264173497, 10);
  expect(gasturbine.nth3(15, 1.4)).toBeCloseTo(0.538710121, 10);
  expect(gasturbine.nth3(20.11, 1.5)).toBeCloseTo(0.63226979, 10);
  expect(gasturbine.nth3(10, 1.487)).toBeCloseTo(0.5295700577, 10);
  expect(gasturbine.nth3(2.2222, 1.499)).toBeCloseTo(0.2334158286, 10);
});

// WORK ISENTROPIC COMPRESSION (cp for helium gas turbine)
test("Work (kJ/kg) done on the gas with compressor - isentropic compression (Seven test procedures / Max ten decimal places (precision))", () => {
  expect(gasturbine.Wcs(298, 419, 5.193)).toBeCloseTo(628.353, 10);
  expect(gasturbine.Wcs(299, 433, 5.193)).toBeCloseTo(695.862, 10);
  expect(gasturbine.Wcs(303, 433, 5.193)).toBeCloseTo(675.09, 10);
  expect(gasturbine.Wcs(277, 410, 5.193)).toBeCloseTo(690.669, 10);
  expect(gasturbine.Wcs(285, 425, 5.193)).toBeCloseTo(727.02, 10);
  expect(gasturbine.Wcs(286, 399, 5.193)).toBeCloseTo(586.809, 10);
  expect(gasturbine.Wcs(299, 412, 5.193)).toBeCloseTo(586.809, 10);
});

// WORK ADIABATIC COMPRESSION (cp for helium gas turbine)
test("Work (kJ/kg) done on the gas with compressor - adiabatic compression (Seven test procedures / Max ten decimal places (precision))", () => {
  expect(gasturbine.Wcr(298, 419, 5.193, 0.84)).toBeCloseTo(748.0392857143, 10);
  expect(gasturbine.Wcr(299, 433, 5.193, 0.82)).toBeCloseTo(848.612195122, 10);
  expect(gasturbine.Wcr(303, 433, 5.193, 0.8)).toBeCloseTo(843.8625, 10);
  expect(gasturbine.Wcr(277, 410, 5.193, 0.79)).toBeCloseTo(874.264556962, 10);
  expect(gasturbine.Wcr(285, 425, 5.193, 0.85)).toBeCloseTo(855.3176470588, 10);
  expect(gasturbine.Wcr(286, 399, 5.193, 0.81)).toBeCloseTo(724.4555555556, 10);
  expect(gasturbine.Wcr(299, 412, 5.193, 0.8)).toBeCloseTo(733.51125, 10);
});

// ADDED HEAT BRAYTON CYCLE
test("Heat (kJ/kg) added at heat exchanger - isentropic compression (Seven test procedures / Max ten decimal places (precision))", () => {
  expect(gasturbine.Qadd(295, 441, 1188, 5.193, 0.87)).toBeCloseTo(
    3765.8800344828,
    10
  );
  expect(gasturbine.Qadd(299, 433, 1190, 5.193, 0.85)).toBeCloseTo(
    3808.3018235294,
    10
  );
  expect(gasturbine.Qadd(303, 433, 1290, 5.193, 0.8)).toBeCloseTo(
    4281.6285,
    10
  );
  expect(gasturbine.Qadd(277, 410, 1390, 5.193, 0.88)).toBeCloseTo(
    4994.9578636364,
    10
  );
  expect(gasturbine.Qadd(285, 425, 1190, 5.193, 0.85)).toBeCloseTo(
    3844.3473529412,
    10
  );
  expect(gasturbine.Qadd(286, 399, 1190, 5.193, 0.81)).toBeCloseTo(
    3970.0164444444,
    10
  );
  expect(gasturbine.Qadd(299, 412, 1190, 5.193, 0.8)).toBeCloseTo(
    3893.45175,
    10
  );
});
