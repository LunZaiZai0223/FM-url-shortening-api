// components
import Title from './Title';
import Card from './Card';

// style classes
import styles from './index.module.scss';

const Advertisement = () => {
  return (
    <section className={`${styles['advertisement-container']}`}>
      <div className={`${styles['advertisement-wrapper']}`}>
        <Title />
        <Card />
      </div>
    </section>
  );
};

export default Advertisement;
