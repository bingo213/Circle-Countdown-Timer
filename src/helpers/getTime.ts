export const getTime = (futureDate: Date) => {
  const time = Math.round(
    (futureDate.getTime() - new Date().getTime()) / 1000
  );
  return {
    days: Math.floor(time / (24 * 3600)),
    hours: Math.floor(time / 3600) % 24,
    minutes: Math.floor(time / 60) % 60,
    seconds: time % 60,
  };
};
