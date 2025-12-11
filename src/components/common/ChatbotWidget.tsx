import React, { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MessageSquare, Send, Sparkles, X } from 'lucide-react';

type Message = { id: string; sender: 'user' | 'bot'; text: string };

const starterMessages: Message[] = [
  { id: 'm1', sender: 'bot', text: 'Hi, I am the EdgeUp AI assistant. Want a 30s walkthrough?' },
  { id: 'm2', sender: 'bot', text: 'Ask about adaptive cohorts, alerts, or data privacy.' }
];

const ChatbotWidget: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>(starterMessages);
  const listRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (open) {
      const timeout = setTimeout(() => {
        listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' });
      }, 150);
      return () => clearTimeout(timeout);
    }
    return;
  }, [open]);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages]);

  const glassClasses = useMemo(
    () => 'backdrop-blur-2xl bg-white/70 dark:bg-slate-900/80 border border-white/40 dark:border-white/10 shadow-glass',
    []
  );

  const sendMessage = () => {
    if (!input.trim()) return;
    const userMsg: Message = { id: crypto.randomUUID(), sender: 'user', text: input.trim() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        {
          id: crypto.randomUUID(),
          sender: 'bot',
          text: 'I’m simulating a response. In production, wire this to your chat back-end.'
        }
      ]);
    }, 600);
  };

  return (
    <div className="fixed bottom-5 right-5 z-[1100]">
      <AnimatePresence>
        {open && (
          <motion.div
            key="chat"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 220, damping: 18 }}
            className={`w-80 sm:w-96 rounded-3xl overflow-hidden mb-3 ${glassClasses}`}
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/30 dark:border-white/10">
              <div className="flex items-center gap-2">
                <div className="h-9 w-9 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white">EdgeUp AI</p>
                  <p className="text-xs text-slate-500 dark:text-slate-300">Instant answers</p>
                </div>
              </div>
              <button onClick={() => setOpen(false)} aria-label="Close chat" className="p-2 rounded-full hover:bg-white/40 dark:hover:bg-white/10">
                <X className="h-4 w-4 text-slate-500 dark:text-slate-200" />
              </button>
            </div>

            <div ref={listRef} className="max-h-72 overflow-y-auto px-4 py-3 space-y-3">
              {messages.map(msg => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, x: msg.sender === 'user' ? 24 : -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`px-3 py-2 rounded-2xl text-sm max-w-[80%] ${
                      msg.sender === 'user'
                        ? 'bg-gradient-to-br from-primary-500 to-accent-500 text-white'
                        : 'bg-white/80 dark:bg-slate-800/80 text-slate-900 dark:text-slate-100 border border-white/30 dark:border-white/5'
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="border-t border-white/30 dark:border-white/10 p-3 bg-white/40 dark:bg-slate-900/40">
              <div className="flex items-center gap-2">
                <input
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && sendMessage()}
                  placeholder="Ask about EdgeUp…"
                  className="flex-1 bg-transparent border border-white/40 dark:border-white/10 rounded-2xl px-3 py-2 text-sm text-slate-900 dark:text-white placeholder:text-slate-500 focus:outline-none focus:border-primary-500"
                />
                <button
                  onClick={sendMessage}
                  className="rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 p-2 text-white shadow-lg hover:shadow-xl transition"
                  aria-label="Send message"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileTap={{ scale: 0.96 }}
        whileHover={{ scale: 1.03, y: -1 }}
        onClick={() => setOpen(prev => !prev)}
        className={`relative h-14 w-14 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 text-white shadow-2xl ${open ? 'shadow-primary-500/40' : ''}`}
        aria-label="Open EdgeUp AI chat"
      >
        <MessageSquare className="h-6 w-6 mx-auto" />
        <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-emerald-400 animate-pulse" />
      </motion.button>
    </div>
  );
};

export default ChatbotWidget;
