import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import login from './loginHelper'

const axiosInstance = axios.create({
    baseURL: process.env.SERVER_BASE_URL
  });

axiosInstance.interceptors.response.use(
response => {
    console.log("Operation Successful")
    return response
}, 
error => {
    // Check if it's an authentication error
    if (error.response.status === 401 || error.response.status === 403) {
        // Handle authentication errors
        console.error('Authentication error detected', error.response.status);  
    }
    return Promise.reject(error); // Return any error which is not an auth error
}
);


const createNewUser = async (newUser) => {
  const navigate = useNavigate(); // Initialize navigate hook

  try {
    const response = await axios.post(baseUrl, newUser);

    console.log(response);
    const token = response.data.token;

    if (response.status === 200 && token) {
      // Perform login logic
      login(token, response.data.user.username, 'Account logged in successfully!');

      // Redirect to dashboard or home page
      navigate('/dashboard'); // Replace '/dashboard' with your desired route
    } else {
      console.error('Error logging in:', response.data.message);
      alert(`Error logging in: ${response.data.message}`);
    }

    return { success: true, data: response.data, message: 'Operation Successful' };
  } catch (error) {
    console.log('Unable to create new user', error);
  }
};

export default {
   createNewUser
}