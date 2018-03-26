
const env = process.env.NODE_ENV || 'development';

const apiEnvironment = {
  development: {
    api: 'http://api.openweathermap.org',
    appid: 'bd5e378503939ddaee76f12ad7a97608',
    temperatureUnits: 'metric'
  },
  production: {
    api: 'http://api.openweathermap.org',
    appid: 'bd5e378503939ddaee76f12ad7a97608',
    temperatureUnits: 'metric'
  }
};

module.exports = apiEnvironment[env];
