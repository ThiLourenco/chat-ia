import React from 'react';
import Link from 'next/link';

const Documentation: React.FC = () => {
  return (
    <div className="flex flex-col w-screen h-screen p-14 bg-black text-white">
    <div className="flex items-center justify-between p-4 bg-zinc-900 rounded-md mb-4">
      <h1 className="text-xl font-bold">Miles Davis</h1>
        <Link href="/" className='text-white px-4 py-2 rounded-md hover:bg-gray-800 hover:text-white'>
          Voltar
        </Link>
    </div>

    <div className="max-w-4xl mx-auto mb-20">
        {/* Título da Documentação */}
        <h1 className="text-4xl font-bold mb-24 mt-10 text-center">Documentação da Aplicação RAG</h1>

        {/* Visão Geral */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Visão Geral</h2>
          <p className="text-gray-300 leading-relaxed">
            Esta aplicação utiliza uma abordagem de <strong>RAG (Retrieval-Augmented Generation)</strong> para responder a perguntas baseadas no contexto dos documentos que você fornecer. 
            Ao fazer o upload de arquivos, a aplicação extrai informações e cria uma base de conhecimento temporária para fornecer respostas precisas e contextualizadas.
          </p>
        </section>

        {/* Como Utilizar */}
        {/* <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Como Utilizar</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-300 leading-relaxed">
            <li><strong>Upload dos Arquivos:</strong> Para obter respostas específicas, faça o upload dos documentos (PDFs ou outros formatos suportados) com o conteúdo que você deseja que a aplicação utilize como referência.</li>
            <li><strong>Consulta:</strong> Após o upload, você pode fazer perguntas sobre o conteúdo dos documentos. A aplicação utiliza técnicas de recuperação de informações e geração de respostas para fornecer respostas detalhadas e relevantes.</li>
            <li><strong>Atualização dos Arquivos:</strong> Caso o contexto dos documentos mude, basta fazer o upload dos novos arquivos para atualizar a base de conhecimento temporária.</li>
          </ol>
        </section> */}

        {/* Exemplo de Uso */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Exemplo de Uso</h2>
          <p className="text-gray-300 leading-relaxed">
            1. Pergunte algo como: "Qual é o processo descrito para abrir o sistema?"<br />
            2. A aplicação analisará o conteúdo e fornecerá uma resposta com base nas informações disponíveis nos documentos.
          </p>
        </section>

        {/* Observações */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Observações</h2>
          <p className="text-gray-300 leading-relaxed">
            Esta aplicação <strong>armazena permanentemente</strong> os documentos; cada sessão de consulta é temporária e isolada.
            Para garantir melhores resultados, certifique-se de que os documentos estão claros e bem estruturados.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Documentation;
