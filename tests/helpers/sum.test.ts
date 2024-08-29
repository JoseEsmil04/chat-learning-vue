import { describe, expect, test } from 'vitest';
import { addArray, sum } from '../../src/helpers/sum';

describe('sum function', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
});

describe('addArray function', () => {
  test('Reduce Array = 50', () => {
    const arr = [1, 2, 3, 5, 7, 32];

    const result = arr.reduce((a, b) => a + b, 0);

    expect(addArray(arr)).toBe(result);
  });

  test('Should return 0 if array is empty', () => {
    const arr = [] as Array<number>;

    expect(addArray(arr)).toBe(0);
  });
});
