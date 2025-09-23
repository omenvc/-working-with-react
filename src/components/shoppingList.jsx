export default function ShoppingList() {
  const shoppingList = ["Milk", "Bread", "Eggs", "Cheese", "Butter"];

  return (
    <div>
      <h2>Exercise 1: Shopping List</h2>
      <ul>
        {shoppingList.map((item) => (
          <li
            key={item}
            style={{
              textDecoration: item === "Eggs" ? "line-through" : "none",
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
