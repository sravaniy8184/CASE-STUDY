import React, {Component} from "react";

import axios from "axios";



class Prescription extends Component{

    constructor() {

        super()

        this.state= {

            s_id:'',
            prescription:''

       

        }

        this.handleClick = this.handleClick.bind(this)

    }



    handleClick() {

        axios.get('http://localhost:8080/prescriptions')

        .then(response => this.setState({s_id: response.data.s_id}) 
                                       )
    }



    render() {

        return(

            <div>

                <button classname='button' onClick={this.handleClick}> PrescriptionDetails</button>

                <p>{this.state.s_id}</p>
                <p>{this.state.prescription}</p>

            </div>

        )

    }

}

export default Prescription