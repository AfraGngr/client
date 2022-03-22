import React, { useRef, useState } from 'react';
import styles from './SearchBar.module.css';

export default function SearchBar({addTodo}) {
  // console.log('yinelendi');
  // const [input, setInput] = useState('');

  // const handleInputChange = (e) => {
  //   setInput(e.target.value);
  // }

  // inputun son değerini almamız yeterli olduğu için onChange'de useRef ile yakalayacağız.
  const inputRef = useRef();
 
  const handleInputChange = (e) => {
      inputRef.current.value = e.target.value;
      // console.log(inputRef)
  }

  return (
    <form onSubmit={(e) => addTodo(e, inputRef.current.value)}>
      <input 
        ref={inputRef}
        onChange={handleInputChange} />
      <button>Add</button>
    </form>
  )
}
