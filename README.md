[![Codacy Badge](https://app.codacy.com/project/badge/Grade/0e1fd84a579e48228c549d6a1acb49a8)](https://app.codacy.com/gh/paulmuenzner/gas-turbine-formulas/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade)
[![TypeScript][ts-shield]](https://www.typescriptlang.org/)
[![GitHub repo size](https://img.shields.io/github/repo-size/paulmuenzner/gas-turbine-formulas) ](https://img.shields.io/github/languages/code-size/paulmuenzner/gas-turbine-formulas
)
[![paulmuenzner github][github-shield]][github-url] 
[![Contributors][contributors-shield]][contributors-url]

# Gas Turbine Formulas

A TypeScript library of common gas turbine formulas to be used for any energy or engineering-related calculations.

## Usage

This is not a package which can be installed via npm or yarn. It would be oversized for its actuall purpose. Simply extract your desired function and implement it in your project as needed. Rounding is not applied to the results which would degrade the accuracy of the final values; especially if used in combination with other formulas.

## Application example

```
import { GasTurbine } from "./index";
const gasTurbine = new GasTurbine();

// To calculate the real work done on the gas through the compressor:
gasTurbine.Wcr = (298, 419, 5.193, 0.84)
//returns 748.0392857142857
```

## Available Functions

### Input Variables

| Variable  | Description                                                     |
| --------- | --------------------------------------------------------------- |
| **T**     | Temperature                                                     |
| **cp**    | Specific heat capacity                                          |
| **Wc**    | Work done on the gas by the compressor                          |
| **Wt**    | Work done by gas turbine during expansion                       |
| **Qadd**  | Added heat                                                      |
| **PR**    | Compressor pressure ratio (PR = p2/p1)                          |
| **gamma** | ratio of specific heat at constant pressure and constant volume |
| **nc**    | adiabatic efficiency (dimensionless)                            |

### Thermal efficiency of a simple Brayton cycle for ideal gas

`gasturbine.nth1(T1, T2, T3, T4);`

`gasturbine.nth2(WT, WC, Qadd);`

Returns the dimensionless efficiency.

### Thermal efficiency of a Brayton cycle based on the pressure ratio PR and gamma

`gasturbine.nth3(PR, gamma);`

Returns the dimensionless efficiency.

### Work done on the gas with the compressor

`gasturbine.Wcs(T1, T2, cp);`

Returns the work done on the gas by the compressor for isentropic compression

### Real work done on the gas through the compressor

`gasturbine.Wcr(T1, T2, cp, nc);`

Returns the real work done by the gas by the compressor for adiabatic compression.

### Added heat (adiabatic compression process)

`gasturbine.Qadd(T1, T2, T3, cp, nc);`

Returns added heat in joules.

## Testing

The library is set up to use Jest for unit testing. Each gas turbine formula has a single test consisting of a number of sub-tests. The number of digits to check after the decimal point is limited to 10 for all test cases.

All test suites can be run with:
`npm test`

## Next steps

Where time permits, I will look to expand the gas turbine formula collection which is not 100% complete yet. However, it offers some relevant physical definitions used for gas turbines. Formulas can also be changed in a way that leaves the input and output value one desires.


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[github-shield]: https://img.shields.io/badge/paulmuenzner-black.svg?logo=github&logoColor=ffffff&colorB=000000
[github-url]: https://github.com/paulmuenzner
[ts-shield]: https://img.shields.io/badge/TypeScript-5.2.2-007ACC?logo=typescript&logoColor=white
[contributors-shield]: https://img.shields.io/github/contributors/paulmuenzner/gas-turbine-formulas.svg
[contributors-url]: https://github.com/paulmuenzner/gas-turbine-formulas/graphs/contributors

