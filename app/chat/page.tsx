"use client"

import { useState, useRef, useEffect, FormEvent } from 'react';
import ReactMarkdown from 'react-markdown';
import axios from 'axios';

interface Message {
  text: string;
  fromUser: boolean;
}

const ChatPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [consulta, setInput] = useState('');

  // Crie uma referência para o container de mensagens
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // Função para rolar automaticamente para o final
  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Chame o scroll para o final sempre que as mensagens mudarem
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // const formatResposta = (resposta: string) => {
  //   // Quebra a string nas quebras de linha e transforma os asteriscos em listas HTML
  //   const formattedText = resposta
  //     .split('\n') // Separa pelas quebras de linha
  //     .map((line, index) => {
  //       // Verifica se a linha começa com um asterisco (lista)
  //       if (line.startsWith('*')) {
  //         return <li key={index}>{line.replace('* ', '')}</li>;
  //       }
  //       return <p key={index}>{line}</p>;
  //     });
  
  //   return <div>{formattedText}</div>;
  // };

  const sendMessage = async (e: FormEvent) => {
    e.preventDefault();

    const newMessage: Message = { text: consulta, fromUser: true };
    setMessages((prev) => [...prev, newMessage]);

    setInput('');

    try {
      const response = await axios.post('http://localhost:5000/consulta', {
        consulta: consulta,
      });
  
      // console.log("Resposta completa recebida com axios:", response);
      // console.log("Dados recebidos:", response.data.resposta);

    if (response.data.resposta) {
      setMessages((prev) => [...prev, { text: response.data.resposta, fromUser: false }]);
    } else {
      setMessages((prev) => [...prev, { text: "Erro ao processar a resposta.", fromUser: false }]);
    }
  
    } catch (error) {
      console.error("Erro ao conectar à API:", error);
      setMessages((prev) => [...prev, { text: "Erro ao conectar à API.", fromUser: false }]);
    }    
  };

  return (
    <div className="flex flex-col w-screen h-screen p-14 bg-black text-white">
      <div className="flex items-center justify-between p-4 bg-zinc-900 rounded-md mb-4">
        <h1 className="text-xl font-bold">Assistente Virtual - FE!N </h1>
      </div>

      <div className="flex-grow border border-zinc-900 rounded-md p-4 custom-scrollbar h-[400px] overflow-y-auto bg-black">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-2 ${msg.fromUser ? 'text-right' : 'text-left'}`}
          >
            {msg.fromUser ? (
              <p className="inline-block px-4 py-2 rounded-lg bg-zinc-800 text-white">
                {msg.text}
              </p>
            ) : (
              <div className="inline-block px-4 py-2 rounded-lg bg-gray-900 text-gray-300">
                <ReactMarkdown>{msg.text}</ReactMarkdown>
              </div>
            )}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={sendMessage} className="flex mt-4">
        <input
          type="text"
          value={consulta}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Digite sua mensagem..."
          className="flex-grow bg-zinc-900 text-white rounded-md p-3 mr-2 border-none focus:outline-none"
        />
        <button type="submit" className="bg-black border border-zinc-700 text-white rounded-md px-4 py-2">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default ChatPage;
