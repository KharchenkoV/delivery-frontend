import axios from "axios"
const API_URL = 'http://localhost:8080/api/v1/auth/'

export default class AuthenticationService{
    static login = (email, password) => {
        return axios.post(API_URL + 'authenticate', {
            email,
            password
        }).then( response => {
            if(response.data.token){
                localStorage.setItem('user', JSON.stringify(response.data))
            }
            return response.data
        })
    }

    static logout = () => {
        localStorage.removeItem('user')
    }

    static getCurrentUser = () => {
        return JSON.parse(localStorage.getItem('user'))
    }
}