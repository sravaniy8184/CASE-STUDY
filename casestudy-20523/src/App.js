import React from 'react';

//import BeforeLogin from './Pages/BeforeLogin';
//import DoctorProfile from './Pages/DoctorProfile';
//import  Login from './Pages/Login' 
import PatientProfile from './Pages/PatientProfile';
import SignUp from './Pages/SignUp'
//import LoginPage from './Pages/LoginPage ';
//import DoctorDetails from './Pages/DoctorDetails';
import Login from './Pages/Login';
import Doctor from './Pages/login111';

function App()
{
  return(

<div style={{ 
      backgroundImage: `url("https://cdn4.vectorstock.com/i/1000x1000/77/68/medical-background-with-doctor-vector-16887768.jpg")` 
    }}>
    <SignUp></SignUp>
    <Doctor></Doctor>
    
    <Login></Login>
      < PatientProfile></PatientProfile>
      
      
      </div>
  );

}

export default App;
