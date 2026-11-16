import { useState } from "react";
import Clock from "./Clock.jsx";

const dataMahasiswa = [
  {
    id: 1,
    nim: "2026001001",
    nama: "Choi Hyunsuk",
    noHp: "081234567890",
    email: "choi.hyunsuk@email.com",
    alamat: "Bekasi",
    prodi: "Manajemen",
    tahunMasuk: 2026,
  },
  {
    id: 2,
    nim: "2026001002",
    nama: "Park Jihoon",
    noHp: "082198765432",
    email: "park.jihoon@email.com",
    alamat: "Surabaya",
    prodi: "Hukum",
    tahunMasuk: 2026,
  },
  {
    id: 3,
    nim: "2026001003",
    nama: "Kanemoto Yoshinori",
    noHp: "085712345678",
    email: "kanemoto.yoshinori@email.com",
    alamat: "Bogor",
    prodi: "Teknik Elektro",
    tahunMasuk: 2026,
  },
  {
    id: 4,
    nim: "2026001004",
    nama: "Kim Junkyu",
    noHp: "087856781234",
    email: "kim.junkyu@email.com",
    alamat: "Bandung",
    prodi: "Teknik Informatika",
    tahunMasuk: 2026,
  },
  {
    id: 5,
    nim: "2026001005",
    nama: "Yoon Jaehyuk",
    noHp: "081355577799",
    email: "yoon.jaehyuk@email.com",
    alamat: "Tangerang",
    prodi: "Akuntansi",
    tahunMasuk: 2026,
  },
  {
    id: 6,
    nim: "2026001006",
    nama: "Hamada Asahi",
    noHp: "089612345670",
    email: "hamada.asahi@email.com",
    alamat: "Bandung",
    prodi: "Desain Komunikasi Visual",
    tahunMasuk: 2026,
  },
    {
    id: 7,
    nim: "2026001007",
    nama: "Kim Doyoung",
    noHp: "081234567890",
    email: "kim.doyoung@email.com",
    alamat: "Jakarta",
    prodi: "Ilmu Kedokteran",
    tahunMasuk: 2026,
  },
  {
    id: 8,
    nim: "2026001008",
    nama: "Watanabe Haruto",
    noHp: "087856781234",
    email: "watanabe.haruto@email.com",
    alamat: "Semarang",
    prodi: "Teknik Mesin",
    tahunMasuk: 2026,
  },
  {
    id: 9 ,
    nim: "2026001009",
    nama: "Park Jeongwoo",
    noHp: "081355577799",
    email: "park.jeongwoo@email.com",
    alamat: "Yogyakarta",
    prodi: "Akuntansi",
    tahunMasuk: 2026,
  },
  {
    id: 10,
    nim: "2026001010",
    nama: "So Junghwan",
    noHp: "089612345670",
    email: "so.junghwan@email.com",
    alamat: "Depok",
    prodi: "Ilmu Komunikasi",
    tahunMasuk: 2026,
  },
];

export default function App() {
  // Data mahasiswa disimpan di dalam state
  const [students] = useState(dataMahasiswa);

  return (
    <div className="container">
      <header className="header">
        <h1>Student Management</h1>
        <h2>Daftar Data Mahasiswa</h2>
      </header>

      <section className="info-bar">
        <div className="badge">
          Jumlah Mahasiswa: <strong>{students.length}</strong>
        </div>
        <Clock />
      </section>

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>NIM</th>
              <th>Nama Mahasiswa</th>
              <th>No. Hp</th>
              <th>Email</th>
              <th>Alamat</th>
              <th>Program Studi</th>
              <th>Tahun Masuk</th>
            </tr>
          </thead>
          <tbody>
            {students.map((s) => (
              // Key menggunakan ID karena dia key yang unik
              <tr key={s.id}>
                <td>{s.nim}</td>
                <td className="nama">{s.nama}</td>
                <td>{s.noHp}</td>
                <td>{s.email}</td>
                <td>{s.alamat}</td>
                <td>{s.prodi}</td>
                <td>{s.tahunMasuk}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
