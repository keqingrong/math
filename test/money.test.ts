import {
  cent2yuan,
  yuan2cent,
  addYuan,
  subYuan,
  calculateDiscountedPrice,
  calculateDiscount,
} from '../src';

test('cent2yuan', () => {
  expect(cent2yuan(100)).toBe('1');
  expect(cent2yuan(123)).toBe('1.23');
});

test('yuan2cent', () => {
  expect(yuan2cent(1)).toBe(100);
  expect(yuan2cent(1.23)).toBe(123);
  expect(yuan2cent(33.8)).toBe(3380);
});

test('addYuan', () => {
  expect(addYuan(587.99, 337.58)).toBe('925.57');
});

test('subYuan', () => {
  expect(subYuan(587.99, 337.58)).toBe('250.41');
});

test('calculateDiscountedPrice', () => {
  expect(calculateDiscountedPrice(5489.1, 1)).toBe('548.91'); // 548.91
  expect(calculateDiscountedPrice(5489.1, 9)).toBe('4940.19'); // 4940.19
  expect(calculateDiscountedPrice(5489.1, 9.1)).toBe('4995.09'); // 4995.081
  expect(calculateDiscountedPrice(5489.1, 9.2)).toBe('5049.98'); // 5049.972
  expect(calculateDiscountedPrice(5489.1, 9.3)).toBe('5104.87'); // 5104.863
  expect(calculateDiscountedPrice(5489.1, 9.4)).toBe('5159.76'); // 5159.754
  expect(calculateDiscountedPrice(5489.1, 9.5)).toBe('5214.65'); // 5214.645
  expect(calculateDiscountedPrice(5489.1, 9.6)).toBe('5269.54'); // 5269.536
  expect(calculateDiscountedPrice(5489.1, 9.7)).toBe('5324.43'); // 5324.427
  expect(calculateDiscountedPrice(5489.1, 9.8)).toBe('5379.32'); // 5379.318
  expect(calculateDiscountedPrice(5489.1, 9.9)).toBe('5434.21'); // 5434.209
  expect(calculateDiscountedPrice(5489.1, 10)).toBe('5489.10'); // 5489.1
});

test('calculateDiscount', () => {
  expect(calculateDiscount(5489.1, 548.91)).toBe('1'); // 0.1
  expect(calculateDiscount(5489.1, 4940.19)).toBe('9'); // 0.9
  expect(calculateDiscount(5489.1, 4995.09)).toBe('9.2'); // 0.9100016396130514
  expect(calculateDiscount(5489.1, 5049.98)).toBe('9.3'); // 0.9200014574338232
  expect(calculateDiscount(5489.1, 5104.87)).toBe('9.4'); // 0.9300012752545954
  expect(calculateDiscount(5489.1, 5159.76)).toBe('9.5'); // 0.9400010930753675
  expect(calculateDiscount(5489.1, 5214.65)).toBe('9.6'); // 0.9500009108961395
  expect(calculateDiscount(5489.1, 5269.54)).toBe('9.7'); // 0.9600007287169117
  expect(calculateDiscount(5489.1, 5324.43)).toBe('9.8'); // 0.9700005465376837
  expect(calculateDiscount(5489.1, 5379.32)).toBe('9.9'); // 0.9800003643584558
  expect(calculateDiscount(5489.1, 5434.21)).toBe('10'); // 0.9900001821792279
  expect(calculateDiscount(5489.1, 5489.1)).toBe('10'); // 1
});
