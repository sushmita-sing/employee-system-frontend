import axios from "axios"; 

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/emp/save";

class EmployeeService{

    saveEmployee(employee){
        return axios.post(EMPLOYEE_API_BASE_URL, employee);
    }
}

export default new EmployeeService();