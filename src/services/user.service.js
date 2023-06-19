import axios from "axios"
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/v1/user"

export default class UserService{
    static getUserById = (id) => {
        return axios.get(`${API_URL}/${id}`, {headers: authHeader()})
    }

    static getAllUsers = () => {
        return axios.get(`${API_URL}/all`, {headers: authHeader()})
    }
}