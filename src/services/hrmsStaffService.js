import axios from "axios";

export default class HrmsStaffService{
    add(hrmsStaff){
        return axios.post("http://localhost:8080/api/staff/add",hrmsStaff)
    }
    getById(id){
       return axios.get("http://localhost:8080/api/staff/getbyid?id="+id)
    }
}