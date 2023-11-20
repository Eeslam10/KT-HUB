import { Link } from "react-router-dom";


const ForgotPassword = () => {
    return ( 
        <>
            <h1>Forgot Password</h1>
            <Link to="/NewPassword">Submit</Link>
            <hr />
            <Link to="/Sign-in">Cancel</Link>
        </>
     );
}
 
export default ForgotPassword;