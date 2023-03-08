// components
import Button from '../Button';

// styles classes
import styles from './index.module.scss';

const BottomArea = () => {
  return (
    <section className={`${styles['bottom-container']}`}>
      <h2>Boost your links today</h2>
      <Button classes={styles.btn}>Get Started</Button>
    </section>
  );
};

export default BottomArea;
