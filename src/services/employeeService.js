import axios from "axios";

export default class EmployeeService{
    getEmployees(){
        return axios.get("http://localhost:8080/api/employees/getall")
    }
    getById(id){
        return axios.get("http://localhost:8080/api/employees/getbyid?id="+id)
    }
    add(employee){
       return axios.post("http://localhost:8080/api/employees/add",employee)
    }
    
}