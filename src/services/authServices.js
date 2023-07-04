import axios from "axios";
import toast from "react-toast"

const BACKEND_URL = process.env.REACT_BACKEND_URL;
const API_END_POINT= `${BACKEND_URL}//api/auth`;

export const createUser = async(userData) => {
    try {
        const response = await axios.post(`${API_END_POINT}/create_user`, userData);
        toast.success("User successfully created");
        console.log(response.data);
        // return toast.success("Successful");
    } catch (error) {
        toast.error(error)
    }
}