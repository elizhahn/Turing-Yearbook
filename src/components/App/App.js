import React, { Component } from 'react';
import Cohort from '../Cohort/Cohort';
import StudentForm from "../StudentForm/StudentForm";
import people from '../../data/yearbook-data.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      staff: people.staff,
      students: people.students,
    }
  }

  render() {
    return (
      <div className="App">
      <header className="App-header">
      <h1>Turing Yearbook</h1>
      </header>
      <main>
        <h2 className="title">STAFF</h2>
        <Cohort people={this.state.staff}/>
        <h3 className="title">STUDENTS</h3>
        <Cohort people={this.state.students}/>
      </main>
      </div>
    );
  }
}

export default App;
