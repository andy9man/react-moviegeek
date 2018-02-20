import axios from 'axios';

export const API_URL = "";
// export const MOCKAPI_API_URL = 'http://5a8b1dc33d92490012370bcc.mockapi.io/user/'; //Paul's
export const MOCKAPI_API_URL = 'http://5a8b034f3d92490012370bb4.mockapi.io/user/'; //Dan's
export const DATA_STATUS_HANDLER = 'DATA_STATUS_HANDLER';
export const GET_RANKING = 'GET_RANKING';
export const GET_QUEUE = 'GET_QUEUE';
export const GET_WATCHED = 'GET_WATCHED';
export const GET_FLASHWATCH = 'GET_FLASHWATCH';

export const LOAD_TOPMOVIES = 'LOAD_TOPMOVIES'


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
    console.log(`Getting Data... ${url}`);
    axios.get(`http://5a8b07983d92490012370bba.mockapi.io/notes`)
      .then(({ data }) => {
        //setTimeout( () => { dispatch( {type: LOAD_DATA, payload: products} ) }, 1);
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
  let localUrl = MOCKAPI_API_URL + "?sortBy=score&order=desc&page=1&limit=5"

  return (dispatch, getState) => {
    dispatch(dataResultHandler(DATA_STATUS_HANDLER, 'loadingData', true));
    console.log(`Getting data... ${localUrl}`);

    axios.get(localUrl)
      .then(({ data: rankings }) => {
        setTimeout(() => { dispatch({ type: GET_RANKING, payload: rankings }) }, 1000);
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
  let localUrl = MOCKAPI_API_URL + userId + "/queue"

  return (dispatch, getState) => {
    dispatch(dataResultHandler(DATA_STATUS_HANDLER, 'loadingData', true));
    console.log(`Getting data... ${localUrl}`);

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
  let localUrl = MOCKAPI_API_URL + userId + "/watched"

  return (dispatch, getState) => {
    dispatch(dataResultHandler(DATA_STATUS_HANDLER, 'loadingData', true));
    console.log(`Getting data... ${localUrl}`);

    axios.get(localUrl)
      .then(({ data: watched }) => {
        console.log("value of retrieve in getWatched")
        console.log(watched)
        setTimeout(() => { dispatch({ type: GET_WATCHED, payload: watched }) }, 1000);
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
  let localUrl = "http://5a8b1dc33d92490012370bcc.mockapi.io/top50"

  return (dispatch, getState) => {
    dispatch(dataResultHandler(DATA_STATUS_HANDLER, 'loadingData', true));
    console.log(`Getting data... ${localUrl}`);

    axios.get(localUrl)
      .then(({ data }) => {
        console.log("value of date in getFlashWatch")
        console.log(data)
        let select = Math.floor(Math.random() * data.length)
        let flashwatch = data[select]
        setTimeout(() => { dispatch({ type: GET_FLASHWATCH, payload: flashwatch }) }, 1000);
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
  let localUrl = MOCKAPI_API_URL + "/1/watched"
  let localObject = {
    title: movieObj.title,
    year: movieObj.year,
    rated: movieObj.rated,
    released: movieObj.released,
    runtime: movieObj.runtime,
    plot: movieObj.plot,
    poster: movieObj.poster,
    ratings: {
      source: movieObj.ratings[0].source,
      value: movieObj.ratings[0].value
    }
  }

  return (dispatch, getState) => {
    dispatch( dataResultHandler(DATA_STATUS_HANDLER, 'loadingData', true) );
    console.log('Posting data...')

    axios.post(localUrl, localObject)
      .then( response => {
        console.log(response);
        setTimeout( () => { 
          // Call getWatched so the watched list is refreshed
          // dispatch( getWatched() )
          return true
        }, 1000);
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
  let localUrl = MOCKAPI_API_URL + "/1/queue"
  let localObject = {
    title: movieObj.title,
    year: movieObj.year,
    rated: movieObj.rated,
    released: movieObj.released,
    runtime: movieObj.runtime,
    plot: movieObj.plot,
    poster: movieObj.poster,
    ratings: {
      source: movieObj.ratings[0].source,
      value: movieObj.ratings[0].value
    }
  }

  return (dispatch, getState) => {
    dispatch( dataResultHandler(DATA_STATUS_HANDLER, 'loadingData', true) );
    console.log('Posting data...')

    axios.post(localUrl, localObject)
      .then( response => {
        console.log(response);
        setTimeout( () => { 
          // Call getQueue so the queue list is refreshed
          // dispatch( getQueue() )
          return true
        }, 1000);
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