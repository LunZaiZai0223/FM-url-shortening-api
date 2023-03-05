// components
import Button from '../Button';

// style classes
import styles from './index.module.scss';

interface Props {
  onSubmit?: Function;
}

const Form = (props: Props) => {
  return (
    <section className={styles.container}>
      <form>
        <div className={`${styles['form-control']}`}>
          <input placeholder="Shorten a link here..." />
          <Button classes={styles.btn}>Shorten It!</Button>
        </div>
      </form>
    </section>
  );
};

export default Form;
