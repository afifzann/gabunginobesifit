import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import CommunitySupportImage from '../../../assets/images/Dokter.png'; // Pastikan path gambar sudah benar

function DukunganSection() {
  const navigate = useNavigate(); // Inisialisasi navigate

  const handleButtonClick = () => {
    navigate('/homeuser'); // Arahkan ke halaman homeuser
  };

  return (
    <section className="flex items-center justify-between px-40 py-24 bg-white">
      {/* Ilustrasi Gambar */}
      <div className="flex items-center">
        <img
          src={CommunitySupportImage}
          alt="Dukungan Komunitas dan Konsultasi Ahli"
          className="w-[700px] drop-shadow-lg"
        />
      </div>

      {/* Teks Utama dengan Rata Kanan */}
      <div className="max-w-2xl ml-16 text-right">
        <h2 className="text-5xl font-bold text-black leading-tight mb-6">
          Dukungan komunitas & konsultasi ahli
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          Bergabunglah dengan komunitas yang saling mendukung dan terhubung dengan para ahli kesehatan untuk mendapatkan saran yang tepat. Dapatkan pengalaman berbagi, motivasi, dan bantuan langsung dalam perjalanan menuju hidup sehat, bersama individu-individu yang memiliki tujuan yang sama.
        </p>
        <button
          className="px-8 py-3 bg-green-500 text-white rounded-lg text-lg shadow-lg hover:bg-green-600 transition-all"
          onClick={handleButtonClick} // Tambahkan event handler
        >
          Yuk, Cek!
        </button>
      </div>
    </section>
  );
}

export default DukunganSection;
