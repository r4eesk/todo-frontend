import TodoComponent from "./TodoComponent"
import { Container,Row,Col, Button } from "react-bootstrap"
import {  deleteTodoByIdApi, retriveAllTodosForUserApi } from "./api/TodoApiService";
import { useEffect, useState } from "react";
import { useAuth } from "./security/AuthContext";
import {useNavigate} from 'react-router-dom';




const ListTodosComponent = () =>{

    const authContext = useAuth()
    const token = authContext.token

    const username = authContext.user

    const [todos,setTodos] = useState([])
    const [deleteMessage,setDeleteMesasage] = useState(false)

    const deleteTodo = (id) => {
        deleteTodoByIdApi(id,token)
          .then(
            () =>{
                refreshTodos()
                setDeleteMesasage(true)
                setTimeout(() => setDeleteMesasage(false),3000)
                

            }
          )
          .catch((error) => {
            authContext.logout()
        })
      }

    
    
    useEffect(
        () => refreshTodos(),[]
    )
    
    function refreshTodos(){
        retriveAllTodosForUserApi(username,token)
            .then((response) => setTodos(response.data))
            .catch((error) => {
                authContext.logout()
            })
    }

    function updateTodo(id){
        navigate(`/todo/${id}`)
    }

    const navigate = useNavigate()

    function addNewTodo(){
        navigate('/todo/-1')
    }
                

    return (
      <div className="ListTodosComponent">
        <h1>Things you want to do</h1>
        {deleteMessage&&<div className="alert alert-danger">Successfully deleted!!</div>}
        {!deleteMessage&&<br/>}
        <Container>
            <Row>
                
                <Col className='bg-dark text-white p-2'>Description</Col>
                <Col className='bg-dark text-white p-2'>Done</Col>
                <Col className='bg-dark text-white p-2'>Target Date</Col>
                <Col xs= {1} className='bg-dark text-white p-2'></Col>
                <Col xs= {1} className='bg-dark text-white p-2'></Col>
            </Row>
        </Container>
        <div>
            <TodoComponent todos={todos} deleteTodo={deleteTodo} updateTodo={updateTodo}/>
        </div>
        <div>
            <Button className='btn-success m-5' onClick={addNewTodo}>Add</Button>
        </div>
      </div>
    )
}

export default ListTodosComponent