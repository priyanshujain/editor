import React, { Component } from 'react'
import Editor from './Editor'

class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="app-container">
        <Editor />
      </div>
    )
  }
}

export default App