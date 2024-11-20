import React from 'react';
import subscriptionImage from '../../../assets/images/Penawaran.png'; // Sesuaikan path gambar

function SubscriptionSection() {
  return (
    <section className="max-w-screen-2xl mx-auto p-5">
      <div className="flex items-center justify-between bg-white rounded-lg shadow-lg p-5 overflow-hidden">
        
        {/* Teks Langganan */}
        <div className="flex-1 p-5">
          <h2 className="text-2xl font-semibold text-black mb-4">
            Yuk, langganan sekarang bareng ObesiFit!
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Nikmati akses konsultasi ke dokter dan pakar kami kapan saja, tanpa batas waktu!
          </p>
          <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-black transition-colors">
            Ayo Berlangganan!
          </button>
        </div>

        {/* Gambar Langganan */}
        <div className="flex-1 flex items-center justify-center p-5">
          <img src={subscriptionImage} alt="Illustrasi Langganan" className="max-w-full h-auto rounded-lg" />
        </div>
      </div>
    </section>
  );
}

export default SubscriptionSection;
