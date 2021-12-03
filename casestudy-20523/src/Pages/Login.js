import React from 'react';

// import React,{Component} from 'react';

//import axios from 'axios';

//import DoctorHomePage from './DoctorHomePage';


import {Route,Link , BrowserRouter as Router, Routes} from 'react-router-dom'
import './Login1.css';

class Login extends React.Component{
 
 
 
    constructor(props){

        console.log("component updated")

        super(props)

          this.state={id:'',

                      password:''

                    }

    }
    handleduser_id=(event)=>{

        this.setState({ user_id:event.target.value})

    }

    handled_password=(event)=>{
        event.preventDefault()
        console.log(this.state)
    }
    render(){

        return(
            <div>
                 <head>  <link rel="stylesheet" href="Login1.css"/>     </head> 
            <form onSubmit={this.handleSubmit}>
                 
                <div class="container">
                    <div class="Avatar" ></div>

                <h2>Login Page</h2>

                <div>

                    userid:<input type='text' value={this.state.userid} onChange={this.handleuserid}/>

                </div>

                <div>

                password:<input type='text' value={this.state.password} onChange={this.handlepassword}/>

                </div>
                <button type ="submit">Login</button>
                
                </div>
                </form>
                </div>
        )
    }
}
export default Login;