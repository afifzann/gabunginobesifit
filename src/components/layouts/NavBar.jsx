import React from 'react';

function Navbar() {
  const handleLoginClick = () => {
    // Arahkan ke halaman login (misalnya login.html)
    window.location.href = "/login"; // Ganti dengan URL yang sesuai
  };

  const handleRegisterClick = () => {
    // Arahkan ke halaman register (misalnya register.html)
    window.location.href = "/register"; // Ganti dengan URL yang sesuai
  };

  return (
    <nav className="flex items-center justify-between px-20 py-6 bg-gray-50 shadow-md fixed top-0 left-0 w-full z-50">
      {/* Logo */}
      <div className="text-4xl font-bold text-black">ObesiFit</div>

      {/* Menu Navigasi dan Tombol */}
      <div className="flex items-center space-x-14 text-gray-700 text-xl font-semibold ml-auto">
        {/* Menu Navigasi */}
        <ul className="flex space-x-12">
          <li className="hover:text-black cursor-pointer">Home</li>
          <li className="hover:text-black cursor-pointer">Tentang Kami</li>
          <li className="hover:text-black cursor-pointer">Fitur</li>
          <li className="hover:text-black cursor-pointer">Testimoni</li>
        </ul>

        {/* Tombol Navigasi */}
        <div className="flex space-x-8">
          {/* Tombol Masuk */}
          <button
            onClick={handleLoginClick}
            className="px-7 py-3 border-2 border-green-400 text-green-400 rounded-full hover:bg-green-100 transition-all text-xl"
          >
            Masuk
          </button>

          {/* Tombol Daftar */}
          <button
            onClick={handleRegisterClick}
            className="px-7 py-3 bg-green-400 text-white rounded-full hover:bg-green-500 transition-all text-xl"
          >
            Daftar
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
