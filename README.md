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
}
```

**AUTHENTICATE OUTPUT**
```
req.user = {
            id: user.id,
            username: user.username,
            email: user.email,
            userCity: user.userCity,
          };
```

**GET NEWS API**
example:
requestURL : http://localhost:5001/getNews/Jakarta

response :

```json
[
    {
        "source": {
            "id": null,
            "name": "Jpnn.com"
        },
        "author": "JPNN.com",
        "title": "Samsung Galaxy M20s Siap Diluncurkan, Sebegini Harganya - JPNN.com",
        "description": "JPNN.com : Samsung berencana akan memperkenalkan smartphone terbaru di segmen entry-level, yaitu Galaxy M02s.",
        "url": "https://www.jpnn.com/news/samsung-galaxy-m20s-siap-diluncurkan-sebegini-harganya",
        "urlToImage": "https://photo.jpnn.com/arsip/watermark/2021/01/08/teaser-samsung-galaxy-m02s-foto-gsm-arena-98.jpg",
        "publishedAt": "2021-01-08T02:19:00Z",
        "content": "jpnn.com, JAKARTA - Samsung berencana akan memperkenalkan smartphone terbaru di segmen entry-level, yaitu Galaxy M02s.\r\nSayangnya, Samsung tidak menyebutkan kapan tanggal pasti peluncuran Hp anyar ya… [+874 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Cnbcindonesia.com"
        },
        "author": "Syahrizal Sidik",
        "title": "IHSG Mau ke 6.200, Bingung Pilih Saham Apa? Cek Dulu Bro-Sis - CNBC Indonesia",
        "description": "Kenaikan indeks Dow Jones di bursa Wall Street AS pada perdagangan Kamis kemarin menjadi sinyal positif.",
        "url": "https://www.cnbcindonesia.com/market/20210108083038-17-214393/ihsg-mau-ke-6200-bingung-pilih-saham-apa-cek-dulu-bro-sis",
        "urlToImage": "https://awsimages.detik.net.id/visual/2021/01/04/pembukaan-bursa-efek-indonesia-cnbc-indonesiatri-susilo_169.jpeg?w=650",
        "publishedAt": "2021-01-08T01:39:54Z",
        "content": "Jakarta, CNBC Indonesia - Kenaikan indeks Dow Jones di bursa Wall Street AS pada perdagangan Kamis kemarin menjadi sinyal positif bagi bursa saham global di tengah peristiwa serangan pendukung Presid… [+2844 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Cnnindonesia.com"
        },
        "author": null,
        "title": "Studi: Produk Susu Baik untuk Kesehatan Jantung - CNN Indonesia",
        "description": "Penelitian telah menunjukkan bahwa susu baik untuk jantung untuk konsumsi dalam jumlah sedang.",
        "url": "https://www.cnnindonesia.com/gaya-hidup/20210108074103-255-591001/studi-produk-susu-baik-untuk-kesehatan-jantung",
        "urlToImage": "https://akcdn.detik.net.id/visual/2017/05/16/46728880-38ef-4b40-83ce-2940fc30a7cd_169.jpg?w=650",
        "publishedAt": "2021-01-08T01:37:27Z",
        "content": "Jakarta, CNN Indonesia -- Selama beberapa waktu, sempat muncul perdebatan terkait baik dan buruk produk susuuntuk kesehatan jantung. Namun berdasarkan penelitian, mengonsumsi produk susu baik untuk j… [+3129 chars]"
    }
]
```