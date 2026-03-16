"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { checkAuth, logout } from "@/lib/auth";

export default function AdminDashboard() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [collections, setCollections] = useState<any[]>([]);

  useEffect(() => {
    if (!checkAuth()) {
      router.push("/login");
      return;
    }
    setIsLoggedIn(true);

    // Load collections (hardcoded for now - nanti connect Supabase)
    setCollections([
      { id: 1, name: "RX-78-2 Gundam", category: "Gunpla", price: 450000 },
      { id: 2, name: "Hatsune Miku Nendoroid", category: "Nendoroid", price: 650000 },
      { id: 3, name: "Link Figma", category: "Figma", price: 850000 },
    ]);
  }, [router]);

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  if (!isLoggedIn) {
    return <div className="min-h-screen flex items-center justify-center">
      <p>Redirecting to login...</p>
    </div>;
  }

  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-primary mb-2">🏺 Admin Dashboard</h1>
            <p className="text-gray-600">Kelola koleksi Rakku</p>
          </div>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors"
          >
            Logout
          </button>
        </header>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-gray-600 text-sm mb-2">Total Koleksi</h3>
            <p className="text-3xl font-bold text-primary">{collections.length}</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-gray-600 text-sm mb-2">Total Kategori</h3>
            <p className="text-3xl font-bold text-primary">
              {new Set(collections.map(c => c.category)).size}
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-gray-600 text-sm mb-2">Estimasi Nilai</h3>
            <p className="text-3xl font-bold text-primary">
              Rp {collections.reduce((sum, c) => sum + c.price, 0).toLocaleString("id-ID")}
            </p>
          </div>
        </div>

        {/* Collections Table */}
        <div className="bg-white rounded-xl shadow overflow-hidden">
          <div className="p-6 border-b border-gray-200 flex justify-between items-center">
            <h2 className="text-xl font-semibold">Semua Koleksi</h2>
            <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
              + Tambah Koleksi
            </button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Nama
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Kategori
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Harga
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {collections.map((collection) => (
                  <tr key={collection.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{collection.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 py-1 text-xs rounded-full bg-accent/10 text-accent">
                        {collection.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        Rp {collection.price.toLocaleString("id-ID")}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-primary hover:text-primary/80 mr-4">Edit</button>
                      <button className="text-red-600 hover:text-red-800">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
