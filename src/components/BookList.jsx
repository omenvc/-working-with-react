export default function BookList() {
  const books = ["React Basics", "Learning TypeScript", "Advanced JavaScript"];

  return (
    <div>
      <h2>Exercise 4: Book List</h2>
      <ol>
        {books.map((title) => (
          <li key={title}>{title}</li>
        ))}
      </ol>
    </div>
  );
}
