import { ON_LOAD,ON_LOAD_SUCCESS } from "../action/types";
const reducer = (state = [], action) => {
    switch(action.type){
    case ON_LOAD:
        console.log('giffy')
        return [action.payload];
    case ON_LOAD_SUCCESS:
        console.log(action)
        return [action.payload];
    default:
       return state
    }
}
export default reducer;