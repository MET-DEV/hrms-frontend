import axios from "axios";

export default class ContactService{
    getContact(){
        axios.get("http://localhost:8080/api/contact/getall")
    }
    add(contact,employeeId){
        axios.post("http://localhost:8080/api/contact/add?employeeId="+employeeId,contact)
    }
}