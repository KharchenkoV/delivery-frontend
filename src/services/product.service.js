import axios from "axios"
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/products"

export default class ProductService{
    static getAllProducts = () => {
        return axios.get(API_URL)
    }

    static getProductById = (id) => {
        return axios.get(`${API_URL}/${id}`)
    }

    static addToBucket = (id) => {
        return axios.get(`${API_URL}/${id}/bucket`, {headers: authHeader()})
    }

    static deleteFromBucket = (id) => {
        return axios.get(`${API_URL}/${id}/delete/product/from/bucket`, {headers: authHeader()})
    }

    static deleteAllProductFromBucket = (id) => {
        return axios.get(`${API_URL}/${id}/delete/all/product/from/bucket`, {headers: authHeader()})
    }
}