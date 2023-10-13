import React, { useRef, useState } from 'react';

import styles from './ToDoList.module.css';
import Button from '../Button/Button';

const ToDoList = ({ title }) => {
  const [list, setList] = useState([]);

  const inputRef = useRef();

  const addItem = () => {
    setList([...list, inputRef.current.value]);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>{title}</div>
      <input ref={inputRef} />
      <Button onClick={addItem}>Add</Button>
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
