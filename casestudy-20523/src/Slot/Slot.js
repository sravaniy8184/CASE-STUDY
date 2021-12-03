import React, {Component} from "react";

import axios from "axios";



class Slot extends Component{

    constructor() {

        super()

        this.state= {

            s_id:''

       

        }

        this.handleClick = this.handleClick.bind(this)

    }



    handleClick() {

        axios.get('http://localhost:8080/slots ')

        .then(response => this.setState({userid: response.data.s_id}))  

    }



    render() {

        return(

            <div>

                <button classname='button' onClick={this.handleClick}> Slot Details</button>

                <p>{this.state.s_id}</p>

            </div>

        )

    }

}

export default Slot