"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { checkAuth, getUser, logout } from "@/lib/auth";
import Showcase from "@/components/Showcase";

export default function Home() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<string | null>(null);

  useEffect(() => {
    setIsLoggedIn(checkAuth());
    setUser(getUser());
  }, []);

  const handleLogout = () => {
    logout();
    setIsLoggedIn(false);
    setUser(null);
    router.push("/login");
  };

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12">
          <div className="flex justify-between items-center">
            <div className="text-center flex-1">
              <h1 className="text-5xl font-bold text-primary mb-4">🏺 Rakku</h1>
              <p className="text-gray-600 text-lg">Showcase Koleksi Mainan</p>
            </div>
            
            <div className="flex items-center gap-4">
              {isLoggedIn ? (
                <>
                  <span className="text-sm text-gray-600">
                    Hi, <strong>{user}</strong>
                  </span>
                  <button
                    onClick={handleLogout}
                    className="px-4 py-2 text-sm bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <button
                  onClick={() => router.push("/login")}
                  className="px-4 py-2 text-sm bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Login
                </button>
              )}
            </div>
          </div>
        </header>
        
        <Showcase />
      </div>
    </main>
  );
}
