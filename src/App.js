import "./styles.css";
// import List from "./components/List";
// import Counter from "./components/Counter";
// import Checklength from "./components/Checklength";
import Books from "./components/Books";
import BigList from "./components/BigList";

export default function App() {
  return (
    <div className="App">
      <Books />
      <BigList />
    </div>
  );
}
