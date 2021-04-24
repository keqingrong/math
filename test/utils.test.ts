import {
  toFixed,
  toFixedAdvanced,
  stripTrailingZeros,
  getDecimalDigits,
  subDecimal,
} from '../src';

test('toFixed', () => {
  expect(toFixed(0, 2)).toBe('0.00');
  expect(toFixed(0.014, 2)).toBe('0.01');
  expect(toFixed(0.015, 2)).toBe('0.01'); // 注意
  expect(toFixed(0.016, 2)).toBe('0.02');
  expect(toFixed(-0.014, 2)).toBe('-0.01');
  expect(toFixed(-0.015, 2)).toBe('-0.01'); // 注意
  expect(toFixed(-0.016, 2)).toBe('-0.02');
});

test('toFixedAdvanced', () => {
  expect(toFixedAdvanced(0, 2)).toBe('0.00');
  expect(toFixedAdvanced(0.014, 2)).toBe('0.01');
  expect(toFixedAdvanced(0.015, 2)).toBe('0.02');
  expect(toFixedAdvanced(0.016, 2)).toBe('0.02');
  expect(toFixedAdvanced(-0.014, 2)).toBe('-0.01');
  expect(toFixedAdvanced(-0.015, 2)).toBe('-0.02');
  expect(toFixedAdvanced(-0.016, 2)).toBe('-0.02');
});

test('stripTrailingZeros', () => {
  expect(stripTrailingZeros('1')).toBe('1');
  expect(stripTrailingZeros('100')).toBe('100');
  expect(stripTrailingZeros('1.00')).toBe('1');
  expect(stripTrailingZeros('1.00200')).toBe('1.002');
});

test('getDecimalDigits', () => {
  expect(getDecimalDigits('1')).toBe(0);
  expect(getDecimalDigits('1.1')).toBe(1);
  expect(getDecimalDigits('1.01')).toBe(2);
  expect(getDecimalDigits('1.001')).toBe(3);

  expect(getDecimalDigits(1)).toBe(0);
  expect(getDecimalDigits(1.1)).toBe(1);
  expect(getDecimalDigits(1.01)).toBe(2);
  expect(getDecimalDigits(1.001)).toBe(3);
});

test('subDecimal', () => {
  expect(subDecimal(587.99, 337.58)).toBe('250.41');
  expect(subDecimal(100, 8.888)).toBe('91.112');
  expect(subDecimal(100.00009, 8.888)).toBe('91.11209');
});
