import config from '../config';
//ADD AUTH TOKEN TO POST CALL

export default {
  logWorkout(data){
    return fetch(`${config.API_ENDPOINT}/api/fitpad-data`,{
      method : "POST",
      headers : {"content-type":"application/json"},
      body : JSON.stringify({data})
    })
    .then(results => results.json())  
  }
}