import axios from "axios";
import React, { Component } from "react";

export default class DoctorLoginPostExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      d_id: "",
      password:""
     
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
      .post("http://localhost:8080/doctorlogins", this.state)
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
            DId:
            <input
              type="number"
              name="d_id"
              value={this.state.d_id}
              onChange={this.changeHandler}
            />
          </div>
          <br></br>
          <div>
            Password:
            <input
              type="text"
              name="passsword"
              value={this.state.password}
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
