import axios from "axios";

export default class ExperienceService{
    add(experience,employeeId){
        return axios.post("http://localhost:8080/api/experience/add="+employeeId,experience)
    }
    delete(experience){
        return axios.post("http://localhost:8080/api/experience/delete",experience)
    }
}