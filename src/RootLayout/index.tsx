// components
import Nav from '../Components/Nav';
import Header from '../Components/Header';
import Form from '../Components/Form';
import Links from '../Components/Links';
import Advertisement from '../Components/Advertisement';

// style classes
import styles from './index.module.scss';

const RootLayout = () => {
  return (
    <div className={`${styles['root-layout']}`}>
      <Nav />
      <Header />
      <Form />
      <Links />
      <Advertisement />
    </div>
  );
};

export default RootLayout;
