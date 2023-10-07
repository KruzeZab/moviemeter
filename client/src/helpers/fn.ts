// => 08, 09, 10
export const getTwoDigitIndex = (i: number) =>
  i < 10 ? '0' + i : String(i);
