'use client';

import Link from 'next/link';
import { useLogin } from './LoginContext';

export default function Navbar() {
  const { loggedIn, setLoggedIn } = useLogin();

  const handleLogout = () => {
    localStorage.removeItem('loggedIn');
    setLoggedIn(false);
    window.location.href = '/';
  };

  return (
    <nav className="bg-white shadow-sm p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Nibol</h1>
      <div className="space-x-4 text-sm">
        <Link href="/" className="hover:underline">
          Home
        </Link>

        {!loggedIn && (
          <>
            <Link href="/login" className="hover:underline">
              Login
            </Link>
            <Link href="/register" className="hover:underline">
              Registrati
            </Link>
          </>
        )}

        {loggedIn && (
          <button
            onClick={handleLogout}
            className="text-red-600 hover:underline"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}
