import axios from "axios";
import React, { Component } from "react";

export default class PatientExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      p_id: "",
      p_name: "",
      p_age: "",
      p_email:"",
      p_phoneno:"",
      p_gen:"",
      p_blood:""
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
      .post("http://localhost:8080/patients", this.state)
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
            PId:
            <input
              type="number"
              name="p_id"
              value={this.state.p_id}
              onChange={this.changeHandler}
            />
          </div>
          <br></br>
          <div>
            PName:
            <input
              type="text"
              name="p_name"
              value={this.state.p_name}
              onChange={this.changeHandler}
            />
          </div>
          <br></br>
          <div>
            PAge:
            <input
              type="number"
              name="p_age"
              value={this.state.p_age}
              onChange={this.changeHandler}
            />
          </div>
          <br>
          </br>
          <div>
            PEmail:
            <input
              type="text"
              name="p_email"
              value={this.state.p_email}
              onChange={this.changeHandler}
            />
          </div>
          <br></br>
          <div>
            PPhoneno:
            <input
              type="number"
              name="p_phoneno"
              value={this.state.p_phoneno}
              onChange={this.changeHandler}
            />
          </div>
          <br></br>
          <div>
            PGen:
            <input
              type="text"
              name="p_gen"
              value={this.state.p_gen}
              onChange={this.changeHandler}
            />
          </div>
          <br></br>
          <div>
            PBlood:
            <input
              type="text"
              name="p_blood"
              value={this.state.p_blood}
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
