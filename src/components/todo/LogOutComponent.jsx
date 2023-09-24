
import { Link } from "react-router-dom";

const LogoutComponent = () =>{
    return (
        <div className="LogoutComponent">
        <h1>You are Logged Out!!</h1>
        <div>
            Thanks for using our App. Come back soon!!
            <div>
            <Link to='/login'>Log In Again</Link>
            </div>
            
        </div>
        </div>
    )
    }
    
export default LogoutComponent;