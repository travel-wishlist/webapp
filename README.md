**Untuk develop project ini:**
----
* pull ke local
  `git pull <url-to-trawis-repo>`

* `npm install`

* bikin branch sesuai fitur yang dikerjain:
  misal: ical ngerjain login, `git checkout -b rizal/login`

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
