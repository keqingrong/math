import { mb2gb } from '../src';

test('mb2gb', () => {
  expect(mb2gb(1000)).toBe('0.98');
  expect(mb2gb(1024)).toBe('1');
});
