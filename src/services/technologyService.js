import axios from "axios";

export default class TechnologyService{
    add(employeeId,technology){
        axios.post("http://localhost:8080/api/tech/add?employeeId="+employeeId,technology)
    }
}