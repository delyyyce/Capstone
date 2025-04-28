import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch('http://localhost:5001/api/items');
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error('Error fetching items:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  if (loading) return <p>Loading items...</p>;
  if (!items.length) return <p>No items found.</p>;

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ textAlign: 'center' }}>Browse Items</h1>
      {items.map((item) => (
        <div 
          key={item.id}
          style={{
            border: '1px solid #ccc',
            padding: '15px',
            borderRadius: '8px',
            marginBottom: '20px',
            backgroundColor: '#f9f9f9'
          }}
        >
          <Link to={`/item/${item.id}`} style={{ textDecoration: 'none', color: '#333' }}>
            <h3>{item.name}</h3>
          </Link>
          <p>{item.shortDescription}</p>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
