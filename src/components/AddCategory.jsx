import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState('');

  const onInputChange = (evento) => {
    setInputValue(evento.target.value);
  };

  const onSubmitForm = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return; //no hay nada, return!

    //Yo lo hice de otra manera mas corta, fernando opto por el camino largo. Se anota igual.
    //setCategories(categories => [inputValue, ...categories]);

    onNewCategory(inputValue.trim());
    setInputValue('');
  };

  return (
    <form action="" onSubmit={onSubmitForm}>
      {' '}
      {/*Recordar que esto es lo mismo que onSubmit = {(event)=> onSubmit(event)} */}
      <input
        type="text"
        placeholder="Buscar Gif 🔎"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
