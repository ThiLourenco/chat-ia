import Link from 'next/link';
import React from 'react';
import Footer from './components/footer';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      {/* Conteúdo Principal */}
      <main className="flex-grow flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl font-bold mb-4">Miles Davis AI</h1>
        <p className="text-gray-400 text-lg mb-8">
          Conheça agora o seu novo assistente virtual, feito para te auxiliar nas suas principais dúvidas.
        </p>
        <div className="flex space-x-4">
          <Link href="/chat" className="bg-gray-800 px-6 py-2 rounded-md text-white hover:bg-gray-700 transition">
            Começar
          </Link>
          <Link href="/documentation" className="bg-gray-800 px-6 py-2 rounded-md text-white hover:bg-gray-700 transition">
            Documentação
          </Link>
        </div>
      </main>

      {/* Rodapé Fixo */}
     <Footer />
    </div>
  );
};

export default LandingPage;
