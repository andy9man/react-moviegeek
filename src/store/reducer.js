//import { SOME_ACTION } from './actions'
import { DATA_STATUS_HANDLER, GET_RANKING } from './actions'

// const CreateUid = () => {
//     // Math.random should be unique because of its seeding algorithm.
//     // Convert it to base 36 (numbers + letters), and grab the first 9 characters
//     // after the decimal.
//     return Math.random().toString(36).substr(2, 15);
//  };

const initialState = {
    rankingData: [],
    loadingData: false,
    uid: 1
  
}


export const reducer = (state = initialState, action) => {
    switch(action.type){
    //********* GET_RANKING *********
    case GET_RANKING:
    return {
      ...state,
      rankingData: action.payload,
      // news_source: [],
      loadingData: false
    }
    //********* DATA_STATUS_HANDLER *********
    case DATA_STATUS_HANDLER:
      return {
        ...state,
        [action.payload.type]: action.payload.result,
        displayAlert: action.payload.result
      }
        default:
            return state;
    }


}
