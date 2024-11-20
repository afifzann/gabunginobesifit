import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import ArticleImage from '../../../assets/images/Artikel.png'; // Pastikan path gambar sudah benar

function ArtikelSection() {
  const navigate = useNavigate(); // Inisialisasi navigate

  const handleButtonClick = () => {
    navigate('/homeuser'); // Arahkan ke path halaman homeuser
  };

  return (
    <section className="flex items-center justify-between px-40 py-24 bg-white">
      {/* Ilustrasi Gambar */}
      <div className="flex items-center">
        <img src={ArticleImage} alt="Artikel dan Video Informasi" className="w-[700px] drop-shadow-lg" />
      </div>

      {/* Teks Utama dengan Rata Kanan */}
      <div className="max-w-2xl ml-16 text-right">
        <h2 className="text-5xl font-bold text-black leading-tight mb-6">
          Artikel terlengkap dan video informatif
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          Jelajahi artikel terlengkap dan video informatif tentang obesitas yang dirancang untuk membantu semua kalangan, mulai dari anak-anak hingga dewasa. Dengan berbagai perspektif dan penjelasan yang menarik.
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

export default ArtikelSection;
