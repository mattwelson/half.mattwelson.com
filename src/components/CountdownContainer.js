import React, { useState, useEffect } from 'react'
import getInterval, { HALF_MARATHON_DATE } from '../logic/getInterval'
import Countdown from './Countdown'
import './countdown.css'

const useHalfMarathonInterval = () => {
  const [halfInterval, setHalfInterval] = useState(getInterval())
  useEffect(() => {
    let interval = null
    interval = setInterval(() => {
      setHalfInterval(getInterval())
    }, 100000)
    return () => clearInterval(interval)
  })
  return halfInterval
}

function CountdownContainer({ test }) {
  const halfInterval = useHalfMarathonInterval()
  return (
    <div className="container">
      <div className="page">
        <h1>Queenstown Half Marathon</h1>
        <Countdown weeks={halfInterval.weeks} days={halfInterval.days} />
        <h3>{HALF_MARATHON_DATE.toFormat('dd MMMM yyyy')}</h3>
      </div>
      {test && (
        <>
          <div className="page">
            <h1>Faked - 13 weeks out</h1>
            <Countdown weeks={13} days={halfInterval.days} />
          </div>

          <div className="page">
            <h1>Faked - 7 weeks out</h1>
            <Countdown weeks={7} days={halfInterval.days} />
          </div>

          <div className="page">
            <h1>Faked - 1 week out</h1>
            <Countdown weeks={1} days={halfInterval.days} />
          </div>

          <div className="page">
            <h1>Faked - 4 days out</h1>
            <Countdown weeks={0} days={4} />
          </div>

          <div className="page">
            <h1>Faked - day of</h1>
            <Countdown weeks={0} days={0} />
          </div>

          <div className="page">
            <h1>Faked - 4 days after</h1>
            <Countdown weeks={0} days={-4} />
          </div>
        </>
      )}
    </div>
  )
}

export default CountdownContainer
