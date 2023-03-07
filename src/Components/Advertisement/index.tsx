// components
import Title from './Title';
import Card from './Card';

// style classes
import styles from './index.module.scss';

const Advertisement = () => {
  return (
    <section className={`${styles['advertisement-container']}`}>
      <Title />
      <Card />
    </section>
  );
};

export default Advertisement;
