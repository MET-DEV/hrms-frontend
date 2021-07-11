import axios from "axios";

export default class EmployeeCvService{
    getCv(){
        return axios.get("http://localhost:8080/api/cv/getAll")
    }
    getByEmployeeId(id){
        return axios.get("http://localhost:8080/api/cv/getbyemployeeid?id="+id)
    }
}