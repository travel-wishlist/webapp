const { getWeather, getCityList, getNews } = require ('../helpers/axios')

class ApiController {
 static async weather (req, res, next) {
   let targetCity = req.params.cityName
   try {
    let weatherData = await getWeather (targetCity)
    res.status (200).json (weatherData)
   } catch (err) {
    res.status (400).json ({message: 'error getting weather data / cityname not available'})
   }
 }

 static async cityList (req, res, next) {
   try {
    let cityList = await getCityList ()
    cityList.sort();
    res.status (200).json (cityList)
   } catch (err) {
    res.status (400).json ({message: 'error getting citylist'})
   }
 }

 static async newsList (req, res, next) {
  let targetCity = req.params.cityName
  try {
   let weatherData = await getWeather (targetCity)
   let cityId = await weatherData.sys.country.toLowerCase()
   let newsData = await getNews (cityId)
  //  console.log (newsData.data)
   res.status (200).json (newsData.data.articles)
  } catch (err) {
   res.status (400).json ({message: 'error getting newslist'})
  }
}
}

module.exports = ApiController