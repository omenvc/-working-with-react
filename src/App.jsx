// src/App.jsx
import "./App.css";
import ShoppingList from "./components/shoppingList";
import ProductList from "./components/ProductList";
import MenuCategories from "./components/MenueCategory";
import BookList from "./components/BookList";
import AnimalFilter from "./components/AnimalFilter";
import StudentGroups from "./components/StudentGroup";
import MessageList from "./components/MessageList";

function App() {
  return (
    <div className="app-container">
      <h1>Working with React - Mapping Techniques</h1>

      <section>
        <ShoppingList />
      </section>

      <section>
        <ProductList />
      </section>

      <section>
        <MenuCategories />
      </section>

      <section>
        <BookList />
      </section>

      <section>
        <AnimalFilter />
      </section>

      <section>
        <StudentGroups />
      </section>

      <section>
        <MessageList />
      </section>
    </div>
  );
}

export default App;
