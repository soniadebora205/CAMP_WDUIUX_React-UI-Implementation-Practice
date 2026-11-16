# React UI Implementation Practice 🖥️

- **Nama:** Sonia Debora Napitupulu
- **NPM:** 4523210105
- **Program:** Web Development & UIUX Design


## Fitur
- Menampilkan daftar mahasiswa dalam bentuk tabel (NIM, nama, no. hp, email, alamat, program studi, tahun masuk)
- Menampilkan jumlah total mahasiswa
- Jam digital yang diperbarui setiap 1 detik


## Konsep React yang Digunakan
- **useState**: menyimpan data mahasiswa dan waktu saat ini
- **useEffect**: menjalankan setInterval untuk jam digital, lengkap dengan clearInterval saat komponen di-unmount
- **.map()**: looping data mahasiswa menjadi baris tabel, dengan key unik dari id


## Tools
- React
- Vite
- Vanilla CSS


## 📝 Intermezzo
Di bawah ini merupakan tangkapan layar dari tampilan UI data mahasiswa dan live clock dengan useEffect.

<img width="1920" height="1140" alt="image" src="https://github.com/user-attachments/assets/d83607b1-2dd9-4cef-a23a-f1580bf0174a" />


## 📝 Sedikit tambahan
Saya juga memastikan agar node modules dan dist tidak ikut ter-push ke Github (dengan bantuan .gitignore).

<img width="502" height="322" alt="image" src="https://github.com/user-attachments/assets/db7eedcb-270f-452d-8b3a-1c1775f0d5da" />
