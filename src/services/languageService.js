import axios from "axios";

export default class Language{
    add(employeeId,language){
        axios.post("http://localhost:8080/api/languages/add?employeeId="+employeeId,language)
    }
}