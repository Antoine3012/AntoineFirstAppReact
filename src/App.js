//import logo from './logo.svg';
import React, { Component } from 'react'

import './App.css';
import Table from './Table';
import Form from './Form';

class MIS extends Component {
  removeClass = (index) => {
    const {classes} = this.state

    this.setState({
      classes: classes.filter((course, i) => {
        return i !== index
      }),
    })
  }

  handleSubmit = (additionalClass) => {
    this.setState({classes: [...this.state.classes, additionalClass]})
  }

  state = {
    classes: [
      {
        number: 'MIS 2402',
        name: 'Web Application Development',
      },
      {
        number: 'MIS 2502',
        name: 'Data and Analytics',
      },
      {
        number: 'MIS 3406',
        name: 'Cloud Architecture',
      },
      {
        number: 'MIS 3506',
        name: 'User Experience Design',
      },
      {
        number: 'MIS 3502',
        name: 'Web Service Programming',
      },
      {
        number: 'MIS 3535',
        name: 'Lead Global Digital Project',
      }, {
        number: 'MIS 4596',
        name: 'Managing Enterprise Cybersecurity',
      },
    ]
  }
  render() {
    const {classes} = this.state
    return (
      <div className="container">
        <h1>MIS classes I need to take</h1>
        <Form handleSubmit={this.handleSubmit}/>
        <Table schedule={classes} removeClass={this.removeClass}/>
      </div>
    )
  }
}


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default MIS;
