// import React, { Component } from 'react';
import React from 'react';

// import './App.css';


// class App extends Component{
//   render(){
//     const dom = <h1 className="foo">hello</h1>;
//     return dom;

//   }

// }

const App = () => {

  const profiles = [
    {name: "Taro", age: "13"},
    {name: "hana", age: "143"},
    {name: "no name"}
  ]

  return (
    <div>
      {profiles.map((p, index) => {
        return <User name={p.name} age={p.age} key={index}/>
      })}

      {/* <User name="Hana" age="10" /> */}
    </div>
  )
}

const User = (props) => {
  return <div>you are {props.name} and {props.age}</div>
}

User.defaultProps = {
  age: 1
}

export default App;
