import { Field,  Formik,Form, ErrorMessage } from 'formik';
import { useState } from 'react';
import {Col, Container, Row, Button} from 'react-bootstrap';
import { useNavigate } from 'react-router';
import { registerNewUser } from './api/UserApiService';

const RegisterComponent = () => {

    const navigate = useNavigate()

    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [rePassword,setRePassword] = useState("");

    const [errorMessage,setErrorMessage] = useState(null);

    const signUp = (values) => {
        const user = {
            username : values.username,
            password : values.password,
            authority : "USER"
        }
        registerNewUser(user)
            .then(response => navigate('/login') )
            .catch(error => {
                if(error.code=="ERR_BAD_REQUEST") {
                    setErrorMessage("Username already exists!!")
                }
                else{
                    setErrorMessage("Internal error. Please try again!!")
                }
            })
    }

    const validate =(values) => {
        let errors ={}
        if(values.username.length<5){
            errors.username="Username should be atleast 5 characters"
        }
        if(values.username.includes(" ")){
            errors.username="Username shouldn't contain spaces"
        }
        if(values.password.length<6){
            errors.password="Password should be atleast 6 characters"
        }
        if(values.rePassword!==values.password){
            errors.rePassword="Those passwords didn’t match. Try again."
        }
        return errors
    }


    return(
        <Container>
            <h2>Sign Up</h2>
            <br/>
            {errorMessage&&<div className="alert alert-danger">{errorMessage}</div>}
            <Row>
                <Col md={{span: 6, offset: 3}}>
                    <Formik initialValues={{username,password,rePassword}}
                            onSubmit={signUp}
                            validate={validate}
                            >
                        {
                            (props) => (
                                <Form >
                                    <ErrorMessage
                                        name="username"
                                        component="div"
                                        className="alert alert-warning"
                                    />

                                    <ErrorMessage
                                        name="password"
                                        component="div"
                                        className="alert alert-warning"
                                    />

                                    <ErrorMessage
                                        name="rePassword"
                                        component="div"
                                        className="alert alert-warning"
                                    />
                                
                                    <Row className="form-group">
                                        <Col xs={3} className="col-form-label">Username</Col>
                                        <Col xs={9}>
                                            <Field type="text" className="form-control" name="username" />
                                        </Col>
                                    </Row>

                                    <Row className="form-group">
                                        <Col xs={3} className="col-form-label">Password</Col>
                                        <Col xs={9}>
                                            <Field type="password" className="form-control" name="password" />
                                        </Col>
                                    </Row>

                                    <Row className="form-group">
                                        <Col xs={3} className="col-form-label">Confirm Password</Col>
                                        <Col xs={9}>
                                            <Field type="password" className="form-control" name="rePassword"/>
                                        </Col>
                                    </Row>
                                    <br/>
                                    <div>
                                        <Button type="submit" className="btn-success">Sign Up</Button>
                                    </div>

                                    
                                </Form>
                                
                            )
                        }
                    </Formik>
                </Col>
            </Row>
        </Container>
    )
}

export default RegisterComponent;