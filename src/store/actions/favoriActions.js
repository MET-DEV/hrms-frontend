export const ADD_TO_FAVORI="ADD_TO_FAVORI"
export const REMOVE_FROM_FAVORI="REMOVE_FROM_FAVORI"

export function addToFavori(jobAdd){
    return {
        type: ADD_TO_FAVORI,
        payload: jobAdd
    }
}
export function removeFromFavori(jobAdd){
    return {
        type: REMOVE_FROM_FAVORI,
        payload: jobAdd
    }
}