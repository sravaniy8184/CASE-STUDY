import React, {Component} from "react";

import axios from "axios";



class Diseases extends Component{

    constructor() {

        super()

        this.state= {

            dis_id:''

       

        }

        this.handleClick = this.handleClick.bind(this)

    }



    handleClick() {

        axios.get('http://localhost:8088/diseases')

        .then(response => this.setState({dis_id: response.data.dis_id}))  

    }



    render() {

        return(

            <div>

                <button classname='button' onClick={this.handleClick}> DiseasesDetails</button>

                <p>{this.state.dis_id}</p>

            </div>

        )

    }

}

export default Diseases