'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-100 text-gray-800">
    
      {/* Big bold title */}
      <h1 className="text-8xl font-extrabold mb-4 tracking-wide">404</h1>

      {/* Friendly explanatory text */}
      <p className="text-xl md:text-2xl mb-10 max-w-lg leading-relaxed text-gray-600">
        Oups ! La page que vous cherchez n’existe pas ou a été déplacée.
      </p>

      {/* Home button */}
      <Link
        href="/"
        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg shadow-md transition duration-300 ease-in-out"
      >
        Retour à l’accueil
      </Link>
    </main>
  );
}
