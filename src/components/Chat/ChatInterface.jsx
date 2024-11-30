import React, { useState } from 'react';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';

function ChatInterface() {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'patient', text: 'Hello Doctor, I have a question about my medication.', time: '10:00 AM' },
    { id: 2, sender: 'doctor', text: 'Of course, how can I help you?', time: '10:01 AM' },
  ]);

  const handleSendMessage = (text) => {
    const newMessage = {
      id: messages.length + 1,
      sender: 'doctor',
      text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    setMessages([...messages, newMessage]);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-8rem)] bg-white rounded-lg shadow-md">
      <div className="p-4 border-b">
        <h2 className="text-xl font-semibold">Patient Chat</h2>
      </div>
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
      </div>
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
}

export default ChatInterface;