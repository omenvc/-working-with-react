export default function MessageList() {
  const messages = [];

  return (
    <div>
      <h2>Exercise 7: Message List</h2>
      {messages.length === 0 ? (
        <p>No new messages</p>
      ) : (
        <ul>
          {messages.map((msg, i) => (
            <li key={i}>{msg}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
