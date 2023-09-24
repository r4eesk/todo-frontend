import { apiService } from "./apiClient"




// export const executeBasicauthenticationService = (token) => {
    // return apiService.get(`/basicauth`,{
    //     headers :{
    //         Authorization : token
    //     }
//     })
// }

export const registerNewUser = (user) => {
    return apiService.post('/users/register',user);
}

export const authenticate = (username,password) => {
    return apiService.post('/authenticate',{username,password});
}