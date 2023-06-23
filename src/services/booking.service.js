import axios from "axios"
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/v1/booking"

export default class BookingService{
    static createBooking = (bookingCreateDto) => {
        return axios.post(`${API_URL}/create`, bookingCreateDto, {headers: authHeader()})
    }
}