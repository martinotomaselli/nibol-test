'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('loggedIn') === 'true';
    if (!isLoggedIn) {
      router.push('/login');
    }
  }, [router]);

  return (
    <main className="min-h-screen px-4 py-12 bg-white text-center">
      <h1 className="text-3xl font-bold text-nibol.dark mb-4">Benvenuto nella Dashboard</h1>
      <p className="text-gray-600 text-sm">
        Qui troverai le funzionalità riservate agli utenti autenticati.
      </p>
    </main>
  );
}
