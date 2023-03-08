// components
import Nav from '../Components/Nav';
import Header from '../Components/Header';
import Form from '../Components/Form';
import Links from '../Components/Links';
import Advertisement from '../Components/Advertisement';
import BottomArea from '../Components/BottomArea';
import Footer from '../Components/Footer';

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
      <BottomArea />
      <Footer />
    </div>
  );
};

export default RootLayout;
