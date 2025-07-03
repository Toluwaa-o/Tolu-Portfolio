'use client';

import { useState } from 'react';
import { RiChatAiFill } from 'react-icons/ri';
import { IoClose } from 'react-icons/io5';
import GradioChat from './GradioChat';

const ChatBox = () => {
    const [showChat, setShowChat] = useState(false);

    return (
        <>
            <button
                onClick={() => setShowChat(true)}
                className={`${showChat ? '' : 'animate-bounce'} fixed bottom-6 right-6 z-50 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition`}
                aria-label="Open chat"
            >
                <RiChatAiFill size={24} />
            </button>


            {showChat && (
                <div
                    className="fixed bottom-20 right-4 z-40 
                     w-[340px] h-[500px]
                     bg-white border rounded-xl shadow-xl 
                     flex flex-col overflow-hidden"
                >
                    <div className="flex items-center justify-between p-2 bg-blue-600 text-white">
                        <span className="text-sm font-medium">Chat Assistant</span>
                        <button onClick={() => setShowChat(false)} aria-label="Close chat">
                            <IoClose size={20} />
                        </button>
                    </div>

                    <div className="flex-1">
                        <GradioChat />
                    </div>
                </div>
            )}
        </>
    );
};

export default ChatBox;
