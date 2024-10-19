"use client";

import { useState, FormEvent } from 'react';

interface Message {
  text: string;
  fromUser: boolean;
}

const ChatPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');

  const sendMessage = async (e: FormEvent) => {
    e.preventDefault();

    const newMessage: Message = { text: input, fromUser: true };
    setMessages((prev) => [...prev, newMessage]);
    
    // Limpa o campo de input após o envio da mensagem
    setInput('');

    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: input }),
    });
    const data = await response.json();

    setMessages((prev) => [...prev, { text: data.reply, fromUser: false }]);
    setInput(data.reply);
  };

  return (
    <div className="flex flex-col w-screen h-screen p-14 bg-black text-white">
      <div className="flex items-center justify-between p-4 bg-zinc-900 rounded-md mb-4">
        <h1 className="text-xl font-bold">Chatbot - AI</h1>
      </div>

      <div className="flex-grow border border-zinc-900 rounded-md p-4 overflow-auto bg-black">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-2 ${msg.fromUser ? 'text-right' : 'text-left'}`}
          >
            <p className={`inline-block px-4 py-2 rounded-lg ${msg.fromUser ? 'bg-zinc-800 text-white' : 'bg-gray-900 text-gray-300'}`}>
              {msg.text}
            </p>
          </div>
        ))}
      </div>

      <form onSubmit={sendMessage} className="flex mt-4">
        <input
          type="text"
          value={input}
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
