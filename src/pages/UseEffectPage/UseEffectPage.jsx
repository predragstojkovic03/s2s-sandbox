import { useEffect, useState } from 'react';
import Page from '../../components/Page/Page';
import Button from '../../components/Button/Button';

// import styles from './UseEffectPage.module.css';

const UseEffectPage = () => {
  const [a, setA] = useState(0);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');

  // useEffect(() => {
  //   window.alert('Promenila se promenljiva a');
  // }, [a]);

  useEffect(() => {
    setFullName(firstName + ' ' + lastName);
  }, [firstName, lastName]);

  return (
    <Page>
      <Button onClick={() => setA(a + 1)}>Click me</Button>
      {a}
      <input value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      <input value={lastName} onChange={(e) => setLastName(e.target.value)} />
      {fullName}
    </Page>
  );
};

export default UseEffectPage;
