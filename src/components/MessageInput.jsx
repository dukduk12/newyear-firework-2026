export default function MessageInput({ message, setMessage }) {
  return (
    <textarea
      className="msg-input"
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      placeholder="wish your new year message here..."
    />
  );
}
