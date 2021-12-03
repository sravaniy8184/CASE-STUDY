import React, {Component} from "react";

import axios from "axios";



class Feedback extends Component{

    constructor() {

        super()

        this.state= {

            p_id:''

       

        }

        this.handleClick = this.handleClick.bind(this)

    }



    handleClick() {

        axios.get('http://localhost:8080/feedbacks')

        .then(response => this.setState({username: response.data.p_id}))  

    }



    render() {

        return(

            <div>

                <button className='button' onClick={this.handleClick}>Feedback Details</button>

                <p>{this.state.p_id}</p>

            </div>

        )

    }

}

export default Feedback