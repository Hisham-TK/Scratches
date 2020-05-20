import { multiply } from './multiply';

test('multiply', () => {
	it('1 * 2 = 2', () => expect(multiply(1, 2)).toBe(2));
	it('2 * 3 = 6', () => expect(multiply(2, 3)).toBe(6));
	it('4 * 2 = 8', () => expect(multiply(4, 2)).toBe(8));
});
