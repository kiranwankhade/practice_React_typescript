// App.tsx
import {  Route,Routes } from 'react-router-dom';
import Events from '../Pages/Events/Events';
import SignUp from '../Pages/SignUp/SignUp';
import SignIn from '../Pages/SignIn/SignIn';
import SignInOTP from '../Pages/SignIn/SignInOTP';
import SignUpOTP from '../Pages/SignUp/SignUpOTP';


function AllRoutes() {
  return (
      <Routes>
        <Route path="/" Component={SignIn} />
        <Route path="/signin-otp" Component={SignInOTP} />
        <Route path="/signup" Component={SignUp} />
        <Route path='/signup-otp' Component={SignUpOTP}/>
        <Route path="/events" Component={Events} />
      </Routes>
  );
}

export default AllRoutes;
