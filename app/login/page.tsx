"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  // Hook per gestire il routing
  const router = useRouter();

  // Stati locali per email e password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Funzione per gestire il submit del form
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault(); // Previene il refresh della pagina

    // Recupera l'utente salvato da localStorage
    const savedUser = JSON.parse(localStorage.getItem("user") || "{}");

    // Verifica che email e password corrispondano a quelle salvate
    if (email === savedUser.email && password === savedUser.password) {
      localStorage.setItem("loggedIn", "true"); // Segnala che l'utente è loggato
      router.push("/dashboard"); // Reindirizza alla dashboard
    } else {
      alert("Credenziali non valide"); // Messaggio d’errore se non combaciano
    }
  };

  return (
    <main className="h-screen flex items-center justify-center bg-gray-50 px-4">
      {/* Box centrale con ombra */}
      <div className="w-full max-w-sm bg-white p-8 shadow-md rounded">
        <h1 className="text-xl font-semibold text-center text-nibol.dark mb-6">
          Login to your Nibol account
        </h1>

        {/* Form con gestione onSubmit */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            {/* Campo Email */}
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@company.com"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-nibol.orange"
              required
            />
          </div>

          <div>
            {/* Campo Password */}
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-nibol.orange"
              required
            />
          </div>

          {/* Bottone Submit */}
          <button
            type="submit"
            className="w-full bg-[#FA4A0C] text-white font-semibold py-2 rounded hover:bg-[#e9440a] transition-colors"
          >
            Continue
          </button>
        </form>

        {/* Link aggiuntivi: reset password e registrazione */}
        <div className="flex justify-between items-center text-sm mt-4 text-gray-500">
          <a href="#" className="hover:underline">
            Forgot password?
          </a>
          <a href="/register" className="hover:underline">
            Signup
          </a>
        </div>
      </div>
    </main>
  );
}
