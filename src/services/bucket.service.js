import axios from "axios"
import authHeader from "./auth-header"

const API_URL = "http://localhost:8080/api/bucket"

export default class BucketService{
    static getBucket = () => {
        return axios.get(API_URL, {headers: authHeader()})
    }

    static cleanBucket = () => {
        return axios.get(API_URL + "/clean", {headers: authHeader()})
    }
}