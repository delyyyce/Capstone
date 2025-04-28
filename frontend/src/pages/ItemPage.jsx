import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ItemPage() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    // Fetch item details by ID
    fetch(`http://localhost:5001/api/items/${id}`)
      .then((response) => response.json())
      .then((data) => setItem(data));
  }, [id]);

  if (!item) return <div>Loading...</div>;

  return (
    <div>
      <h1>{item.name}</h1>
      <p>{item.description}</p>
      <p>Average Rating: {item.avgRating}</p>
    </div>
  );
}

export default ItemPage;
