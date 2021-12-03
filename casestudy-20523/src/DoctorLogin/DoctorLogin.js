import React, {Component} from "react";

import axios from "axios";



class DoctorLogin extends Component{

    constructor() {

        super()

        this.state= {

            d_id:''

       

        }

        this.handleClick = this.handleClick.bind(this)

    }



    handleClick() {

        axios.get('http://localhost:8088/doctorlogins')

        .then(response => this.setState({d_id: response.data.d_id}))

    }



    render() {

        return(

            <div>

                <button className='button' onClick={this.handleClick}> Doctorlogin Details</button>

                <p>{this.state.d_id}</p>
                

            </div>

        )

    }

}

export default DoctorLogin