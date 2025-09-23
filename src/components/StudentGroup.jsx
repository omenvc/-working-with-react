export default function StudentGroups() {
  const students = [
    { id: 1, name: "Alice", grade: "A" },
    { id: 2, name: "Bob", grade: "B" },
    { id: 3, name: "Charlie", grade: "A" },
    { id: 4, name: "David", grade: "C" },
  ];

  const grouped = students.reduce((acc, student) => {
    if (!acc[student.grade]) acc[student.grade] = [];
    acc[student.grade].push(student);
    return acc;
  }, {});

  return (
    <div>
      <h2>Exercise 6: Student Groups</h2>
      {Object.keys(grouped).map((grade) => (
        <div key={grade}>
          <h3>Grade {grade}</h3>
          <ul>
            {grouped[grade].map((s) => (
              <li key={s.id}>{s.name}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
