import styles from './Home.module.css';

import logo from '../../images/s2slogo.a7c71fc51f11be18a9d6.png';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const navigate = useNavigate();

  return (
    <main className={styles.wrapper}>
      <div className={styles.heading}>
        <img src={logo} alt='S2S Logo' /> SANDBOX
      </div>
      <div className={styles.buttonsWrapper}>
        <Button onClick={() => navigate('/counter')}>State: Counter</Button>
        <Button onClick={() => navigate('/to-do')}>State: To do</Button>
        <Button onClick={() => navigate('/use-effect')}>useEffect</Button>
      </div>
    </main>
  );
};
