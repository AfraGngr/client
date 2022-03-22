import React, { useState } from 'react'
import ListItem from '../components/ListItem/ListItem'
import SearchBar from '../components/SearchBar/SearchBar'

export default function MainPage() {
    const [value, setValue] = useState([]);

    const addTodo = (e, val) => {
      e.preventDefault()
      // console.log(e)
      setValue([...value, val])
  }

    const deleteTodo = (e, text) => {
      console.log('----',e)
      console.log('----',text)
      const newValue = value.filter(el => el !== text)
      setValue(newValue)
    }

    console.log("aaa",value)

  return (
    <div>
        <SearchBar
            addTodo={addTodo}
        />
        {
         value.map((val, idx) => <ListItem 
          key={idx} 
          value={val}
          deleteTodo={deleteTodo}
         />)
        }
       
    </div>
  )
}
