

export const gigasecond = (startDate) => {
  var startTime = Date.parse(startDate);

  var plusGiga = startTime + 1000000000000;

  var endTime = new Date(plusGiga);

  return endTime;

};
