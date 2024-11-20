// src/components/fragments/landingpage/TentangSection.jsx
import React from 'react';
import TreeImage from '../../../assets/images/Tree.png';
import CloudImage from '../../../assets/images/Cloud.png';
import CharactersImage from '../../../assets/images/Tentang.png';

function TentangSection() {
  return (
    <section className="flex flex-col items-center text-center px-40 py-24 bg-[#EFF7F4] relative">
      {/* Judul */}
      <div className="bg-white py-3 px-8 rounded-full shadow-lg mb-8">
        <h2 className="text-5xl font-bold text-gray-800">
          Tentang Obesifit
        </h2>
      </div>

      {/* Deskripsi */}
      <p className="max-w-4xl text-2xl text-gray-700 mb-12">
        Website ini didedikasikan untuk memberikan pemahaman tentang obesitas dan cara mengelolanya, untuk semua kalangan—dari anak-anak hingga dewasa. Kami menyajikan informasi terpercaya yang mudah diakses, membantu Anda menjalani gaya hidup sehat dan menyadari risiko obesitas.
      </p>

      {/* Gambar Ilustrasi */}
      <div className="flex justify-center items-center relative mt-10">
        {/* Awan */}
        <img src={CloudImage} alt="Awan" className="absolute top-[-80px] right-16 w-32" />
        
        {/* Pohon Kiri */}
        <img src={TreeImage} alt="Pohon" className="w-60 mr-10" />

        {/* Karakter */}
        <img src={CharactersImage} alt="Karakter Orang-Orang" className="w-[800px]" />

        {/* Pohon Kanan */}
        <img src={TreeImage} alt="Pohon" className="w-60 ml-10" />
      </div>
    </section>
  );
}

export default TentangSection;
