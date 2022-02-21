import React, { Component } from 'react'
export default class App extends Component {
  state={
    result:"",
  }
  render() {
    return (
      <>
        <div className='container'>
          <form>
            <input type="text" value={this.state.result} />
          </form>
        </div>
      </>
    )
  }
}
