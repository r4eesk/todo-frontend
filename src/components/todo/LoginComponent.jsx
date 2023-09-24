import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./security/AuthContext";
import {Button, Col, Image, Row} from 'react-bootstrap'

const LoginComponent = () => {
  const [username, setUsername] = useState("raeesk");
  const [password, setPassword] = useState("raeesk");
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const navigate = useNavigate();

  const authContext = useAuth()

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  async function handleSubmit () {
    if (await authContext.login(username,password)) {
      navigate(`/welcome/${username}`);
    } else {
      setShowErrorMessage(true);    
    }
  }

  return (
    <div className="container" >
      {showErrorMessage && (
        <div className="errorMessage">Authentication Failed!!</div>
      )}
      <div className="row">
        <div className="col-md-6 col-lg-5  d-none d-md-block" >
          <Image src="/just-keep-going.jpg" fluid />
        </div>
        <div className="col-lg-4 col-md-6 col-sm-8 offset-sm-2 offset-md-0 offset-lg-3 border"
        style={{backgroundImage:
          'url("/login-background-2.png")',  backgroundSize: "cover",  backgroundRepeat: "no-repeat",
       }} >
          <div className="p-3">
            <div className="LoginForm">
              <div className="form-group">
                <label>User name</label>
                
                <input
                  className="form-control"
                  type="text"
                  name="username"
                  value={username}
                  onChange={handleUsernameChange}
                />
                  
                
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  className="form-control"
                  type="password"
                  name="password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>
              <div>
                <Button type="button" className="btn btn-primary" onClick={handleSubmit}>
                  Login
                </Button>
              </div>
              <br/>
              <br/>
              <div>
                Don't have an account?<br/>
                <Link to="/register">Sign up</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
