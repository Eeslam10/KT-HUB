import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing/Landing";
import Dashboard from "./Pages/dashboard/Dashboard";
import SignIn from "./Pages/Sign-in/Sign-in";
import SignUp from "./Pages/Sign-up/Sign-up";
import NewPassword from "./Pages/forgot-password/NewPassword";
import ForgotPassword from "./Pages/forgot-password/Forgot-password";

const App = () => {
  return ( 
    <>
      <BrowserRouter>
        <Routes> 

          <Route path="/" element={< Landing/>}/>
          <Route path="/Dashboard" element={< Dashboard/>}/>
          <Route path="/Sign-in" element={< SignIn/>}/>
          <Route path="/Sign-up" element={< SignUp/>}/>
          <Route path="/Forgot-password" element={< ForgotPassword/>}/>
          <Route path="/NewPassword" element={< NewPassword/>}/>

        </Routes>
      </BrowserRouter>
    </>
   );
}
 
export default App;