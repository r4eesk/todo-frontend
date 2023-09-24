
import { apiService } from './apiClient';





export const retriveAllTodosForUserApi = (username,token) => {
    return apiService.get(`/users/${username}/todos`,{
        headers :{
            Authorization : token
        }
    })
    
}

export const deleteTodoByIdApi = (id,token) =>{
    return apiService.delete(`/todos/${id}`,{
        headers :{
            Authorization : token
        }
    })
}


export const retrieveTodoByIdApi = (id,token) =>{
    return apiService.get(`/todos/${id}`,{
        headers :{
            Authorization : token
        }
    })
}

export const updateTodoByIdApi = (id,todo,token) =>{
    return apiService.put(`/todos/${id}`,todo,{
        headers :{
            Authorization : token
        }
    })
}

export const addTodoApi = (username,todo,token) =>{
    //console.log(`/users/${username}/todos`)
    return apiService.post(`/users/${username}/todos`,todo,{
        headers :{
            Authorization : token
        }
    })
}