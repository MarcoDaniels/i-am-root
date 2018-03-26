import * as React from 'react'
import './App.css'

const logo = require('../logo.svg')

const ChannelsList = () => (
    <ul>
        <li>Channel 0</li>
        <li>Channel 1</li>
    </ul>
)

class App extends React.Component {
  render() {
    return (
      <div className="App">
          <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h2>Welcome to Apollo</h2>
          </div>
          <ChannelsList />
      </div>
    )
  }
}

export default App