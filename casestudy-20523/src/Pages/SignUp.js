import React, {Component} from "react";
//import Styler from './Pages/styler';

//import {Route,Link , BrowserRouter as Router, Routes} from 'react-router-dom'




class SignUp extends Component{
    render(){
        return(
            

           
                <div class="testbox">
  <h1>Registration Form</h1>

  <form action="/">
      

    <div class="accounttype">
      <input type="radio" value="None" id="radioOne" name="account" checked/>
      <label for="radioOne" class="radio" chec>Patient</label>
      <input type="radio" value="None" id="radioTwo" name="account" />
      <label for="radioTwo" class="radio">Doctor</label>
    </div>
  <div>
  <label id="registerr" for="name"><i class="registerr-page "></i></label>
  <input type="text" name="name" id="name" placeholder="Username" required/>
  <label id="registerr" for="name"><i class="registerr-page "></i></label>
  <input type="text" name="name" id="name" placeholder="Email" required/>

  <label id="registerr" for="name"><i class="registerr-page "></i></label>
  <input type="text" name="name" id="name" placeholder="Age" required/>
  <label id="registerr" for="name"><i class="registerr-page "></i></label>
  <input type="text" name="name" id="name" placeholder="Contact" required/>
  <label id="registerr" for="name"><i class="registerr-page "></i></label>
  <input type="text" name="name" id="name" placeholder="Specialization" required/>
  <label id="registerr" for="name"><i class="registerr-page "></i></label>
  <input type="text" name="name" id="name" placeholder="Blood Group" required/>
  <label id="registerr" for="name"><i class="registerr-page"></i></label>
  <input type="password" name="name" id="name" placeholder="Set Password" required/>
</div>
<br />  <div class="gender" >
    <br />Gender<input type="radio" value="None" id="male" name="gender" checked/>
    <label for="male" class="radio" chec>Male</label>
    <input type="radio" value="None" id="female" name="gender" />
    <label for="female" class="radio">Female</label>
   </div>
   <a href="#" class="button">Register</a>
   <p class="message">Back Login! <a href="login.html">Register</a></p> 
   </form></div>
   );
   }
   }
   export default SignUp
