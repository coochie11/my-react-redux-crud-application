import React, { Component } from 'react';

// import './App.css';

const App = () => (<Counter></Counter>)

class Counter extends Component{
  constructor(props){
    super(props)
    console.log(this.state)
    this.state={count: 0}
  }

  handlePlusButton = () => {
    console.log("handlePlusButton begins")
    this.setState({count: this.state.count +1 })
  }

  handleMinusButton = () => {
    console.log("handleMinusButton begins")
    this.setState({count: this.state.count -1 })
  }

  render(){
    return(
      <React.Fragment>
        <div>count:{this.state.count}</div>
        <button onClick={this.handlePlusButton}>fuck up</button>
        <button onClick={this.handleMinusButton}>fuck down</button>
      </React.Fragment>
    )
  }



}



export default App;
