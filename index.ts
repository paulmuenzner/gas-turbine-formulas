// Gas Turbine Formulas
//
// --------------------------------------------------------------------
////////// Variables, constants //////////
// m      =    mass                      kg
// P      =    power        (watts)      (kg * m^2)/s^3
// W      =    work         (joules)     (kg * m^2)/s^2
// T      =    Temperature  (kelvin)
// p2     =    Pressure after gas turbine compressor (usually in MPa)
// p1     =    Pressure before gas turbine compressor (usually in MPa)
// Wcs    =    Work done on the gas by the compressor for isentropic compression (kg * m^2)/s^2
// Wcr    =    Real work done by the gas by the compressor for adiabatic compression (kg * m^2)/s^2
// Wts    =    Work done by gas turbine during isentropic expansion (kg * m^2)/s^2
// Wtr    =    Work done by gas turbine during adiabatic expansion (kg * m^2)/s^2
// Qadd   =    Added heat in kilo joules
// cp     =    Specific heat capacity (joules/(kg * K))
// nth    =    thermal efficiency (dimensionless)
// nc     =    adiabatic efficiency (dimensionless)
// nk     =    isentropic efficiency (dimensionless)
// PR     =    Compressor pressure ratio (PR = p2/p1)
// gamma  =    ratio of specific heat at constant pressure and constant volume
//
// ---------------------------------------------------------------------
//

// Initialize a Gas Turbine Formula Class
export var GasTurbine = function () {};

//
//
//
// --------------------------------------------------------------------
// Calculates the thermal efficiency of a simple Brayton
// cycle for ideal gas.
//
// Formula:             Nr 1              Nr 2
//
//                   (T4 - T1)          WT - WC
//   nth  =     1 - -----------   =   -----------
//                   (T3 - T2)            Qadd
//
// --------------------------------------------------------------------
//
GasTurbine.prototype.nth1 = function (
  T1: number,
  T2: number,
  T3: number,
  T4: number
): number {
  const nth: number = 1 - (T4 - T1) / (T3 - T2);
  return nth;
};

GasTurbine.prototype.nth2 = function (
  WT: number,
  WC: number,
  Qadd: number
): number {
  const nth: number = (WT - WC) / Qadd;
  return nth;
};
//
//
//
// --------------------------------------------------------------------
// Calculates the thermal efficiency of a Brayton cycle
// based on the pressure ratio PR and gamma.
//
//                                  1
// Formula:   nt3 =  1 -  ----------------------
//                          PR^(gamma-1/gamma)
//
// --------------------------------------------------------------------
//
GasTurbine.prototype.nth3 = function (PR: number, gamma: number): number {
  const exponent: number = (gamma - 1) / gamma;
  const nt3: number = 1 - 1 / Math.pow(PR, exponent);
  return nt3;
};
//
//
//
// --------------------------------------------------------------------
// Calculates the work done on the gas with the compressor.
// ==>> isentropic compression process.
// Result in kJ/kg if cp in joules/(kg * K) and temperature in kelvin
//
// Formula:             Wcs = cp * (T2 – T1)
//
// --------------------------------------------------------------------
//
GasTurbine.prototype.Wcs = function (
  T1: number,
  T2: number,
  cp: number
): number {
  const Wcs: number = cp * (T2 - T1);
  return Wcs;
};
//
//
//
// --------------------------------------------------------------------
// Calculates the real work done on the gas through the compressor.
// ==>> adiabatic compression process.
// Result in kJ/kg if cp in joules/(kg * K) and temperature in kelvin
//
//                         cp * (T2 – T1)
// Formula:     Wcr =   --------------------
//                              nc
//
// --------------------------------------------------------------------
//
GasTurbine.prototype.Wcr = function (
  T1: number,
  T2: number,
  cp: number,
  nc: number
): number {
  const Wcr: number = (cp * (T2 - T1)) / nc;
  return Wcr;
};

//
//
//
// --------------------------------------------------------------------
// Calculates the added heat (by heat exchanger).
// ==>> adiabatic compression process.
// Result in kJ/kg if cp in joules/(kg * K) and temperature in kelvin
//
//                                     cp * (T2 – T1)
// Formula: Qadd =  cp * (T3 – T1) -  ----------------
//                                           nc
//
// --------------------------------------------------------------------
//
GasTurbine.prototype.Qadd = function (
  T1: number,
  T2: number,
  T3: number,
  cp: number,
  nc: number
): number {
  const Wcr: number = (cp * (T2 - T1)) / nc;
  const Qadd: number = cp * (T3 - T1) - Wcr;
  return Qadd;
};
