import Counter from "./components/Counter";
import PasswordToggle from "./components/PasswordToggle";
import Todo from "./components/Todo";

function App() {
  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h1>Day-2 React Practice</h1>

      <h2>Counter App</h2>
      <Counter />

      <h2>Show/Hide Password</h2>
      <PasswordToggle />

      <h2>Todo App</h2>
      <Todo />
    </div>
  );
}

export default App;
