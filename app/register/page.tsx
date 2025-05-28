"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  // Hook per gestire la navigazione
  const router = useRouter();

  // Stati per input form
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showRequirements, setShowRequirements] = useState(false);


  // Stato per checkbox dei termini
  const [agree, setAgree] = useState(false);

  // Stato per gestire la forza della password (weak o strong)
  const [strength, setStrength] = useState<"weak" | "strong">("weak");

  // Controlla in tempo reale la forza della password
  useEffect(() => {
    const isStrong =
       /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,}$/.test(password);   
    setStrength(isStrong ? "strong" : "weak");
    setShowRequirements(!isStrong && password.length > 0);
  }, [password]);

  // Funzione che gestisce il submit del form
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Se l'utente non accetta i termini, blocca tutto
    if (!agree) return alert("Devi accettare i termini!");

    // Se la password è debole, blocca tutto
    if (strength === "weak") return alert("Password troppo debole!");

    // Salva l'utente nel localStorage
    localStorage.setItem(
      "user",
      JSON.stringify({ name, email, password })
    );

    // Segna l'utente come loggato
    localStorage.setItem("loggedIn", "true");

    // Reindirizza alla dashboard
    router.push("/dashboard");
  };

  return (
    <main className="h-screen flex items-center justify-center bg-gray-50 px-4">
      {/* Card centrale */}
      <div className="w-full max-w-sm bg-white p-8 shadow-md rounded">
        {/* Link login in alto */}
        <p className="text-right text-sm text-gray-500 mb-2">
          Already registered? <a href="/login">Login</a>
        </p>

        {/* Titolo */}
        <h1 className="text-xl font-semibold text-center text-nibol.dark mb-6">
          Signup
        </h1>

        {/* Form registrazione */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Campo Nome */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-nibol.orange"
              required
            />
          </div>

          {/* Campo Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-nibol.orange"
              required
            />
          </div>

          {/* Campo Password */}
          <div>
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

          {/* Barra password strength (visibile solo se c'è input) */}
          {password.length > 0 && (
            <>
              <div
                className={`h-1 rounded transition-colors ${
                  strength === "weak" ? "bg-[#f44336]" : "bg-green-600"
                }`}
              ></div>
              <p
                className={`text-xs mt-1 ${
                  strength === "weak"
                    ? "text-[#f44336]"
                    : "text-green-600"
                }`}
              >
                {strength === "strong"
                  ? "Too strong my friend"
                  : "Too easy my friend"}
              </p>
            </>
          )}

          {/* Mostra i requisiti della password */}
          {showRequirements && (
            <div className="text-xs text-gray-500 mt-2">
              <p>Password must be at least 8 characters long</p>
              <p>Include at least one uppercase letter</p>
              <p>Include at least one number</p>
              <p>Include at least one special character</p>
            </div>
          )}  

          {/* Checkbox termini */}
          <div className="flex items-center text-sm text-gray-700 mt-2">
            <input
              type="checkbox"
              checked={agree}
              onChange={() => setAgree(!agree)}
              className="accent-[#FA4A0C] mr-2 focus:ring-nibol.orange"
              required
            />
            <span>
              Agree to our{" "}
              <a href="#" className="underline text-nibol.orange">
                Terms and Conditions
              </a>
            </span>
          </div>

          {/* Pulsante submit */}
          <button
            type="submit"
             className="w-full bg-[#FA4A0C] text-white font-semibold py-2 rounded hover:bg-[#e9440a] transition-colors"
          >
            Create account
          </button>
        </form>
      </div>
    </main>
  );
}
