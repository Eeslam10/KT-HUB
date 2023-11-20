import { Link } from "react-router-dom";


const Landing = () => {
    return ( 
        <>
            <h1>Landing</h1>
            <hr />
            <Link to="Sign-in">Sign-in</Link>
            <hr />
            <Link to="Sign-up">Sign-up</Link>

        </>
     );
}
 
export default Landing;