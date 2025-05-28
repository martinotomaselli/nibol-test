'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center text-center"
      style={{
        backgroundImage: "url('/img/bg-home.jpg')", // L'immagine deve essere in /public/img/
      }}
    >
      <h1 className="text-3xl md:text-4xl font-bold text-orange-500 drop-shadow-lg">
        Benvenuto su Nibol
      </h1>
      <p className="text-white mt-2 drop-shadow-sm">
        Questa è la homepage pubblica del test tecnico.
      </p>

      <div className="mt-6 flex space-x-4">
        <Link
          href="/login"
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded shadow-md transition duration-200"
        >
          Login
        </Link>
        <Link
          href="/register"
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded shadow-md transition duration-200"
        >
          Registrati
        </Link>
      </div>
    </div>
  );
}
