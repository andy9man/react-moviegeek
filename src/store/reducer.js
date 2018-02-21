//import { SOME_ACTION } from './actions'
import { DATA_STATUS_HANDLER, GET_RANKING, GET_QUEUE, GET_WATCHED, GET_FLASHWATCH, LOAD_TOPMOVIES, LOAD_USER } from './actions'



// const CreateUid = () => {
//     // Math.random should be unique because of its seeding algorithm.
//     // Convert it to base 36 (numbers + letters), and grab the first 9 characters
//     // after the decimal.
//     return Math.random().toString(36).substr(2, 15);
//  };

const initialState = {
  rankingData: [], //Participant rankings
  queueData: [], //Users movies they want to watch
  watchedData: [], //Users movies they HAVE watched
  flashWatchData: [], //Daily bonus movie
  ourTopMovies: [], //Our top movie choices
  // Expecting this data structure for movieData[]
  // {
  //   Title: "Batman",
  //   Year: "1989",
  //   Rated: "PG-13",
  //   Runtime: "126 min",
  //   Plot: "The Dark Knight of Gotham City begins his war on crime with his first major enemy being the clownishly homicidal Joker.",
  //   Poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX300.jpg",
  //   Ratings:[{"Source":"Rotten Tomatoes","Value":"72%"}]
  // }

  loadingData: false,
  userId: 1,
  //user: undefined
  user: {
    id: "1",
    createdAt: 1519176968,
    name: "Team Reaction",
    avatar: "https://raw.githubusercontent.com/rexxars/react-hexagon/HEAD/logo/react-hexagon.png",
    username: "reaction",
    password: "reaction"
  }
}


export const reducer = (state = initialState, action) => {
  switch (action.type) {
    //********* GET_RANKING *********
    case GET_RANKING:
      return {
        ...state,
        rankingData: action.payload,
        // news_source: [],
        loadingData: false
      }
    //********* GET_QUEUE *********
    case GET_QUEUE:
      console.log('made it to reducer GET_QUEUE')
      return {
        ...state,
        queueData: action.payload,
        loadingData: false
      }
    //********* GET_WATCHED *********
    case GET_WATCHED:
      return {
        ...state,
        watchedData: action.payload,
        loadingData: false
      }
      //********* GET_FLASHWATCH *********
    case GET_FLASHWATCH:
    return {
      ...state,
      flashWatchData: action.payload,
      loadingData: false
    }
    //********* DATA_STATUS_HANDLER *********
    case DATA_STATUS_HANDLER:
      return {
        ...state,
        [action.payload.type]: action.payload.result,
        displayAlert: action.payload.result
      }
    //********* LOAD_TOPMOVIES *********
    case LOAD_TOPMOVIES:
      return { ...state, movies: action.payload, loadingData: false, moviesLoadSuccess: true };
    //********* LOAD_USER *********
    case LOAD_USER:
      return { ...state, user: action.payload };
    //********* DEFAULT *********
    default:
      return state;
  }
}
