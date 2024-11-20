import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import CalculatorImage from '../../../assets/images/Kalkulator.png'; // Pastikan nama dan path sesuai dengan gambar yang benar

function KalkulatorSection() {
  const navigate = useNavigate(); // Inisialisasi navigate

  const handleButtonClick = () => {
    navigate('/homeuser'); // Arahkan ke halaman homeuser
  };

  return (
    <section className="flex items-center justify-between px-40 py-24 bg-[#EFF7F4]">
      {/* Teks Utama */}
      <div className="max-w-2xl">
        <h2 className="text-5xl font-bold text-black leading-tight mb-6">
          Kalkulator BMI & juga kalori harian
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          Hitung Indeks Massa Tubuh (BMI) dan kebutuhan kalori harian dengan mudah. Alat interaktif ini membantu Anda memahami kondisi tubuh dan menentukan asupan kalori yang tepat, sehingga dapat mendukung perjalanan menuju hidup sehat dengan lebih terarah.
        </p>
        <button
          className="px-8 py-3 bg-green-500 text-white rounded-lg text-lg shadow-lg hover:bg-green-600 transition-all"
          onClick={handleButtonClick} // Tambahkan event handler
        >
          Yuk, Cek!
        </button>
      </div>

      {/* Ilustrasi Gambar */}
      <div className="flex items-center">
        <img src={CalculatorImage} alt="Kalkulator BMI dan Kalori" className="w-[700px] drop-shadow-lg" />
      </div>
    </section>
  );
}

export default KalkulatorSection;
