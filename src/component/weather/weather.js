import React, { Component } from 'react';  //eslint-disable-line

class Weather extends Component {

  /**
     * Render Weather
     * @return {JSX} Rendered Weather
     */

  render() {
    // console.log(JSON.stringify(this.props.weatherData));
    const { city, country, list } = this.props.weatherData;
    const today = list[Object.keys(list)[0]];
    delete list[Object.keys(list)[0]];
    return (
      <div>
        <br />
        {/* <h1> {today.day}°C</h1> */}
        <h1 className="location">{city}, {country}</h1>
        <h2>{today.day}</h2>
        <ul className="status">
          <li>{today.temp_max}°C</li>
          <li>{today.temp_min}°C</li>
        </ul>
        <section className="fivedays">
          <h3>{Object.keys(list).length} Day Forecast</h3>
          {
            Object.keys(list).map((value) => (
              <div className="forecast" key={value}>
                <p className="day">{list[value].day}</p>
                <div className="lowhigh">
                  <p className="high">{list[value].temp_max}°C</p>
                  <p className="low">{list[value].temp_min}°C</p>
                </div>
              </div>
            ))
          }

        </section>
      </div>
    );
  }
}
export default Weather;
