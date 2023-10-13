import { useState } from 'react';
import styles from './Counter.module.css';
import Button from '../Button/Button';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.wrapper}>
      <div className={styles.count}>{count}</div>
      <Button onClick={() => setCount((prev) => prev + 1)}>Add</Button>
    </div>
  );
};

export default Counter;
