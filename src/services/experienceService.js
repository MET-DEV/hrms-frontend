import axios from "axios";

export default class ExperienceService{
    add(experience,employeeId){
        axios.post("http://localhost:8080/api/experience/add",experience,employeeId)
    }
}