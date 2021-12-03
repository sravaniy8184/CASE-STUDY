 import axios from "axios";
import React, { Component } from "react";

export default class DoctorExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      d_id: "",
      d_name: "",
      d_spcl: "",
      d_email:"",
      d_phoneno:""
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
      .post("http://localhost:8080/doctors", this.state)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
            <br></br>
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
            DName:
            <input
              type="text"
              name="d_name"
              value={this.state.d_name}
              onChange={this.changeHandler}
            />
          </div>
          <br></br>
          <div>
            PSpcl:
            <input
              type="text"
              name="d_spcl"
              value={this.state.d_spcl}
              onChange={this.changeHandler}
            />
          </div>
          <br></br>
          <div>
            PPhoneno:
            <input
              type="number"
              name="d_phoneno"
              value={this.state.d_phoneno}
              onChange={this.changeHandler}
            />
          </div>
          <br></br>
          <div>
            PEmail:
            <input
              type="text"
              name="d_email"
              value={this.state.d_email}
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
