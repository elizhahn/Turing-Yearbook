import React, {Component} from "react"
import "./StudentForm.css"


class StudentForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: 0,
      name: '',
      quote: '', 
      superlative: '', 
      photo: ''

    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state);

  }

  handleChange(event) {
    const {name, value} = event.target;
    this.setState( {
      [name]: value
    })
    this.setState({id: (this.props.students[this.props.students.length -1].id) + 1})
  }

  render() {
    return(
    <form className="form-container" onSubmit={this.handleSubmit} >
      <label className="form-label" htmlFor="name">Name:</label>
      <input className="form-input" type="text" name="name" value={this.state.name} onChange={this.handleChange}/><br/>
      
      <label className="form-label" htmlFor="quote">Quote:</label>
      <input className="form-input" type="text" name="quote" value={this.state.quote} onChange={this.handleChange}/><br/>
      
      <label className="form-label" htmlFor="superlative">Most likely to:</label>
      <input className="form-input" type="text" name="superlative"value={this.state.superlative} onChange={this.handleChange}/><br/>

      <label className="form-label" htmlFor="photo">Photo:</label>
      <input className="form-input" type="text" name="photo" value={this.state.photo} onChange={this.handleChange}/><br/>
      
      <div>
        <button type="submit" className="form-button">Submit Student</button>
      </div>
    </form>
    )
  }
}

export default StudentForm