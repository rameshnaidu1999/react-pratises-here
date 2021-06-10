import { useState } from "react";

export default function App() {
  const [password, setPassword] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    setPassword(password);
    console.log(password);
  }
  return (
    <div className="App">
      <h3>here we go</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">check password length</button>
      </form>
      <p>lenth of password:</p><h2> {password.length}</h2>
      {password.length < 20 ? (
        <div>weak password</div>
      ) : (
        <div> strong password</div>
      )}
    </div>
  );
}
