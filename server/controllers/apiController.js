const { getWeather, getCityList } = require ('../helpers/axios')

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
    res.status (200).json (cityList)
   } catch (err) {
    res.status (400).json ({message: 'error getting citylist'})
   }
 }
}

module.exports = ApiController