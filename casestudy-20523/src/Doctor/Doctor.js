import React, {Component} from "react";

import axios from "axios";



class Doctor extends Component{

    constructor() {

        super()

        this.state= {

            username:''

       

        }

        this.handleClick = this.handleClick.bind(this)

    }



    handleClick() {

        axios.get('http://localhost:8080/doctors')

        .then(response => this.setState({username: response.data.dr_Name}))  

    }



    render() {

        return(

            <div>

                <button className='button' onClick={this.handleClick}>Get Doctor Details</button>

                <p>{this.state.username}</p>

            </div>

        )

    }

}

export default Doctor