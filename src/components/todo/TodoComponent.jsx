import { Container,Row,Col, Button } from "react-bootstrap";
import {MdDelete} from 'react-icons/md';
import {AiFillEdit} from 'react-icons/ai';


const TodoComponent = ({todos,deleteTodo,updateTodo}) =>{

 
    

    return (
      <div>
        <Container >
            {todos.map((todo) => 
                <Row key={todo.id}>
                    <Col className='p-3'>{todo.description}</Col>
                    <Col className='p-3'>{todo.done.toString()}</Col>
                    <Col className='p-3'>{todo.targetDate.toString()}</Col>
                    <Col xs= {1} className='p-2'><Button className="btn-danger m-0 " onClick={()=>deleteTodo(todo.id)}><MdDelete/></Button></Col>
                    <Col xs={1} className='p-2'><Button className="btn-info m-0" onClick={()=>updateTodo(todo.id)}><AiFillEdit/></Button></Col>

                </Row>)
            }
            
        </Container>
      </div>
    )
}
 
export default TodoComponent;