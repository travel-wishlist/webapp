const axios = require ('axios');

async function axiosWeather (cityName) {
  try {
    const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&callback=test&appid=4cbc37962112990eed1f1a20d71d34e6`);
    return response
  } catch (err) {
    console.error (err, 'error api weather')
  }
} 

async function getWeather (cityName) {
  try {
    let weatherData = await axiosWeather (cityName)
    weatherData.data = weatherData.data.slice (5)
    weatherData.data = weatherData.data.slice (0, -1)
    let weather = await JSON.parse (weatherData.data)

    return weather
  } catch (err) {
    console.log (err, 'error getWeather (helpers)')
  }
}

async function getCityList () {
  try {
    const response = await axios.get ('http://worldtimeapi.org/api/timezone/')
    let arrCityTemp = []
    response.data.forEach (e => {
      let flag = false
      let temp = ''
      for (let i = 0; i < e.length; i++) {
        if (flag) {
          temp += e[i]
        }
        if (e[i] === '/') {
          flag = true
        }
      }
      arrCityTemp.push (temp)
    })

    let arrCity = []
    arrCityTemp.forEach (e => {
      let flag = false
      let temp = ''
      for (let i = 0; i < e.length; i++) {
        if (e[i] !== '/') {
          temp += e[i]
        } else if (e[i] === '/') {
          temp += e[i]
          if (flag === false) {
            flag = true
            temp = ''
          }
        }
      }
      arrCity.push (temp)
    })

    let arrCitySpaceRemoved = []
    arrCity.forEach (e => {
      let temp = ''
      for (let i = 0; i < e.length; i++) {
        if (e[i] === '_' || e [i] === '-') {
          temp += ' '
        } else {
          temp += e[i]
        }
      }
      arrCitySpaceRemoved.push (temp)
    })

    let arrCityFinal = []
    arrCitySpaceRemoved.forEach (e => {
      if (e.length !== 0  && e !== 'UTC' && e.includes("GMT") !== true) {
        arrCityFinal.push (e)
      }
    })

    return arrCityFinal
  } catch (err) {
    console.log (err, 'error getCityList (helpers)')
  }
}

async function getNews (countryId) {
  try {
    let response = await axios.get (`http://newsapi.org/v2/top-headlines?country=${countryId}&apiKey=168e6737d55f40508dc5d954af6ea3a0`)
    // let response = await axios.get (`http://api.mediastack.com/v1/news?access_key=1f27e5b872866a22b911bed4c740180b&keywords=travel&countries=${countryId}&languages=en&categories=general,entertainment,technology`)
    return response
  } catch (err) {
    console.error (err, 'error api getNews')
  }
}

module.exports = {
  getWeather,
  getCityList,
  getNews
}