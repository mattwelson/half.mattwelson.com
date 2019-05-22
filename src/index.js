import React from 'react'
import ReactDOM from 'react-dom'

import './util/fontAwesome'
import CountdownContainer from './components/CountdownContainer'
import Footer from './components/Footer'

import './styles.css'

function App() {
  return (
    <div className="App">
      <CountdownContainer test={false} />
      <Footer />
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
