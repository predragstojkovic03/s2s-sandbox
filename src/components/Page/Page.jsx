import { AiFillHome } from 'react-icons/ai';

import styles from './Page.module.css';
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';

const Page = ({ children }) => {
  const navigate = useNavigate();

  return (
    <main className={styles.wrapper}>
      <Button className={styles.homeBtn} onClick={() => navigate('/')}>
        <AiFillHome />
      </Button>
      {children}
    </main>
  );
};

export default Page;
