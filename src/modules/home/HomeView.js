import React, { Component } from 'react';  //eslint-disable-line
import Weather from '../../component/weather/weather';

class HomeView extends Component {

  componentDidMount() {
    this.props.getWeatherForcast('Ahmedabad,IN');
  }

  /**
   * Render Home
   * @return {JSX} Rendered Home
   */

  weather() {
    return (
      <div id="weather">
        <Weather weatherData={this.props.weatherData} />
      </div>
    );
  }

  render() {
    return (
      <div className="app">
        {
          this.props.weatherData && Object.keys(this.props.weatherData).length > 0
            ? this.weather()
            : <div className="errorInAPI"><p> {this.props.weatherDataError}</p></div>
        }
      </div>
    );
  }
}

export default HomeView;
