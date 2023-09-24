import {Container ,Button,Row,Col} from 'react-bootstrap';
import {  addTodoApi, retrieveTodoByIdApi, updateTodoByIdApi } from "./api/TodoApiService";
import { useParams,useNavigate} from 'react-router-dom';
import { useEffect, useState } from 'react';
import {Formik,Form,Field, ErrorMessage} from 'formik';
import { useAuth } from "./security/AuthContext";
import  './TodoFormComponent.css';




const TodoFormComponent = () =>{

    const authContext = useAuth()
    const token = authContext.token

    const {id} = useParams()

    const [description,setDescription] = useState('')
    const [done,isDone] = useState(false)
    const [targetDate,setTargetDate] = useState('')
    const [userId,setuserId] = useState(authContext.user)

    const naviagate = useNavigate()

    useEffect(
        () => retrieveTodo(),
        [id]
    )

    function retrieveTodo(){
        if(id!=-1){
            retrieveTodoByIdApi(id,token)
            .then(response => {
                setDescription(response.data.description)
                isDone(response.data.done)
                setTargetDate(response.data.targetDate)
                setuserId(response.data.user.username)
            })
            .catch(error => console.log(error))
        }
        else{
            setuserId(authContext.user)

        }
        
    }

    function onSubmit(values){
        const todo = {
            user:userId,
            description:values.description,
            targetDate:values.targetDate,
            done:values.done
        }

        
        if(id!=-1){
            todo.id=parseInt(id)
            updateTodoByIdApi(id,todo,token)
                .then(response => naviagate('/todos'))
                .catch(error => console.log(error))
        }
        else{
            //console.log(userId,todo)
            addTodoApi(userId,todo,token)
            .then(response => naviagate('/todos'))
            .catch(error => console.log(error))
        }
        
    }

    function validate(values){
        let errors = {}
        if(values.description.length<5){
            errors.description="Enter atleast 5 characters"
        }
        if(values.targetDate===null||values.targetDate==''){
            errors.description="Enter a target date"
        }
        return errors
    }

    return(
        <Container>
            <h1>Enter Todo Details</h1>
            <Row>
                <Col md={{span: 6, offset: 3}}>
            
                    <Formik initialValues={{description,targetDate,done}}
                            enableReinitialize={true}
                            onSubmit={onSubmit}
                            validate={validate}
                            validateOnBlur={false}
                            validateOnChange={false}
                    >
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage
                                        name="description"
                                        component="div"
                                        className="alert alert-warning"
                                    />

                                    <ErrorMessage
                                        name="targetDate"
                                        component="div"
                                        className="alert alert-warning"
                                    />

                                    <fieldset className="form-group">
                                        <label>Description</label>
                                        <Field type="text" className="form-control" name="description"/>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Target Date</label>
                                        <Field type="date" className="form-control" name="targetDate"/>
                                    </fieldset>
                                    <fieldset className="form-check">
                                        
                                        <Field type="checkbox" className="form-check-input" name="done" id="done" />
                                        <label htmlFor="done" className="form-check-label">Is it Done?</label>
                                        
                                    </fieldset>
                                    <div>
                                        <Button type="submit">Save</Button>
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

export default TodoFormComponent;