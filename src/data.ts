import { parseNumber, stripTrailingZeros } from './utils';

/**
 * 流量 MB 转 GB，如果有小数默认保留两位小数
 */
export const mb2gb = (
  value: string | number,
  fixedDigits: number = 2
): string => {
  const numericalValue = parseNumber(value);
  if (!Number.isFinite(numericalValue)) {
    return '';
  }
  return stripTrailingZeros((numericalValue / 1024).toFixed(fixedDigits));
};
