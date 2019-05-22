import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

import { getFractionOfTotal } from '../logic/helpers'

import Congratulations from './Congratulations'
import GoodLuck from './GoodLuck'

const LENGTH_WEEKS = 24 // the length of the chart we are displaying
const LENGTH_HALF = 12 // just using this as its own var for flexibility

const Progress = styled.div`
  width: ${({ portion }) => `${portion * 100}%`};
  background-image: ${({ portion }) =>
    portion > 0.07
      ? `linear-gradient(to right, #00f260, #0575e6)`
      : 'linear-gradient(to right, #333333, #dd1818)'};
`

const CountdownChart = ({ weeks, days }) => (
  <div>
    <div className="chart__grid">
      <div className="chart__icon chart__icon--1">
        <FontAwesomeIcon icon="walking" size="lg" />
      </div>
      <div className="chart__icon chart__icon--2">
        <FontAwesomeIcon icon="running" size="lg" />
      </div>
      <div className="chart__icon chart__icon--3">
        <FontAwesomeIcon icon="medal" size="lg" />
      </div>
      <Progress
        className="chart__progress"
        portion={getFractionOfTotal(weeks, days)}
      />
      <div className="chart__underline" />
      <div className="chart__tick chart__tick--1" />
      <div className="chart__tick chart__tick--2" />
      <div className="chart__tick chart__tick--3" />
      <div className="chart__label chart__label--1">
        {`${LENGTH_WEEKS} weeks out`}
      </div>
      <div className="chart__label chart__label--2">
        {`${LENGTH_HALF} weeks out`}
      </div>
      <div className="chart__label chart__label--3" />
    </div>
  </div>
)

const Countdown = ({ weeks, days }) => {
  // check if the race has happened
  if (weeks < 0 || days < 0) return <Congratulations />
  // check if it's today!!!
  if (weeks === 0 && days === 0) return <GoodLuck />
  return (
    <div>
      <h2>{weeks ? `${weeks} weeks` : `${days} days`} to go</h2>
      <CountdownChart weeks={weeks} days={days} />
    </div>
  )
}

export default Countdown
