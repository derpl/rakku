"use client";

import { useState } from "react";

// Sample data - nanti bisa diganti dari JSON file
const collections = [
  {
    id: 1,
    name: "Gundam Exia",
    category: "Gunpla",
    year: 2023,
    image: "https://via.placeholder.com/300x300?text=Gundam+Exia",
    description: "Master Grade Gundam Exia dari Celestial Being",
    acquiredDate: "2023-06-15",
  },
  {
    id: 2,
    name: "Nendoroid Link",
    category: "Nendoroid",
    year: 2022,
    image: "https://via.placeholder.com/300x300?text=Link+Nendoroid",
    description: "The Legend of Zelda - Breath of the Wild version",
    acquiredDate: "2022-12-20",
  },
  {
    id: 3,
    name: "Figma Saber",
    category: "Figma",
    year: 2024,
    image: "https://via.placeholder.com/300x300?text=Saber+Figma",
    description: "Fate/Stay Night - Artoria Pendragon",
    acquiredDate: "2024-01-10",
  },
];

export default function Showcase() {
  const [filter, setFilter] = useState("all");

  const categories = ["all", ...new Set(collections.map((c) => c.category))];

  const filtered =
    filter === "all"
      ? collections
      : collections.filter((c) => c.category === filter);

  return (
    <div>
      {/* Filter Bar */}
      <div className="flex gap-2 mb-8 flex-wrap justify-center">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              filter === cat
                ? "bg-primary text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {cat === "all" ? "Semua" : cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-primary">{item.name}</h3>
                <span className="text-xs bg-accent text-white px-2 py-1 rounded">
                  {item.category}
                </span>
              </div>
              <p className="text-gray-600 text-sm mb-4">{item.description}</p>
              <div className="flex justify-between text-xs text-gray-500">
                <span>Year: {item.year}</span>
                <span>Acquired: {item.acquiredDate}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Stats */}
      <div className="mt-12 text-center text-gray-600">
        <p>
          Total koleksi: <span className="font-bold">{collections.length}</span>{" "}
          item
        </p>
      </div>
    </div>
  );
}
