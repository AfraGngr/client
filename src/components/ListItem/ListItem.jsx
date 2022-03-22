import React, { useState } from 'react';
import { 
  CheckCircleOutlined,
  EditOutlined,
  DeleteFilled
} from '@ant-design/icons';
import styles from './ListItem.module.css'

export default function ListItem({value, deleteTodo}) {
  const [done, setDone] = useState(false);

  const doneTodo = () => {
    setDone(!done)
  }

  return (
    <div className={styles.container} >
      <div className={done ? styles.done : styles.todoItem} >{value}</div>
      <div>
        <EditOutlined style={{color: 'orange'}} className={styles.icons} />
        <CheckCircleOutlined
          onClick={doneTodo}
          style={{color: 'green'}} 
          className={styles.icons} 
        />
        <DeleteFilled
          onClick={(e) => deleteTodo(e, value)} 
          style={{color: 'red'}}  
          className={styles.icons}
        />
      </div>
    </div>
  )
}
