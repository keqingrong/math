import { times } from 'number-precision';
import { parseNumber, toFixedAdvanced, stripTrailingZeros } from './utils';

/**
 * 分转元，如果有小数默认保留两位小数
 * @example
 * cent2yuan(100); // '1'
 * cent2yuan(123); // '1.23'
 */
export const cent2yuan = (
  value: string | number,
  fixedDigits: number = 2
): string => {
  const numericalValue = parseNumber(value);
  if (!Number.isFinite(numericalValue)) {
    return '';
  }
  return stripTrailingZeros((numericalValue / 100).toFixed(fixedDigits));
};

/**
 * 元转分
 * @example
 * 33.8 * 100; // 3379.9999999999995
 * yuan2cent(33.8); // 3380
 */
export const yuan2cent = (value: string | number) => {
  return times(value, 100);
};

/**
 * 金额加法，加完后如果有小数保留两位小数
 * @example
 * 587.99 + 337.58; // 925.5699999999999
 * addYuan(587.99, 337.58); // '925.57'
 */
export const addYuan = (a: string | number, b: string | number): string => {
  return cent2yuan(yuan2cent(a) + yuan2cent(b));
};

/**
 * 金额减法，减完后如果有小数保留两位小数
 * @example
 * 587.99 - 337.58; // 250.41000000000003
 * subYuan(587.99, 337.58); // '250.41'
 */
export const subYuan = (a: string | number, b: string | number): string => {
  return cent2yuan(yuan2cent(a) - yuan2cent(b));
};

/**
 * 计算折扣金额，始终保留两位小数
 * @param price 单价，单位元，最多两位小数
 * @param discount 折扣，如 8折、8.5折，最多一位小数
 * @example
 * calculateDiscountedPrice(1000, 8); // '800.00'
 * calculateDiscountedPrice(998, 8.8); // '888.22'
 */
export const calculateDiscountedPrice = (
  price: string | number,
  discount: string | number
): string => {
  const numericalPrice = parseNumber(price);
  const numericalDiscount = parseNumber(discount);
  const discountedPrice = (numericalPrice * numericalDiscount * 1000) / 10000;
  return toFixedAdvanced(discountedPrice, 2, 'ceil');
};

/**
 * 计算折扣，如果有小数默认保留一位小数
 * @param price 单价，单位元，最多两位小数
 * @param discountedPrice 折扣金额，单位元，最多两位小数
 * @example
 * calculateDiscount(1000, 800); // '8'
 * calculateDiscount(1000, 888); // '8.9'
 */
export const calculateDiscount = (
  price: string | number,
  discountedPrice: string | number
): string => {
  const numericalPrice = parseNumber(price);
  const numericalDiscountedPrice = parseNumber(discountedPrice);
  const discount = (numericalDiscountedPrice * 1000) / (numericalPrice * 100);
  return stripTrailingZeros(toFixedAdvanced(discount, 1, 'ceil'));
};
