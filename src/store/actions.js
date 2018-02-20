import axios from 'axios';

export const API_URL = "";
export const MOCKAPI_API_URL = 'http://5a8b1dc33d92490012370bcc.mockapi.io/user/';
export const DATA_STATUS_HANDLER = 'DATA_STATUS_HANDLER';
export const GET_RANKING = 'GET_RANKING';
export const GET_QUEUE = 'GET_QUEUE';
export const GET_WATCHED = 'GET_WATCHED';

export const LOAD_TOPMOVIES='LOAD_TOPMOVIES'




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
  dispatch( dataResultHandler(DATA_STATUS_HANDLER, 'loadingData', true) );
  console.log(`Getting Data... ${url}`);
  axios.get(`http://5a8b07983d92490012370bba.mockapi.io/notes`)
  .then( ({data}) => {
  //setTimeout( () => { dispatch( {type: LOAD_DATA, payload: products} ) }, 1);
  dispatch( {type: LOAD_TOPMOVIES, payload: data});
  })
  .catch( error => {
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
  dispatch( dataResultHandler(DATA_STATUS_HANDLER, 'loadingError', true) );
  })
  }
  }


export const getRankings = () => {
  let localUrl = MOCKAPI_API_URL + "?sortBy=score&order=desc&page=1&limit=5"

  return (dispatch, getState) => {
    dispatch( dataResultHandler(DATA_STATUS_HANDLER, 'loadingData', true) );
    console.log(`Getting data... ${localUrl}`);

    axios.get(localUrl)
      .then( ({data: rankings}) => {
        setTimeout( () => { dispatch( {type: GET_RANKING, payload: rankings} ) }, 1000);
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
        console.log("Error has occured in loading data...");
        console.log(error);
        dispatch( dataResultHandler(DATA_STATUS_HANDLER, 'loadingError', true) );
    })
  }
}

export const getQueue = (userId) => {
  let localUrl = MOCKAPI_API_URL + userId + "/queue"

  return (dispatch, getState) => {
    dispatch( dataResultHandler(DATA_STATUS_HANDLER, 'loadingData', true) );
    console.log(`Getting data... ${localUrl}`);

    axios.get(localUrl)
      .then( ({data: queue}) => {
        console.log("value of retrieve in getQueue")
        console.log(queue)
        setTimeout( () => { dispatch( {type: GET_QUEUE, payload: queue} ) }, 1000);
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
        console.log("Error has occured in loading data...");
        console.log(error);
        dispatch( dataResultHandler(DATA_STATUS_HANDLER, 'loadingError', true) );
    })
  }
}

export const getWatched = (userId) => {
  let localUrl = MOCKAPI_API_URL + userId + "/watched"

  return (dispatch, getState) => {
    dispatch( dataResultHandler(DATA_STATUS_HANDLER, 'loadingData', true) );
    console.log(`Getting data... ${localUrl}`);

    axios.get(localUrl)
      .then( ({data: watched}) => {
        console.log("value of retrieve in getWatched")
        console.log(watched)
        setTimeout( () => { dispatch( {type: GET_WATCHED, payload: watched} ) }, 1000);
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
        console.log("Error has occured in loading data...");
        console.log(error);
        dispatch( dataResultHandler(DATA_STATUS_HANDLER, 'loadingError', true) );
    })
  }
}

// export const get = () => {
//   return (dispatch, getState, url) => {
//     dispatch( dataResultHandler(DATA_STATUS_HANDLER, 'loadingData', true) );
//     console.log(`Getting Data... ${url}`);

//     axios.get(`${url}`)
//       .then( ({data: /*products*/}) => {
//         //setTimeout( () => { dispatch( {type: LOAD_DATA, payload: products} ) }, 1);
//       })
//       .catch( error => {
//         if (error.response) {
//             // The request was made and the server responded with a status code
//             // that falls out of the range of 2xx
//             //  console.log(error.response.data.message);
//             //  console.log(error.response.status);
//             //  console.log(error.response.headers);
//             console.log(`Error Response: ${error.response}`);
//         } else if (error.request) {
//           // The request was made but no response was received
//           // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
//           // http.ClientRequest in node.js
//           console.log(`Error Request: ${error.request}`);
//         } else {
//           // Something happened in setting up the request that triggered an Error
//           console.log(`General Error: ${error.message}`);
//         }
//         console.log("Error has occured in loading data...");
//         console.log(error);
//         dispatch( dataResultHandler(DATA_STATUS_HANDLER, 'loadingError', true) );

//     })
//   }
// }

// export const edit = (id, obj) => {
//   return (dispatch, getState, url) => {
//     console.log(`Updating Data... ${id}`);
//     console.log(obj);
//     axios.put(`${url}/${id}`, obj)
//       .then( (response) => {
//         dispatch( {type: DATA_STATUS_HANDLER, payload: {type: 'editSuccess', result: true}} );
//       })
//       .catch( error => {
//         if (error.response) {
//             // The request was made and the server responded with a status code
//             // that falls out of the range of 2xx
//             //  console.log(error.response.data.message);
//             //  console.log(error.response.status);
//             //  console.log(error.response.headers);
//             console.log(`Error Response: ${error.response}`);
//         } else if (error.request) {
//           // The request was made but no response was received
//           // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
//           // http.ClientRequest in node.js
//           console.log(`Error Request: ${error.request}`);
//         } else {
//           // Something happened in setting up the request that triggered an Error
//           console.log(`General Error: ${error.message}`);
//         }
//         console.log("Error has occured in updating data...");
//         console.log(error);
//         dispatch( {type: DATA_STATUS_HANDLER, payload: {type: 'editError', result: true}} );
//     })
//   }
// }

// export const delete = (id) => {
//   return (dispatch, getState, url) => {
//     console.log(`Deleting Data... ${id}`);
//     axios.delete(`${url}/${id}`)
//       .then( (response) => {
//         dispatch( {type: DATA_STATUS_HANDLER, payload: {type: 'deleteSuccess', result: true}} );
//       })
//       .catch( error => {
//         if (error.response) {
//             // The request was made and the server responded with a status code
//             // that falls out of the range of 2xx
//             //  console.log(error.response.data.message);
//             //  console.log(error.response.status);
//             //  console.log(error.response.headers);
//             console.log(`Error Response: ${error.response}`);
//         } else if (error.request) {
//           // The request was made but no response was received
//           // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
//           // http.ClientRequest in node.js
//           console.log(`Error Request: ${error.request}`);
//         } else {
//           // Something happened in setting up the request that triggered an Error
//           console.log(`General Error: ${error.message}`);
//         }
//         console.log("Error has occured in deleteing data...");
//         console.log(error);
//         dispatch( {type: DATA_STATUS_HANDLER, payload: {type: 'deleteError', result: true}} );
//     })
//   }
// }

// export const add = (obj) => {
//   return (dispatch, getState, url) => {
//     console.log('Adding Data...');
//     console.log(obj);
//     axios.post(url, obj)
//       .then( response => {
//         console.log(response);
//         dispatch( {type: DATA_STATUS_HANDLER, payload: {type: 'addSuccess', result: true}} );
//       })
//       .catch( error => {
//         if (error.response) {
//             // The request was made and the server responded with a status code
//             // that falls out of the range of 2xx
//             //  console.log(error.response.data.message);
//             //  console.log(error.response.status);
//             //  console.log(error.response.headers);
//             console.log(`Error Response: ${error.response}`);
//         } else if (error.request) {
//           // The request was made but no response was received
//           // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
//           // http.ClientRequest in node.js
//           console.log(`Error Request: ${error.request}`);
//         } else {
//           // Something happened in setting up the request that triggered an Error
//           console.log(`General Error: ${error.message}`);
//         }
//         console.log("Error has occured in adding data...");
//         console.log(error);
//         dispatch( {type: DATA_STATUS_HANDLER, payload: {type: 'addError', result: true}} );
//     })
//   }
// }
