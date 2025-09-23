export default function MenuCategories() {
  const menu = [
    { category: "Fruits", items: ["Apple", "Banana", "Orange"] },
    { category: "Vegetables", items: ["Carrot", "Spinach"] },
  ];

  return (
    <div>
      <h2>Exercise 3: Menu Categories</h2>
      {menu.map((section) => (
        <div key={section.category} style={{ marginBottom: "1rem" }}>
          <h3>{section.category}</h3>
          <ul>
            {section.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
