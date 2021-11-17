# @keqingrong/math (WIP)

> Utilities for some frequently used calculation

[![npm version](https://img.shields.io/npm/v/@keqingrong/math.svg)](https://www.npmjs.com/package/@keqingrong/math)

## Installation

```sh
npm install @keqingrong/math
```

## Usage

```js
import {
  toFixedAdvanced,
  yuan2cent,
  calculateDiscountedPrice,
  calculateDiscount,
} from '@keqingrong/math';

(0.015).toFixed(2); // '0.01'
toFixedAdvanced(0.015, 2); // '0.02'

33.8 * 100; // 3379.9999999999995
yuan2cent(33.8); // 3380;

calculateDiscountedPrice(1000, 8); // '800.00'
calculateDiscountedPrice(998, 8.8); // '888.22'

calculateDiscount(1000, 800); // '8'
calculateDiscount(1000, 888); // '8.9'
```

## API

- `mb2gb()`
- `cent2yuan()`
- `yuan2cent()`
- `addYuan()`
- `subYuan()`
- `calculateDiscountedPrice()`
- `calculateDiscount()`
- `toFixed()`
- `toFixedAdvanced()`
- `stripTrailingZeros()`
- `getDecimalDigits()`
- `subDecimal()`

## License

MIT © Qingrong Ke
