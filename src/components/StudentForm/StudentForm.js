import React, {Component} from "react"
import "./StudentForm.css"


class StudentForm extends Component {
  constructor() {
    super()
    this.state = {
      id: 0,
      name: '',
      quote: '', 
      superlative: '', 
      photo: ''

    }
  }
  render() {
    return(
    <form className="form-container">
      <label className="form-label">Name:</label>
      <input className="form-input" type="text" value={this.state.name}/><br/>
      
      <label className="form-label">Quote:</label>
      <input className="form-input" type="text" value={this.state.quote}/><br/>
      
      <label className="form-label">Most likely to:</label>
      <input className="form-input" type="text" value={this.state.superlative}/><br/>
      
      <div>
        <button className="form-button">Submit Student</button>
      </div>
    </form>
    )
  }
}

export default StudentForm