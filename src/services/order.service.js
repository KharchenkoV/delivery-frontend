import axios from "axios"
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/order/"

export default class OrderService{
    static createOrder = (orderCreateDto) => {
        return axios.post(`${API_URL}create`, orderCreateDto, {headers: authHeader()})
    }

    static getOrders = () => {
        return axios.get(`${API_URL}all`,  {headers: authHeader()})
    }

    static getOrderById = (id) => {
        return axios.get(`${API_URL}${id}`, {headers: authHeader()})
    }

    static getActiveOrdersForUser = () => {
        return axios.get(`${API_URL}active/for/user`,  {headers: authHeader()})
    } 
}