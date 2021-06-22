import axios from "axios";

export default class JobAddService{
    getJobAd(){
        return axios.get("http://localhost:8080/api/jobad/getAll")
    }
    getJobAdDetail(id){
        console.log(id)
        return axios.get("http://localhost:8080/api/jobad/getbyid?id="+id)
    }
    add(values){
        return axios.post("http://localhost:8080/api/jobad/add",values)
    }
}