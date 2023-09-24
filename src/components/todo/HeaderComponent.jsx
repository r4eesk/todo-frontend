import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { RiTodoFill } from "react-icons/ri";
import { BiLogIn, BiLogOut } from "react-icons/bi";
import { BsList } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "./security/AuthContext";

const HeaderComponent = () => {
  const authContext = useAuth()

  const isAuthenticated = authContext.isAuthenticated

  const logout = () => {
    authContext.logout()
  }

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand as={Link} to="/todos">
          <RiTodoFill />
          MyTodos.com
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <BsList />
        </Navbar.Toggle>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "150px" }}
            navbarScroll
          >
            {isAuthenticated && <Nav.Link as={NavLink} to="/welcome/raeesk">Home</Nav.Link>}
            {isAuthenticated && <Nav.Link as={NavLink} to="/todos">Todos</Nav.Link>}

            
          </Nav>
          <Form className="d-flex">
            {isAuthenticated && <Button type="button" variant="outline-dark" as={Link} to="/logout" onClick={logout}>
              <BiLogOut />
              Log out
            </Button>}
          </Form>
          <Form className="d-flex">
            {!isAuthenticated &&<Button  variant="outline-dark" as={Link} to="/login">
              <BiLogIn />
              Log In
            </Button>}
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderComponent;
