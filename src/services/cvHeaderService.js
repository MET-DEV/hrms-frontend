import axios from "axios";

export default class CvHeaderService{
    add(cvHeader,employeeId){
        return axios.post("http://localhost:8080/api/cvheader/add",cvHeader,employeeId)
    }
}