import axios from "axios";
import { toast } from "react-toastify";

// const BACKEND_URL = process.env.REACT_BACKEND_URL;
const BACKEND_URL = "https://reisty-ap1.azurewebsites.net";
const API_END_POINT= `${BACKEND_URL}/api/auth`;

export const createUser = async(userData) => {
    try {
        const response = await axios.post(`${API_END_POINT}/create_user`, userData);
        toast.success("User successfully created");
        console.log(response.data);
        // return toast.success("Successful");
        return response.data;
    } catch (error) {
        toast.error(error)
    }
}