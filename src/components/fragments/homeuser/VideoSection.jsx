import React from 'react';
import { Link } from 'react-router-dom'; // Tambahkan Link dari react-router-dom
import video1 from '../../../assets/images/Video Thumbnail (6).jpg';
import video2 from '../../../assets/images/Video Thumbnail (7).jpg';
import video3 from '../../../assets/images/Video Thumbnail (8).jpg';
import video4 from '../../../assets/images/Video Thumbnail (9).jpg';
import video5 from '../../../assets/images/Video Thumbnail (1).png';

function VideoSection() {
  const videos = [
    { image: video1, title: 'Obesitas: Sekadar Masalah Kecil atau Ancaman Serius bagi Kesehatanmu?' },
    { image: video2, title: 'Penyebab sesungguhnya & Bahaya dibalik Obesitas!' },
    { image: video3, title: 'Mitos & Fakta Makanan yang Bikin Obesitas' },
    { image: video4, title: 'Lima Penyakit yang bakal kamu temui ketika kamu Obesitas!' },
    { image: video5, title: 'Tips Ampuh Atasi Obesitas dan Mulai Hidup Sehat!' },
  ];

  return (
    <section className="max-w-screen-2xl mx-auto py-14 px-4 sm:px-6 lg:px-8">
      {/* Button Tonton Video */}
      <div className="flex justify-end mb-4">
        <Link to="/videouser"> {/* Gunakan Link untuk navigasi */}
          <button
            className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition-all mt-4"
          >
            Tonton Video
          </button>
        </Link>
      </div>

      {/* Title Section */}
      <div className="text-center mb-4">
        <h2 className="text-3xl font-semibold text-gray-800 mb-2">
          Lagi males baca artikel?
        </h2>
        <p className="text-xl text-gray-600">
          Yuk, cek video edukasi kami yang nggak kalah seru!
        </p>
      </div>

      {/* Video Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
            <img src={video.image} alt={video.title} className="w-full h-56 object-cover" />
            <div className="p-6">
              <p className="text-gray-800 font-bold text-sm">{video.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default VideoSection;
