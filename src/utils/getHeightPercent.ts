const getHeightPercent = (val: number, DEFAULT_TIME: number) =>
  Math.round((val * 100) / DEFAULT_TIME);

export default getHeightPercent;
