**Untuk develop project ini:**
----
* clone ke repo local
  `git clone <url-to-trawis-repo>`
  **NOTE: branch default adalah development**

* bikin branch sesuai fitur yang dikerjain:
  misal: ical ngerjain login, `git checkout -b rizal/login`

* `npm install` untuk install package yang dibutuhkan


SERVER-SIDE
---
* Asosiasi dan model sudah dibuat, silakan jalankan command sequelize-cli untuk buat database local seperti biasa.
* Sudah ada validasi sederhana untuk email, username dan password User. **Untuk penambahan validasi mohon buat branch baru**
* Untuk yg kerja di bagian register/login/OAuth, bisa memanfaatkan folder yang sudah ada. Jika butuh buat fungsi menggunakan `bcryptjs`, maka bisa ke `/server/helpers/bcrypt`. Jika butuh memisahkan fungsi Authorisation/Authentication, bisa ke `/server/middlewares/auth.js`. Untuk error-handling, bisa disatukan di `/server/middlewares/errorHandler.js`
* Endpoints dan file yang diperlukan juga sudah dibuat (dan sudah diisi dengan skeleton code juga), silakan dimanfaatkan sesuai kebutuhan.

CLIENT-SIDE
---
Masih kosongan

**NOTES**
---
Jika ada kesalahan/kekurangan/masalah saat develop yang berhubungan dengan inisiasi proyek ini, tolong hubungi Ical langsung ya!

**WEATHER API**
example :
requestURL: http://localhost:5001/openWeatherApi/Bandung
response: 
```json
{
    "coord": {
        "lon": 107.6186,
        "lat": -6.9039
    },
    "weather": [
        {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 295.92,
        "feels_like": 298.62,
        "temp_min": 295.92,
        "temp_max": 295.92,
        "pressure": 1008,
        "humidity": 81,
        "sea_level": 1008,
        "grnd_level": 927
    },
    "visibility": 10000,
    "wind": {
        "speed": 0.98,
        "deg": 294
    },
    "clouds": {
        "all": 93
    },
    "dt": 1610024852,
    "sys": {
        "country": "ID",
        "sunrise": 1609972827,
        "sunset": 1610017834
    },
    "timezone": 25200,
    "id": 1650357,
    "name": "Bandung",
    "cod": 200
}```