
import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom';
import ErrorComponent from './ErrorComponent';
import FooterComponent from './FooterComponent';
import HeaderComponent from './HeaderComponent';
import ListTodosComponent from './ListTodosComponent'
import LoginComponent from './LoginComponent';
import LogoutComponent from './LogOutComponent';
import RegisterComponent from './RegisterComponent';
import AuthProvider, { useAuth } from './security/AuthContext';
import './TodoApp.css';
import TodoFormComponent from './TodoFormComponent';
import WelcomeComponent from './WelcomeComponent';
import { Container } from 'react-bootstrap';


const AuthenticatedRoute = ({children}) => {
    const authContext = useAuth()
    if(authContext.isAuthenticated)return children
    return <Navigate to="/login" />
    
}

const TodoApp = () => {
    return (    
        
            <div className="TodoApp d-flex flex-column min-vh-100" >
                <AuthProvider>
                    <BrowserRouter>
                        <HeaderComponent />
                            <Container>
                                <Routes>
                                    <Route path='/' element={<LoginComponent />} />
                                    <Route path='/login' element={<LoginComponent />} />
                                    <Route path='/welcome/:username' element={
                                        <AuthenticatedRoute>
                                            <WelcomeComponent />
                                        </AuthenticatedRoute>
                                    } />
                                    <Route path='/todos' element={
                                        <AuthenticatedRoute>
                                            <ListTodosComponent />
                                        </AuthenticatedRoute>
                                    } />
                                    <Route path='/logout' element={
                                        
                                            <LogoutComponent />
                                        
                                    } />
                                    <Route path='/todo/:id' element={
                                        <AuthenticatedRoute>
                                            <TodoFormComponent />
                                        </AuthenticatedRoute>
                                    } />
                                    <Route path='/register' element ={<RegisterComponent/>}/>
                                    <Route path='/error' element={<ErrorComponent />} />
                                    <Route path='*' element={<ErrorComponent />} />
                                </Routes>
                            </Container>
                        <FooterComponent/>
                    </BrowserRouter>
                </AuthProvider>
            </div>
        
    )
}

export default TodoApp;