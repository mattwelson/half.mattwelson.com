export const getNumberOfDays = (weeks, days) => weeks * 7 + days
export const getFractionOfTotal = (weeks, days, total = 24 * 7) =>
  Math.min(getNumberOfDays(weeks, days) / total, 1)
