
        
        
import React from 'react';

// import React,{Component} from 'react';

import axios from 'axios';

//import DoctorHomePage from './DoctorHomePage';

//import {Route,Link , BrowserRouter as Router, Routes} from 'react-router-dom'



//import '../style1.css';

// import '../App.css';



class PatientProfile extends React.Component{



    constructor(props){

        console.log("component updated")

        super(props)

          this.state={p_id:'',

                      p_name:'',

                      p_age:'',

                      p_gender:'' ,
                      p_phoneno:'',
                      p_email:'',
                      p_bloodgroup:'',


                    }

    }
    handlep_id=(event)=>{

        this.setState({ p_id:event.target.value})

    }

    handlep_name=(event)=>{

        this.setState({ p_name:event.target.value})

    }

    handlep_age=(event)=>{

        this.setState({ p_age:event.target.value})



    }
    handlep_gen=(event)=>{

        this.setState({ p_gen:event.target.value})



    }


    handlep_phoneno=(event)=>{

        this.setState({ p_phoneno:event.target.value})



    }

    handlep_email=(event)=>{

        this.setState({ p_email:event.target.value})



    }
    handlep_blood=(event)=>{

        this.setState({ p_blood:event.target.value})



    }

    handleSubmit=(event)=>{

        //    console.log(`${this.state.d_name}`)
    
        //    console.log(`${this.state.d_specialization}`)
    
        //    event.preventDefault()
    
        event.preventDefault()
    
            console.log(this.state)
    
            axios
    
               .post('http://localhost:8090/patients',this.state)
    
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
    
                    <h2>Patient details</h2>
    
                    <div>
    
                        p_id:<input type='text' value={this.state.p_id} onChange={this.handlep_id}/>
    
                    </div>
    
                    <div>
    
                    p_name:<input type='text' value={this.state.p_name} onChange={this.handlep_name}/>
    
                    </div>
    
                    <div>
    
                    p_age:<input type='text' value={this.state.p_age} onChange={this.handlep_age}/>
    
                    </div>
    
                    <div>
    
    p_gen:<input type='text' value={this.state.p_gen} onChange={this.handlep_gen}/>

    </div>
                    <div>
    
                  p_phoneno:<input type='text' value={this.state.p_phoneno} onChange={this.handlep_phoneno}/>
    
                    </div>
    
                    <div>
    
                    p_email:<input type='text' value={this.state.p_email} onChange={this.handle_email}/>
    
                    </div><div>
    
    d_email:<input type='text' value={this.state.d_email} onChange={this.handled_email}/>

    </div>
    
                    <button type="submit" >Save</button>
    
                        
    
                         
    
                    </form>
    
            )
    
        }
    
    
    
    }
    
    export default PatientProfile
        
        

