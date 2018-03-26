import HomeView from './HomeView';            //eslint-disable-line
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getWeatherForcast } from '../../services/getWeather';

const mapStateToProps = state => ({
  weatherData: state.weather.weatherData,
  weatherDataError: state.weather.weatherDataError
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getWeatherForcast
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeView);
