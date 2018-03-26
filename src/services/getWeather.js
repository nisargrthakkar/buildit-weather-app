import { get } from '../utils/api';
import * as configuration from '../utils/configuration';
import { Map } from 'immutable';
import * as apiConfig from './apiConfig';
import { converDataToDispaly } from './../utils/commonFunction';

const SET_WEATHER_DATA = 'SET_WEATHER_DATA';
const SET_WEATHER_DATA_ERROR = 'SET_WEATHER_DATA_ERROR';

configuration.setConfiguration('API_ROOT', apiConfig.api);
configuration.setConfiguration('AUTH_TOKEN', '');

export const setWeatherData = value => ({ type: SET_WEATHER_DATA, payload: value });
export const setWeatherDataError = value => ({ type: SET_WEATHER_DATA_ERROR, payload: value });

export const getWeatherForcast = (city) => {
  return async(dispatch) => {
    get(`data/2.5/forecast/?q=${city}&appid=${apiConfig.appid}&units=${apiConfig.temperatureUnits}`).then((responseData) => {
      if (responseData.status === 200) {
        const weatherData = converDataToDispaly(responseData.data);
        dispatch(setWeatherData(weatherData));
      } else {
        dispatch(setWeatherDataError('There is some issue please try after some time'));
      }
    }).catch((e) => {
      dispatch(setWeatherDataError('There is some issue please try after some time'));
    });
  };
};

// Initial state
export const initialState = Map({
  isLoading: false,
  weatherData: {},
  weatherDataError: ''
}).toJS();

/* eslint-disable */
export default function WeatherStateReducer(state = initialState, action) {
  switch (action.type) {
    case SET_WEATHER_DATA:
      return {
        ...state,
        weatherData: action.payload
      };
    case SET_WEATHER_DATA_ERROR:
      return {
        ...state,
        weatherData: {},
        weatherDataError: action.payload
      };
    default:
      return state;
  }
}


