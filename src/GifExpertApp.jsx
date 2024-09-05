import { useState } from 'react';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch', 'Makima']);

  const onAddCategory = () => {
    const nuevaCategoria = ['Slam dunk', ...categories];
    setCategories(nuevaCategoria);
  };
  return (
    <>
      {/* Titulo */}
      <h1>GifExpertApp!</h1>

      {/* Input */}
      {/* Listado de items (Gifs) */}
      <button onClick={onAddCategory}>Agregar</button>
      <ol>
        {categories.map(category => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
      {/* Gif Items */}
    </>
  );
};
