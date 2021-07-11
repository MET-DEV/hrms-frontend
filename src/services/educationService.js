import axios from "axios";

export default class EducationService{
    add(education,employeeId){
        axios.post("http://localhost:8080/api/education/add="+employeeId,education)

    }
}