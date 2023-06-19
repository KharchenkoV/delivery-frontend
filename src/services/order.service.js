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
    static getFormedOrders = () => {
        return axios.get(`${API_URL}formed`,  {headers: authHeader()})
    }  
    static getApprovedOrders = () => {
        return axios.get(`${API_URL}approved`,  {headers: authHeader()})
    } 
    static approveOrder = (id) => {
        return axios.put(`${API_URL}approve/${id}`, {},  {'Content-Type':'multipart/form-data', headers: authHeader()})
    }
    static sendOrder = (id) => {
        return axios.put(`${API_URL}send/${id}`, {},  {'Content-Type':'multipart/form-data', headers: authHeader()})
    }
    static cancelOrder = (id) => {
        return axios.put(`${API_URL}cancel/${id}`, {},  {'Content-Type':'multipart/form-data', headers: authHeader()})
    }
}