import TokenService from './token-service';
import config from '../config';

const FitpadApiService = {
  getWorkouts () {
    return fetch (`${config.API_ENDPOINT}/fitpadData`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    })
    .then( res => 
      !res.ok ? res.json ().then(e => Promise.reject(e)) : res.json()  
    );
  },
  getWorkout(workoutId) {
    return fetch(`${config.API_ENDPOINT}/workouts/${workoutId}`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    })
    .then( res => 
      !res.ok ? res.json()
      .then(e => Promise.reject(e)) : res.json()  
    );
  },
  postWorkout(exercise_name, workout_set, workout_rep,workout_weight, notes) {
    return fetch(`${config.API_ENDPOINT}/fitpadData`, {
      method: 'POST',
      headers: {
        'content-type' : 'application/json',
        authorization: `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({
        exercise_name, 
        workout_set, 
        workout_rep,
        workout_weight, 
        notes
      })
    })
    .then( res => 
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()  
    )
    .then(data => {
      this.props.history.push('/UserHomepage')
    })
    
  }
}

export default FitpadApiService;
