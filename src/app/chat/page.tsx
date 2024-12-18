"use client"

import { useState, useRef, useEffect, FormEvent } from 'react';
import ReactMarkdown from 'react-markdown';
import axios from 'axios';
import Link from 'next/link';

interface Message {
  text: string;
  fromUser: boolean;
}

const ChatPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [consulta, setInput] = useState('');

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async (e: FormEvent) => {
    e.preventDefault();

    if (!consulta.trim()) {
      return;
    }

    const newMessage: Message = { text: consulta, fromUser: true };
    setMessages((prev) => [...prev, newMessage]);

    setInput('');

    try {
      const response = await axios.post('http://localhost:5000/consulta', {
        consulta: consulta,
      });
  
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
    <>
    <div className="flex flex-col w-screen h-screen p-14 bg-black text-white">
      <div className="flex items-center justify-between p-4 bg-zinc-900 rounded-md mb-4">
        <h1 className="text-xl font-bold">Assistente Virtual - Miles Davis </h1>
        
          <Link href="/" className='text-white px-4 py-2 rounded-md hover:bg-gray-800 hover:text-white'>
            Voltar
          </Link>
        
      </div>

      <div className="flex-grow border border-zinc-900 rounded-md p-4 custom-scrollbar trasi h-[400px] overflow-y-auto bg-black">
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
    <button 
      type="submit" 
      disabled={!consulta.trim()}
      className={`bg-black border border-zinc-700 text-white rounded-md px-4 py-2 
              hover:bg-zinc-800 hover:border-zinc-600 
              focus:outline-none focus:ring-2 focus:ring-zinc-600 transition-all duration-300
              ${!consulta.trim() ? 'opacity-50 cursor-not-allowed' : ''}`} 
              >
      Enviar
    </button>
      </form>
    </div>
    </>
  );
};

export default ChatPage;
