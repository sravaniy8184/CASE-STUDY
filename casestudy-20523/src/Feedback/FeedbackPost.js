import axios from "axios";
import React, { Component } from "react";

export default class FeedbackPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      f_id: "",
      feedback: "",
      d_id: "",
      p_id:"",
      date:"",
      time:""
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
      .post("http://localhost:8080/feedbacks", this.state)
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
            FId:
            <input
              type="number"
              name="f_id"
              value={this.state.f_id}
              onChange={this.changeHandler}
            />
          </div>
          <br></br>
          <div>
            Feedback:
            <input
              type="text"
              name="feedback"
              value={this.state.feedback}
              onChange={this.changeHandler}
            />
          </div>
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
          <br>
          </br>
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
            Date:
            <input
              type="text"
              name="date"
              value={this.state.date}
              onChange={this.changeHandler}
            />
          </div>
          <br></br>
          <div>
            Time:
            <input
              type="text"
              name="time"
              value={this.state.time}
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
