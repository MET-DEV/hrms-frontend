import axios from "axios";

export default class TechnologyService{
    add(technology){
        axios.post("http://localhost:8080/api/tech/delete",technology)
    }
}