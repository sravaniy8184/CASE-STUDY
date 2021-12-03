import axios from "axios";
import React, { Component } from "react";

export default class DiseasesPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dis_id: "",
      dis_name:""
     
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
      .post("http://localhost:8080/diseases", this.state)
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
            DisId:
            <input
              type="number"
              name="dis_id"
              value={this.state.dis_id}
              onChange={this.changeHandler}
            />
          </div>
          <br></br>
          <div>
            DisName:
            <input
              type="text"
              name="dis_name"
              value={this.state.dis_name}
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
