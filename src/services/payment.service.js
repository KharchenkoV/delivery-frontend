import axios from "axios"
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/v1/payment"


export default class PaymentService{ 
    static checkout = ( paymentDto) => {
        return axios.post(API_URL, paymentDto , {headers: authHeader()}).then( res => {
            
            return res.data
        }
        )
    }
}