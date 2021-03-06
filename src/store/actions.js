import axios from 'axios';
import { deconstructRatings } from '../components/helper'

const MOVIE_API_KEY = 'bb3cae6f'; //Anonymous
//const MOVIE_API_KEY = 'b99d98de'; //Dan's API
export const MOCKAPI_API_URL = 'http://5a8c94d2d6c8840012dde929.mockapi.io/api/v1/';
export const MOVIE_API = `http://www.omdbapi.com/?apikey=${MOVIE_API_KEY}&type=movie`;
export const DATA_STATUS_HANDLER = 'DATA_STATUS_HANDLER';
export const GET_RANKING = 'GET_RANKING';
export const GET_QUEUE = 'GET_QUEUE';
export const GET_WATCHED = 'GET_WATCHED';
export const GET_FLASHWATCH = 'GET_FLASHWATCH';
export const LOAD_TOPMOVIES = 'LOAD_TOPMOVIES';
export const LOAD_USER = 'LOAD_USER';

export const postFavorite = () => {
  return true
}

export const dataResultHandler = (actionType, stateObjectType, stateObjectResult) => {
  return {
    type: actionType,
    payload: {
      type: stateObjectType,
      result: stateObjectResult
    }
  }
}
export const getTopMovie = () => {
  return (dispatch, getState, url) => {
    dispatch(dataResultHandler(DATA_STATUS_HANDLER, 'loadingData', true));
    console.log(`Getting Top Movie Data... ${url}TopMovies`);
    axios.get(`${url}TopMovies`)
      .then(({ data }) => {
        dispatch({ type: LOAD_TOPMOVIES, payload: data });
      })
      .catch(error => {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          // console.log(error.response.data.message);
          // console.log(error.response.status);
          // console.log(error.response.headers);
          console.log(`Error Response: ${error.response}`);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(`Error Request: ${error.request}`);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log(`General Error: ${error.message}`);
        }
        console.log("Error has occured in loading data...");
        console.log(error);
        dispatch(dataResultHandler(DATA_STATUS_HANDLER, 'loadingError', true));
      })
  }
}


export const getRankings = () => {
  return (dispatch, getState, url) => {
    dispatch(dataResultHandler(DATA_STATUS_HANDLER, 'loadingData', true));
    const localUrl = `${url}user?sortBy=score&order=desc&page=1&limit=5`;
    console.log(`Getting getRankings Data... ${localUrl}`);

    axios.get(localUrl)
      .then(({ data: rankings }) => {
        dispatch({ type: GET_RANKING, payload: rankings });
      })
      .catch(error => {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(`Error Response: ${error.response}`);
        } else if (error.request) {
          // The request was made but no response was received
          console.log(`Error Request: ${error.request}`);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log(`General Error: ${error.message}`);
        }
        console.log("Error has occured in loading data...");
        console.log(error);
        dispatch(dataResultHandler(DATA_STATUS_HANDLER, 'loadingError', true));
      })
  }
}

export const getQueue = (userId) => {
  return (dispatch, getState, url) => {
    dispatch(dataResultHandler(DATA_STATUS_HANDLER, 'loadingQueueData', true));
    const localUrl = `${url}user/${userId}/queue`;
    console.log(`Getting getState Data... ${localUrl}`);

    axios.get(localUrl)
      .then(({ data: queue }) => {
        dispatch({ type: GET_QUEUE, payload: queue })
        dispatch(dataResultHandler(DATA_STATUS_HANDLER, 'loadingQueueData', false));

      })
      .catch(error => {
        if (error.response) {
          console.log(`Error Response: ${error.response}`);
        } else if (error.request) {
          console.log(`Error Request: ${error.request}`);
        } else {
          console.log(`General Error: ${error.message}`);
        }
        console.log("Error has occured in loading data...");
        console.log(error);
        dispatch(dataResultHandler(DATA_STATUS_HANDLER, 'loadingQueueData', false));
        dispatch(dataResultHandler(DATA_STATUS_HANDLER, 'loadingQueueDataError', true));

      })
  }
}

export const getWatched = (userId) => {
  return (dispatch, getState, url) => {
    dispatch(dataResultHandler(DATA_STATUS_HANDLER, 'loadingWatchedData', true));
    const localUrl = `${url}user/${userId}/watched`;
    console.log(`Getting getWatched Data... ${localUrl}`);

    axios.get(localUrl)
      .then(({ data: watched }) => {
        dispatch({ type: GET_WATCHED, payload: watched });
        dispatch(dataResultHandler(DATA_STATUS_HANDLER, 'loadingWatchedData', false));

      })
      .catch(error => {
        if (error.response) {
          console.log(`Error Response: ${error.response}`);
        } else if (error.request) {
          console.log(`Error Request: ${error.request}`);
        } else {
          console.log(`General Error: ${error.message}`);
        }
        console.log("Error has occured in loading data...");
        console.log(error);
        dispatch(dataResultHandler(DATA_STATUS_HANDLER, 'loadingWatchedError', true));
        dispatch(dataResultHandler(DATA_STATUS_HANDLER, 'loadingWatchedData', false));

      })
  }
}

export const getFlashWatch = () => {
  return (dispatch, getState, url) => {
    dispatch(dataResultHandler(DATA_STATUS_HANDLER, 'loadingData', true));
    console.log(`Getting getFlashWatch data... ${url}TopMovies`);
    axios.get(`${url}FlashMovie`)
    .then(({ data }) => {
      axios.get(`${MOVIE_API}&i=${data[0].imdbID}`)
        .then(({ data }) => {
          dispatch({ type: GET_FLASHWATCH, payload: data });
        })
        .catch(error => {
          if (error.response) {
            console.log(`Error Response: ${error.response}`);
          } else if (error.request) {
            console.log(`Error Request: ${error.request}`);
          } else {
            console.log(`General Error: ${error.message}`);
          }
          console.log("Error has occured in loading data...");
          console.log(error);
          dispatch(dataResultHandler(DATA_STATUS_HANDLER, 'loadingError', true));
        })
    })
    .catch(error => {
      if (error.response) {
        console.log(`Error Response: ${error.response}`);
      } else if (error.request) {
        console.log(`Error Request: ${error.request}`);
      } else {
        console.log(`General Error: ${error.message}`);
      }
      console.log("Error has occured in loading data...");
      console.log(error);
      dispatch(dataResultHandler(DATA_STATUS_HANDLER, 'loadingError', true));
    })
  }
}

export const postToWatched = (movieObj, userId, score) => {
  return (dispatch, getState, url) => {
    dispatch( dataResultHandler(DATA_STATUS_HANDLER, 'updatingWatchDataStatus', true) );
    const localUrl = `${url}user/${userId}/watched`;
    const localRating = deconstructRatings(movieObj.Ratings)
    const localObject = {
      Title: movieObj.Title,
      Year: movieObj.Year,
      Rated: movieObj.Rated,
      Runtime: movieObj.Runtime,
      Plot: movieObj.Plot,
      Poster: movieObj.Poster,
      Ratings: {
        Source: localRating.Source,
        Value: localRating.Value
      },
      imdbID: movieObj.imdbID
    }
    console.log(`Posting postToWatched data...${localUrl}`)
    axios.post(localUrl, localObject)
      .then( response => {
        dispatch( getWatched(userId) );
        dispatch( updateMovieScore(score, userId) );
        dispatch( dataResultHandler(DATA_STATUS_HANDLER, 'updatingWatchDataStatus', false) );

      })
      .catch( error => {
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(`Error Response: ${error.response}`);
        } else if (error.request) {
          // The request was made but no response was received
          console.log(`Error Request: ${error.request}`);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log(`General Error: ${error.message}`);
        }
        console.log("Error has occured in saving data...");
        console.log(error);
        dispatch( dataResultHandler(DATA_STATUS_HANDLER, 'updatingWatchDataStatus', false) );

    })
  }
}

export const postToQueue = (movieObj, user_id) => {
  return (dispatch, getState, url) => {
    dispatch( dataResultHandler(DATA_STATUS_HANDLER, 'updatingQueueDataStatus', true) );
    const localUrl = `${url}user/${user_id}/queue`;
    const localRating = deconstructRatings(movieObj.Ratings)
    const localObject = {
      Title: movieObj.Title,
      Year: movieObj.Year,
      Rated: movieObj.Rated,
      Runtime: movieObj.Runtime,
      Plot: movieObj.Plot,
      Poster: movieObj.Poster,
      Ratings: {
        Source: localRating.Source,
        Value: localRating.Value
      },
      imdbID: movieObj.imdbID
    }
    console.log(`Posting postToQueue data...${localUrl}`);

    axios.post(localUrl, localObject)
      .then( response => {
        console.log(response);
        dispatch( getQueue(user_id) );
        dispatch( dataResultHandler(DATA_STATUS_HANDLER, 'updatingQueueDataStatus', false) );
      })
      .catch( error => {
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(`Error Response: ${error.response}`);
        } else if (error.request) {
          // The request was made but no response was received
          console.log(`Error Request: ${error.request}`);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log(`General Error: ${error.message}`);
        }
        console.log("Error has occured in saving data...");
        console.log(error);
        dispatch( dataResultHandler(DATA_STATUS_HANDLER, 'updatingQueueDataStatus', false) );

    })
  }
}

export const deleteFromWatched = (movie_id, user_id, score) => {
  return (dispatch, getState, url) => {
    dispatch( dataResultHandler(DATA_STATUS_HANDLER, 'updatingWatchDataStatus', true) );
    const localUrl = `${url}user/${user_id}/watched/${movie_id}`;
    console.log(`Deleting deleteFromWatched data...${localUrl}`)

    axios.delete(localUrl)
      .then( (response) => {
        console.log(response);
        dispatch( getWatched( user_id ) );
        dispatch( updateMovieScore(score, user_id) );
        dispatch( dataResultHandler(DATA_STATUS_HANDLER, 'updatingWatchDataStatus', false) );
      })
      .catch( error => {
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(`Error Response: ${error.response}`);
        } else if (error.request) {
          // The request was made but no response was received
          console.log(`Error Request: ${error.request}`);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log(`General Error: ${error.message}`);
        }
        console.log("Error has occured in deleting data...");
        console.log(error);
        dispatch( dataResultHandler(DATA_STATUS_HANDLER, 'updatingWatchDataStatus', false) );
    })
  }
}

export const deleteFromQueue = (movie_id, user_id) => {
  return (dispatch, getState, url) => {
    dispatch( dataResultHandler(DATA_STATUS_HANDLER, 'updatingQueueDataStatus', true) );
    const localUrl = `${url}user/${user_id}/queue/${movie_id}`;
    console.log('Deleting deleteFromQueue data...')

    axios.delete(localUrl)
      .then( (response) => {
        console.log(response);
        dispatch( getQueue(user_id) );
        dispatch( dataResultHandler(DATA_STATUS_HANDLER, 'updatingQueueDataStatus', false) );
    })
      .catch( error => {
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(`Error Response: ${error.response}`);
        } else if (error.request) {
          // The request was made but no response was received
          console.log(`Error Request: ${error.request}`);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log(`General Error: ${error.message}`);
        }
        console.log("Error has occured in deleting data...");
        console.log(error);
        dispatch( dataResultHandler(DATA_STATUS_HANDLER, 'updatingQueueDataStatus', false) );
    })
  }
}

export const updateMovieScore = (score, userId) => {
  return (dispatch, getState, url) => {
    dispatch( dataResultHandler(DATA_STATUS_HANDLER, 'loadingData', true) );
    const localUrl = `${url}user/${userId}`;
    score = score < 0 ? 0 : score;
    const localObject = {
      score: score,
    }
    console.log(`Posting updateMovieScore data...${localUrl}`)
    axios.put(localUrl, localObject)
      .then( response => {
        dispatch( getUser(userId) );
      })
      .catch( error => {
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(`Error Response: ${error.response}`);
        } else if (error.request) {
          // The request was made but no response was received
          console.log(`Error Request: ${error.request}`);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log(`General Error: ${error.message}`);
        }
        console.log("Error has occured in saving data...");
        console.log(error);
        dispatch( {type: DATA_STATUS_HANDLER, payload: {type: 'loadingError', result: true}} );
    })
  }
}

export const getUser = userId => {
  return (dispatch, getState, url) => {
    console.log(`Get user data...${url}`)
    axios.get(`${url}user/${userId}`)
      .then( ({data}) => {
        dispatch({type: LOAD_USER, payload: data});
      })
      .catch( error => {
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(`Error Response: ${error.response}`);
        } else if (error.request) {
          // The request was made but no response was received
          console.log(`Error Request: ${error.request}`);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log(`General Error: ${error.message}`);
        }
        console.log("Error has occured in saving data...");
        console.log(error);
        dispatch( {type: DATA_STATUS_HANDLER, payload: {type: 'loadingError', result: true}} );
    })
  }
}
