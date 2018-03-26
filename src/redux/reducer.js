import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import WeatherStateReducer from '../services/getWeather';

export default combineReducers({
  router: routerReducer,
  weather: WeatherStateReducer
});
