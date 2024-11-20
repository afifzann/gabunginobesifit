import React, { useState } from 'react';

function SearchIsiArtikel() {
  const articles = [
    { id: 1, title: "Artikel", image: "https://via.placeholder.com/300x200" },
    { id: 2, title: "Artikel", image: "https://via.placeholder.com/300x200" },
    { id: 3, title: "Artikel", image: "https://via.placeholder.com/300x200" },
    { id: 4, title: "Artikel", image: "https://via.placeholder.com/300x200" },
    { id: 5, title: "Artikel", image: "https://via.placeholder.com/300x200" },
    { id: 6, title: "Artikel", image: "https://via.placeholder.com/300x200" },
    { id: 7, title: "Artikel", image: "https://via.placeholder.com/300x200" },
    { id: 8, title: "Artikel", image: "https://via.placeholder.com/300x200" },
    { id: 9, title: "Artikel", image: "https://via.placeholder.com/300x200" },
    { id: 10, title: "Artikel", image: "https://via.placeholder.com/300x200" },
    { id: 11, title: "Artikel", image: "https://via.placeholder.com/150" },
    { id: 12, title: "Artikel", image: "https://via.placeholder.com/150" },
    { id: 13, title: "Artikel", image: "https://via.placeholder.com/150" },
    { id: 14, title: "Artikel", image: "https://via.placeholder.com/150" },
    { id: 15, title: "Artikel", image: "https://via.placeholder.com/150" },
    { id: 16, title: "Artikel", image: "https://via.placeholder.com/150" },
    { id: 17, title: "Artikel", image: "https://via.placeholder.com/150" },
    { id: 18, title: "Artikel", image: "https://via.placeholder.com/150" },
    { id: 19, title: "Artikel", image: "https://via.placeholder.com/150" },
    { id: 20, title: "Artikel", image: "https://via.placeholder.com/150" },
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredArticles, setFilteredArticles] = useState(articles);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    const filtered = articles.filter((article) =>
      article.title.toLowerCase().includes(term)
    );
    setFilteredArticles(filtered);
  };

  return (
    <div className="max-w-screen-xl mx-auto px-8 py-16">
      <div className="mb-12">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Cari artikel..."
          className="w-full py-4 px-6 text-xl border rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-500"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredArticles.length > 0 ? (
          filteredArticles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-40 object-cover" // Tinggi lebih rendah untuk persegi panjang
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{article.title}</h3>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-xl text-gray-500 col-span-full mt-6">
            Tidak ada artikel yang ditemukan
          </p>
        )}
      </div>
    </div>
  );
}

export default SearchIsiArtikel;
