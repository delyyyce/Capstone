import React, { useEffect, useState } from 'react';

function HomePage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Fetch items from the backend
    fetch('http://localhost:5001/api/items')
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <div>
      <h1>Item List</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <a href={`/item/${item.id}`}>{item.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
