import Showcase from "@/components/Showcase";

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-5xl font-bold text-primary mb-4">🏺 Rakku</h1>
          <p className="text-gray-600 text-lg">Showcase Koleksi Mainan</p>
        </header>
        
        <Showcase />
      </div>
    </main>
  );
}
