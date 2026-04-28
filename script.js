// App.js
import React, { useState, useEffect } from "react";

function App() {
  // useState for managing count state
  const [count, setCount] = useState(0);

  // useState for managing user data
  const [users, setUsers] = useState([]);

  // useEffect for side effect (fetching API data)
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.log("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []); // runs only once when component mounts

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>useState and useEffect Example</h1>

      {/* Counter Section */}
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)} style={{ marginLeft: "10px" }}>
        Decrement
      </button>

      {/* API Data Section */}
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;