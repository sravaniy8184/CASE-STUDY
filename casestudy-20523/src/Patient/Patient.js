import React, {Component} from "react";

import axios from "axios";



class Patient extends Component{

    constructor() {

        super()

        this.state= {

            p_id:''

       

        }

        this.handleClick = this.handleClick.bind(this)

    }



    handleClick() {

        axios.get('http://localhost:8088/patients')

        .then(response => this.setState({userid: response.data.p_id}))  

    }



    render() {

        return(

            <div>

                <button classname='button' onClick={this.handleClick}> PatientDetails</button>

                <p>{this.state.p_id}</p>

            </div>

        )

    }

}

export default Patient