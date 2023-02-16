import { useState, useEffect } from "react";

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      const lastMessage = messages[messages.length - 1];
      if (lastMessage && lastMessage.author === "user") {
        setMessages([
          ...messages,
          { author: "robot", text: "Hello from Robot" },
        ]);
      }
    }, 1500);
    return () => clearTimeout(timer);
  }, [messages]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessages([...messages, { author: "user", text: input }]);
    setInput("");
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <textarea
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="input your message..."
        ></textarea>

        <button type="submit">Send</button>
      </form>
      <div>
        {messages.map((message, index) => (
          <div key={index}>{`${message.author} : ${message.text}`}</div>
        ))}
      </div>
    </div>
  );
}
export default App;
