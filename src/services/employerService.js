import axios from "axios";

export default class EmployerService{
    getById(id){
        return axios.get("http://localhost:8080/api/employers/getbyid?id="+id)
    }
}