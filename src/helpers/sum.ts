export function sum(a: number, b: number) {
  return a + b;
}

export const addArray = (numArray: Array<number>): number => {
  return numArray.reduce((a, c) => a + c, 0);
};
