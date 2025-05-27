'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const router = useRouter();
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    // Controlla lo stato di login al caricamento
    setLoggedIn(localStorage.getItem('loggedIn') === 'true');
  }, []);

  const handleLogout = () => {
    // Rimuove il login e reindirizza
    localStorage.removeItem('loggedIn');
    setLoggedIn(false);
    router.push('/');
  };

  return (
    <nav className="bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
      <span className="text-xl font-bold text-nibol.dark">Nibol</span>
      <div className="flex items-center gap-6 text-sm font-medium">
        <Link href="/" className="text-nibol.dark hover:text-nibol.orange transition">Home</Link>

        {loggedIn ? (
          // Se loggato: mostra solo Logout
          <button onClick={handleLogout} className="text-nibol.orange hover:underline transition">Logout</button>
        ) : (
          // Se NON loggato: mostra Login e Registrati
          <>
            <Link href="/login" className="text-nibol.dark hover:text-nibol.orange transition">Login</Link>
            <Link href="/register" className="text-nibol.dark hover:text-nibol.orange transition">Registrati</Link>
          </>
        )}
      </div>
    </nav>
  );
}
