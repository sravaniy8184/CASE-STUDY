import axios from "axios";
import React, { Component } from "react";

export default class SlotPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      s_id: "",
      d_id: "",
      p_id:"",
      dis_id:"",
      date:"",
      starttime:"",
      endtime:""
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
      .post("http://localhost:8080/slots", this.state)
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
            DisId:
            <input
              type="number"
              name="dis_id"
              value={this.state.dis_id}
              onChange={this.changeHandler}
            />
          </div>
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
            StartTime:
            <input
              type="text"
              name="startTime"
              value={this.state.startTime}
              onChange={this.changeHandler}
            />
          </div>
          <br></br>
          <div>
            EndTime:
            <input
              type="text"
              name="endTime"
              value={this.state.endTime}
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
