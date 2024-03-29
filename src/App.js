import React, { Component } from 'react'
import './App.css';
export default class App extends Component {
  state={
    result:"",
  }

  handleClick=(e)=>{
    var {result}=this.state;
    this.setState({
      result:result.concat(e.target.name)
    })
  }

  handleClear=()=>{
    var {result}=this.state;
    this.setState({
      result:""
    });
  }

  handlebackspace=()=>{
    var {result}=this.state;
    this.setState({
      result:result.slice(0,-1)
    });
  }

  handleEquals=()=>{
    var {result}=this.state;
    this.setState({
      result:eval(result)
    });
  }

  render() {
    return (
      <>
      <h1>My Calculator App</h1>
        <div className='container'>
          <form>
            <input type="text" value={this.state.result} />
          </form>

          <div className="keypad">
            <button onClick={this.handleClear} className="clear" id="high">Clear</button>            
            <button onClick={this.handlebackspace} className="backspace" id="high">C</button>
            <button name='/' onClick={this.handleClick} id="high">&divide;</button>
            <button name='7' onClick={this.handleClick}>7</button>
            <button name='8' onClick={this.handleClick}>8</button>
            <button name='9' onClick={this.handleClick}>9</button>
            <button name='*' onClick={this.handleClick} id="high">&times;</button>
            <button name='4' onClick={this.handleClick}>4</button>
            <button name='5' onClick={this.handleClick}>5</button>
            <button name='6' onClick={this.handleClick}>6</button>
            <button name='-' onClick={this.handleClick} id="high">&ndash;</button>
            <button name='1' onClick={this.handleClick}>1</button>
            <button name='2' onClick={this.handleClick}>2</button>
            <button name='3' onClick={this.handleClick}>3</button>
            <button name='+' onClick={this.handleClick} id="high">+</button>
            <button name='0' onClick={this.handleClick}>0</button>
            <button name='.' onClick={this.handleClick}>.</button>
            <button name='=' onClick={this.handleEquals} className="equals" id="high">=</button>
          </div>
        </div>
      </>
    )
  }
}
