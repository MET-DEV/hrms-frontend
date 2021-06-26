import axios from "axios";

export default class JobAddService{
    getJobAd(){
        return axios.get("http://localhost:8080/api/jobad/getAll")
    }
    getJobAdDetail(id){
        console.log(id)
        return axios.get("http://localhost:8080/api/jobad/getbyid?id="+id)
    }
    getJobAdTrue(){
        return axios.get("http://localhost:8080/api/jobad/getbytrue")
    }
    getJobAdFalse(){
        return axios.get("http://localhost:8080/api/jobad/getbyfalse")
    }
    add(values){
        return axios.post("http://localhost:8080/api/jobad/add",values)
    }
    delete(values){
        return axios.post("http://localhost:8080/api/jobad/delete",values)
    }
    update(values){
        return axios.post("http://localhost:8080/api/jobad/update",values)
    }
}