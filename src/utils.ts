/**
 * 解析数值
 */
export const parseNumber = (value: string | number) => {
  return typeof value === 'number' ? value : parseFloat(value);
};

/**
 * 格式化小数位，默认保留两位小数
 * @example
 * toFixed(0); // '0.00'
 * toFixed(1.2345); // '1.23'
 */
export const toFixed = (
  value: string | number,
  fixedDigits: number = 2
): string => {
  const numericalValue = parseNumber(value);
  return numericalValue.toFixed(fixedDigits);
};

/**
 * 基于 `Math` 相关函数实现的 `toFixed`，看场景使用
 * @example
 * (0.015).toFixed(2); // '0.01'
 * toFixedAdvanced(0.015, 2); // '0.02'
 */
export const toFixedAdvanced = (
  value: string | number,
  fixedDigits: number = 2,
  mode: RoundingFnType = 'round'
): string => {
  const numericalValue = parseNumber(value);
  const roundingFn = roundingFnMap[mode];
  if (numericalValue >= 0) {
    const factor = 10 ** fixedDigits;
    return (roundingFn(numericalValue * factor) / factor).toFixed(fixedDigits);
  }
  return `-${toFixedAdvanced(-numericalValue)}`;
};

/**
 * 移除小数位末尾的零
 * @example
 * stripTrailingZeros('1.00'); // '1'
 * stripTrailingZeros('1.00200'); // '1.002'
 */
export const stripTrailingZeros = (value: string) => {
  if (!value.includes('.')) {
    return value;
  }
  const [integerPart, decimalPart] = value.split('.');
  const decimal = decimalPart.replace(/0+$/, '');
  return decimal.length > 0 ? `${integerPart}.${decimal}` : integerPart;
};

/**
 * 获取数字的小数位数
 * @example
 * getDecimalDigits('1'); // 0
 * getDecimalDigits('1.0'); // 1
 * getDecimalDigits('1.00'); // 2
 * getDecimalDigits('1.001'); // 3
 */
export const getDecimalDigits = (value: string | number): number => {
  const valueString = typeof value === 'number' ? value.toString(10) : value;
  if (valueString && valueString.includes('.')) {
    return (valueString.split('.')[1] || '').length;
  }
  return 0;
};

/**
 * 小数减法
 * @example
 * 587.99 - 337.58; // 250.41000000000003
 * subDecimal(587.99, 337.58); '250.41'
 */
export const subDecimal = (
  a: string | number,
  b: string | number,
  fixedDigits?: number
): string => {
  const numericalA = parseNumber(a);
  const numericalB = parseNumber(b);
  const maxDigits = Math.max(
    getDecimalDigits(numericalA),
    getDecimalDigits(numericalB)
  );
  const multiplier = 10 ** maxDigits;
  const difference =
    (numericalA * multiplier - numericalB * multiplier) / multiplier;
  if (Number.isFinite(fixedDigits)) {
    return stripTrailingZeros(difference.toFixed(fixedDigits));
  }
  return difference.toString(10);
};

export const roundingFnMap = {
  round: (x: number) => Math.round(x),
  floor: (x: number) => Math.floor(x),
  ceil: (x: number) => Math.ceil(x),
  trunc: (x: number) => Math.trunc(x),
};

export type RoundingFnType = keyof typeof roundingFnMap;
