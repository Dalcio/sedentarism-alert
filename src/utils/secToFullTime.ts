const secToFullTime = (sec: number) =>
  sec >= 3600
    ? new Date(sec * 1000).toISOString().substring(11, 19)
    : sec >= 60
    ? new Date(sec * 1000).toISOString().substring(14, 19)
    : sec;

export default secToFullTime;
