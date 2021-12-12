import axios from 'axios';
const axiosInstant = axios.create({
  baseURL: `https://avl-frontend-exam.herokuapp.com/api/`
});
export default axiosInstant;
