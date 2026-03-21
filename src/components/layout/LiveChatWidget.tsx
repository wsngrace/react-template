import { useState } from "react";

interface Message {
  text: string;
  sender: "user" | "bot";
}

export default function LiveChatWidget() {

  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hi 👋 How can we help you today?", sender: "bot" }
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);

  function getBotReply(message: string) {
    const msg = message.toLowerCase();

    if (msg.includes("shipping")) {
      return "🚚 Shipping usually takes 3–5 business days.";
    }

    if (msg.includes("order")) {
      return "📦 You can track your order in the Orders page.";
    }

    if (msg.includes("return")) {
      return "🔁 We accept returns within 30 days.";
    }

    if (msg.includes("contact")) {
      return "📧 Email us at support@yourstore.com.";
    }

    return "🤖 Thanks for your message! Our team will reply soon.";
  }

  function sendMessage() {

    if (!input.trim()) return;

    const userMessage: Message = {
      text: input,
      sender: "user"
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Bot typing animation
    setTyping(true);

    setTimeout(() => {

      const botReply: Message = {
        text: getBotReply(userMessage.text),
        sender: "bot"
      };

      setMessages((prev) => [...prev, botReply]);
      setTyping(false);

    }, 1500);

  }

  return (
    <div className="fixed bottom-6 right-6 z-50">

      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="bg-black text-white px-4 py-3 rounded-full shadow-lg"
        >
          💬 Chat
        </button>
      )}

      {open && (
        <div className="w-80 bg-white rounded-xl shadow-xl flex flex-col">

          {/* Header */}
          <div className="bg-black text-white p-3 flex justify-between rounded-t-xl">
            <span>Live Chat</span>
            <button onClick={() => setOpen(false)}>✕</button>
          </div>

          {/* Messages */}
          <div className="p-3 h-64 overflow-y-auto space-y-2 text-sm">

            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 rounded-lg max-w-[80%] ${
                  msg.sender === "user"
                    ? "bg-black text-white ml-auto"
                    : "bg-gray-200"
                }`}
              >
                {msg.text}
              </div>
            ))}

            {/* Typing animation */}
            {typing && (
              <div className="bg-gray-200 p-2 rounded-lg w-16 flex gap-1">
                <span className="animate-bounce">.</span>
                <span className="animate-bounce delay-100">.</span>
                <span className="animate-bounce delay-200">.</span>
              </div>
            )}

          </div>

          {/* Input */}
          <div className="flex border-t">

            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 p-2 text-sm outline-none"
              placeholder="Type message..."
            />

            <button
              onClick={sendMessage}
              className="bg-black text-white px-4"
            >
              Send
            </button>

          </div>

        </div>
      )}

    </div>
  );
}