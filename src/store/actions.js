import axios from 'axios';
import { deconstructRatings } from '../components/helper'

export const MOCKAPI_API_URL = 'http://5a8c94d2d6c8840012dde929.mockapi.io/api/v1/';
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
    dispatch(dataResultHandler(DATA_STATUS_HANDLER, 'loadingData', true));
    const localUrl = `${url}user/${userId}/queue`;
    console.log(`Getting getState Data... ${localUrl}`);

    axios.get(localUrl)
      .then(({ data: queue }) => {
        console.log("value of retrieve in getQueue")
        console.log(queue)
        setTimeout(() => { dispatch({ type: GET_QUEUE, payload: queue }) }, 1000);
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

export const getWatched = (userId) => {
  return (dispatch, getState, url) => {
    dispatch(dataResultHandler(DATA_STATUS_HANDLER, 'loadingData', true));
    const localUrl = `${url}user/${userId}/watched`;
    console.log(`Getting getWatched Data... ${localUrl}`);

    axios.get(localUrl)
      .then(({ data: watched }) => {
        console.log("value of retrieve in getWatched")
        console.log(watched)
        dispatch({ type: GET_WATCHED, payload: watched });
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

export const getFlashWatch = () => {
  return (dispatch, getState, url) => {
    dispatch(dataResultHandler(DATA_STATUS_HANDLER, 'loadingData', true));
    console.log(`Getting getFlashWatch data... ${url}TopMovies`);

    axios.get(`${url}TopMovies`)
      .then(({ data }) => {
        const select = Math.floor(Math.random() * data.length)
        const flashwatch = data[select]
        dispatch({ type: GET_FLASHWATCH, payload: flashwatch });
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

export const postToWatched = (movieObj, user_id) => {
  return (dispatch, getState, url) => {
    dispatch( dataResultHandler(DATA_STATUS_HANDLER, 'loadingData', true) );
    const localUrl = `${url}user/${user_id}/watched`;
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
        dispatch( getWatched(user_id) );
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

export const postToQueue = (movieObj, user_id) => {
  return (dispatch, getState, url) => {
    dispatch( dataResultHandler(DATA_STATUS_HANDLER, 'loadingData', true) );
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

export const deleteFromWatched = (movie_id, user_id) => {
  return (dispatch, getState, url) => {
    dispatch( dataResultHandler(DATA_STATUS_HANDLER, 'loadingData', true) );
    const localUrl = `${url}user/${user_id}/watched/${movie_id}`;
    console.log(`Deleting deleteFromWatched data...${localUrl}`)

    axios.delete(localUrl)
      .then( (response) => {
        console.log(response);
        dispatch( getWatched( user_id ) );
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
        dispatch( {type: DATA_STATUS_HANDLER, payload: {type: 'loadingError', result: true}} );
    })
  }
}

export const deleteFromQueue = (movie_id, user_id) => {
  return (dispatch, getState, url) => {
    dispatch( dataResultHandler(DATA_STATUS_HANDLER, 'loadingData', true) );
    const localUrl = `${url}user/${user_id}/queue/${movie_id}`;
    console.log('Deleting deleteFromQueue data...')

    axios.delete(localUrl)
      .then( (response) => {
        console.log(response);
        dispatch( getQueue(user_id) );
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
        dispatch( {type: DATA_STATUS_HANDLER, payload: {type: 'loadingError', result: true}} );
    })
  }
}