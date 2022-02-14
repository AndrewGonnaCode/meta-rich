export const convertWeiToEther = (value) => {
  return value / 10 ** 18;
};

export function bigIntToNumber(value) {
  return value ? parseInt(value._hex, 16) : 0;
}
