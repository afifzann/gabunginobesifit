// src/components/fragments/landingpage/TestimonialSection.jsx
import React from 'react';
import GibranImage from '../../../assets/images/Gibran_User1.jpg';  // Gambar Gibran
import KomengImage from '../../../assets/images/Komeng_User2.png';  // Gambar Komeng
import RonaldoImage from '../../../assets/images/Ronaldo_User3.jpeg';  // Gambar Ronaldo

function TestimonialSection() {
  return (
    <section className="bg-[#EFF7F4] py-16">
      <div className="text-center mb-8">
        <h2 className="text-5xl font-bold text-black">
          Beberapa orang yang telah terbantu dengan ObesiFit
        </h2>
      </div>

      <div className="flex justify-center gap-12">
        {/* Testimonial 1 - Gibran */}
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-xs text-center">
          <img src={GibranImage} alt="Gibran" className="w-32 h-32 mx-auto rounded-full mb-4" />
          <h3 className="font-semibold text-xl mb-2">Gibran</h3>
          <p className="text-sm text-gray-600 mb-4">Petugas Negara</p>
          <p className="text-gray-700 mb-4">
            "Website ini sangat membantu! Informasi tentang obesitas disajikan dengan jelas dan mudah dipahami. Saya merasa lebih sadar tentang kesehatan saya dan siap untuk membuat perubahan!"
          </p>
          <div className="text-yellow-400">★★★★★</div>
        </div>

        {/* Testimonial 2 - Komeng */}
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-xs text-center">
          <img src={KomengImage} alt="Komeng" className="w-32 h-32 mx-auto rounded-full mb-4" />
          <h3 className="font-semibold text-xl mb-2">Komeng</h3>
          <p className="text-sm text-gray-600 mb-4">Komedian</p>
          <p className="text-gray-700 mb-4">
            "Kalkulator BMI dan kalori harian sangat praktis! Saya bisa dengan cepat mengetahui kebutuhan kalori saya dan merasa lebih termotivasi untuk menjaga pola makan yang sehat."
          </p>
          <div className="text-yellow-400">★★★★★</div>
        </div>

        {/* Testimonial 3 - Ronaldo */}
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-xs text-center">
          <img src={RonaldoImage} alt="Ronaldo" className="w-32 h-32 mx-auto rounded-full mb-4" />
          <h3 className="font-semibold text-xl mb-2">Ronaldo</h3>
          <p className="text-sm text-gray-600 mb-4">Pemain Sepak Bola Professional</p>
          <p className="text-gray-700 mb-4">
            "Dukungan komunitas di website ini luar biasa! Saya bisa berinteraksi dengan orang-orang yang memiliki pengalaman serupa dan mendapatkan saran langsung dari ahli. Sangat membantu!"
          </p>
          <div className="text-yellow-400">★★★★★</div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;
