import React from 'react';

// import React,{Component} from 'react';

import axios from 'axios';

//import DoctorHomePage from './DoctorHomePage';

//import {Route,Link , BrowserRouter as Router, Routes} from 'react-router-dom'



//import '../style1.css';

// import '../App.css';



class DoctorProfile extends React.Component{



    constructor(props){

        console.log("component updated")

        super(props)

          this.state={d_id:'',

                      d_name:'',

                      d_specialization:'',

                      d_phoneno:'' ,

                      d_email:''

                    }

    }
    handled_id=(event)=>{

        this.setState({ d_id:event.target.value})

    }

    handled_name=(event)=>{

        this.setState({ d_name:event.target.value})

    }

    handled_specialization=(event)=>{

        this.setState({ d_specialization:event.target.value})



    }

    handled_phoneno=(event)=>{

        this.setState({ d_phoneno:event.target.value})



    }

    handled_email=(event)=>{

        this.setState({ d_email:event.target.value})



    }
    handleSubmit=(event)=>{

        //    console.log(`${this.state.d_name}`)
    
        //    console.log(`${this.state.d_specialization}`)
    
        //    event.preventDefault()
    
        event.preventDefault()
    
            console.log(this.state)
    
            axios
    
               .post('http://localhost:8090/doctors',this.state)
    
               .then(response =>{
    
                console.log(response)
    
               })
    
               .catch(error=>{
    
                   console.log(error)
    
               })
    
        }
        render(){

            return(
    
                <form onSubmit={this.handleSubmit}>
    
                    <h2>Provide your details</h2>
    
                    <div>
    
                        d_id:<input type='text' value={this.state.d_id} onChange={this.handled_id}/>
    
                    </div>
    
                    <div>
    
                    d_name:<input type='text' value={this.state.d_name} onChange={this.handled_name}/>
    
                    </div>
    
                    <div>
    
                    d_specialization:<input type='text' value={this.state.d_specialization} onChange={this.handled_specialization}/>
    
                    </div>
    
                    <div>
    
                  d_phoneno:<input type='text' value={this.state.d_phoneno} onChange={this.handled_phoneno}/>
    
                    </div>
    
                    <div>
    
                    d_email:<input type='text' value={this.state.d_email} onChange={this.handled_email}/>
    
                    </div>
    
                    <button type="submit" >Save</button>
    
                        <routes>
    
                           <link to="/DoctorHomePage"><button type="submit" >Submit</button></link>
    
                        </routes>
    
                         
    
                    </form>
    
            )
    
        }
    
    
    
    }
    
    export default DoctorProfile

