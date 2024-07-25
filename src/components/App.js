import React, { useState, useContext, createContext } from 'react';

// Create a context for authentication
const AuthContext = createContext();

function App() {
  const [user, setUser] = useState({ name: '', isAuthenticated: false });
  const [items, setItems] = useState([]);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <div className="App">
        <LoginLogout />
        <p id="current-user">
          Current user: {user.name}, isAuthenticated: {user.isAuthenticated ? 'Yes' : 'No'}
        </p>
        <ItemInput items={items} setItems={setItems} />
        <ItemList items={items} setItems={setItems} />
      </div>
    </AuthContext.Provider>
  );
}

function LoginLogout() {
  const { user, setUser } = useContext(AuthContext);

  const login = () => setUser({ name: 'rohan', isAuthenticated: true });
  const logout = () => setUser({ name: '', isAuthenticated: false });

  return (
    <div>
      <button id="login-btn" onClick={login}>Login</button>
      <button id="signout" onClick={logout}>Signout</button>
    </div>
  );
}

function ItemInput({ items, setItems }) {
  const [input, setInput] = useState('');

  const addItem = () => {
    if (input) {
      setItems([...items, input]);
      setInput('');
    }
  };

  return (
    <div>
      <input
        id="shopping-input"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addItem}>Add</button>
      <button id="clear-list" onClick={() => setItems([])}>Clear</button>
    </div>
  );
}

function ItemList({ items, setItems }) {
  const removeItem = (itemToRemove) => {
    setItems(items.filter(item => item !== itemToRemove));
  };

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index} id={`item-${item}`}>
          {item}
          <button id={`remove-${item}`} onClick={() => removeItem(item)}>Remove</button>
        </li>
      ))}
    </ul>
  );
}

export default App;
