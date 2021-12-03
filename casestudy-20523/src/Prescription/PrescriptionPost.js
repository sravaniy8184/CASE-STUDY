import axios from "axios";
import React, { Component } from "react";

export default class PrescriptionPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      s_id: "",
      prescription:""
     
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }
  changeHandler(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  submitHandler(e) {
    e.preventDefault();
    console.log(this.state);
    axios
      .post("http://localhost:8080/prescriptions", this.state)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <div>
            SId:
            <input
              type="number"
              name="s_id"
              value={this.state.s_id}
              onChange={this.changeHandler}
            />
          </div>
          <br></br>
          <div>
            Prescription:
            <input
              type="text"
              name="prescription"
              value={this.state.prescription}
              onChange={this.changeHandler}
            />
          </div>
          <br></br>
          
         
 <button>Submit</button>
        </form>
      </div>
    );
  }
}
