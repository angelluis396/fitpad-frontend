import TokenService from './token-service';
import config from '../config';

const FitpadApiService = {
  getWorkouts () {
    return fetch (`${config.API_ENDPOINT}/fitpadData`, {
      method: 'GET',
      headers: {
        'content-type' : 'application/json',
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    })
    .then( res => 
      !res.ok ? res.json ().then(e => Promise.reject(e)) : res.json()  
    );
  },
  getWorkout(fitpadDataId) {
    return fetch(`${config.API_ENDPOINT}/fitpadData/${fitpadDataId}`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    })
    .then( res => 
      !res.ok ? res.json()
      .then(e => Promise.reject(e)) : res.json()  
    );
  },
  postWorkout(exercise_name, workout_set, workout_rep,workout_weight, user_id, notes) {
    return fetch(`${config.API_ENDPOINT}/fitpadData`, {
      method: 'POST',
      headers: {
        'content-type':'application/json',
        authorization:`bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({
        exercise_name, 
        workout_set, 
        workout_rep,
        workout_weight,
        user_id, 
        notes
      })
    })
    .then( res => 
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()  
    )
  }
}

export default FitpadApiService;
