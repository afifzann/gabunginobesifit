import React from 'react';
import kalkulatorImage1 from '../../../assets/images/Fitur (4).png'; // Ganti dengan path gambar yang benar
import kalkulatorImage2 from '../../../assets/images/Fitur (5).png'; // Ganti dengan path gambar yang benar

function KalkulatorUser() {
  return (
    <section className="max-w-screen-2xl mx-auto p-5">
      <div className="flex items-center justify-between bg-white rounded-lg shadow-lg p-3 overflow-hidden" style={{ height: '450px' }}>
        {/* Kalkulator BMI */}
        <div className="flex-1 flex flex-col items-center text-center p-3">
          <h2 className="text-2xl font-semibold text-black mb-2">Hitung BMI Kamu di Sini!</h2>
          <p className="text-lg text-gray-600 mb-4">Cek kesehatan berat badanmu dengan cepat. Yuk, hitung sekarang!</p>
          <img src={kalkulatorImage1} alt="Kalkulator BMI" className="max-w-full h-36 mb-2 rounded-lg" />
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-black transition-colors">
            Ayo Hitung!
          </button>
        </div>

        {/* Kalkulator Kalori */}
        <div className="flex-1 flex flex-col items-center text-center p-3">
          <h2 className="text-2xl font-semibold text-black mb-2">Hitung Kebutuhan Kalori Harianmu!</h2>
          <p className="text-lg text-gray-600 mb-4">Cek berapa kalori yang kamu butuhkan setiap hari. Yuk, coba hitung!</p>
          <img src={kalkulatorImage2} alt="Kalkulator Kalori" className="max-w-full h-36 mb-2 rounded-lg" />
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-black transition-colors">
            Ayo Hitung!
          </button>
        </div>
      </div>
    </section>
  );
}

export default KalkulatorUser;
