import { getNumberOfDays, getFractionOfTotal } from './helpers'

describe('getNumberOfDays', () => {
  it('handles large week count', () => {
    expect(getNumberOfDays(24, 0)).toBe(24 * 7)
  })
})

describe('getFractionOfTotal', () => {
  it('returns 1 as the max', () => {
    expect(getFractionOfTotal(25, 0)).toBe(1)
  })
})
