// components
import Nav from '../Components/Nav';
import Header from '../Components/Header';
import Form from '../Components/Form';

// style classes
import styles from './index.module.scss';

const RootLayout = () => {
  return (
    <div className={`${styles['root-layout']}`}>
      <Nav />
      <Header />
      <Form />
    </div>
  );
};

export default RootLayout;
