import axios from "axios";

export default class TechnologyService{
    add(technology,employeeId){
        axios.post("http://localhost:8080/api/cvheader/add",technology,employeeId)
    }
}