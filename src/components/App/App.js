import React, { Component } from 'react';
import Cohort from '../Cohort/Cohort';
import StudentForm from "../StudentForm/StudentForm";
import people, { students } from '../../data/yearbook-data.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      staff: people.staff,
      students: people.students,
    }
    this.addStudent = this.addStudent.bind(this);
  }

  addStudent(studentInfo) {
    this.setState(prevState => {
    return {students: prevState.students.concat(studentInfo)}
    })
  }

  deleteStudent = (event) => {
    console.log(event.target.closest("article")); 
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
        <StudentForm students={this.state.students} onSubmit={studentInfo => this.addStudent(studentInfo)}/>
        <Cohort people={this.state.students} deleteStudent={this.deleteStudent}/>
      </main>
      </div>
    );
  }
}

export default App;
