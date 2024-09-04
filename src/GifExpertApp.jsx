import { useState } from 'react';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch', 'Makima']);
  console.log(categories);
  return (
    <>
      {/* Titulo */}
      <h1>GifExpertApp!</h1>

      {/* Input */}
      {/* Listado de items (Gifs) */}
      <ol>
        {categories.map(category => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
      {/* Gif Items */}
    </>
  );
};
