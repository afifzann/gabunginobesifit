import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainbG1 from '../../../assets/images/MainbG1.png';

function HeroSection() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/homeuser'); // Path harus sesuai dengan routing yang telah ditentukan
  };

  return (
    <section className="flex items-center justify-between px-40 py-24 bg-white">
      {/* Teks Utama */}
      <div className="max-w-2xl">
        <h1 className="text-7xl font-bold text-black leading-tight">
          Pahami Obesitas, <br />
          <span className="text-green-500 text-8xl">Kendalikan Kesehatanmu</span>
        </h1>
        <p className="text-3xl text-gray-700 mt-6">
          Mulai hidup sehat dengan edukasi, konsultasi, dan dukungan dari kami
        </p>
        <button
          className="mt-10 px-12 py-5 bg-green-500 text-white rounded-lg text-3xl shadow-lg hover:bg-green-600 transition-all"
          onClick={handleButtonClick}
        >
          Langsung Aja
        </button>
      </div>

      {/* Ilustrasi Gambar */}
      <div className="flex-shrink-0">
        <img src={MainbG1} alt="Ilustrasi Obesitas" className="w-[700px]" />
      </div>
    </section>
  );
}

export default HeroSection;
