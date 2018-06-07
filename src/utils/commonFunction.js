
import moment from 'moment';

export const getMinMaxTemp = (prvTempData, nextTempData) => {

  const tempObj = prvTempData;

  tempObj.temp_max = prvTempData.temp_max <= nextTempData.temp_max
    ? nextTempData.temp_max
    : prvTempData.temp_max;

  tempObj.temp_min = prvTempData.temp_min >= nextTempData.temp_min
    ? nextTempData.temp_min
    : prvTempData.temp_min;

  return tempObj;
};

export const converDataToDispaly = weatherData => {
  let displayData = {};
  displayData.city = weatherData.city.name;
  displayData.country = weatherData.city.country;
  displayData.list = {};
  weatherData.list.map((value, key) => {
    const day = moment(value.dt_txt).format('dddd');
    const date = moment(value.dt_txt).format('DD-MM-YYYY');
    if (displayData.list[date]) {
      const tempValue = getMinMaxTemp(displayData.list[date], value.main);
      displayData.list[date] = tempValue;
    } else {
      displayData.list[date] = {
        'temp_min': value.main.temp_min,
        'temp_max': value.main.temp_max,
        'day': day
      };
    }
  });
  console.log(JSON.stringify(displayData));
  return displayData;
};


