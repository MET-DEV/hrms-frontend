import { toast } from "react-toastify";
import { ADD_TO_FAVORI, REMOVE_FROM_FAVORI } from "../actions/favoriActions";
import { favoriItems } from "../initialValues/favoriItems";

const initialState={
    favoriItems:favoriItems,
}

export default function favoriReducer(state=initialState,{type,payload}) {
    switch (type) {
        case ADD_TO_FAVORI:
           
            console.log(favoriItems)
            

           let jobAdd=state.favoriItems.find((f)=>f.jobAdd.id===payload.id)
           if (jobAdd) {
               toast.warning("Zaten Eklendi")
               return{
                   ...state
               }
           } else {
            
               return{
                   ...state,
                   favoriItems:[...state.favoriItems,{jobAdd:payload}]
               };

           }
                
                
                
            
        case REMOVE_FROM_FAVORI:
            return{
                ...state,
                favoriItems:state.favoriItems.filter((f)=>f.jobAdd.id!==payload.id),
            }
    
        default:
            return state;
    }
}