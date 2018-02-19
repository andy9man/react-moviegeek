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
    movieData: [],
    // Expecting this data structure for movieData[]
    // {
    //   Title: "Batman",
    //   Year: "1989",
    //   Rated: "PG-13",
    //   Released: "23 Jun 1989",
    //   Runtime: "126 min",
    //   Plot: "The Dark Knight of Gotham City begins his war on crime with his first major enemy being the clownishly homicidal Joker.",
    //   Poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX300.jpg",
    //   Ratings:[{"Source":"Rotten Tomatoes","Value":"72%"}]
    // }
<<<<<<< HEAD
 
    loadingData: false,
    userId: 1
  
=======
    loadingData: false,
    uid: 1

>>>>>>> b10083587ce38cd65b1c64136b50e6ca67686479
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
