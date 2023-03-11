// components
import Button from '../Button';

import API from '../../api';

// style classes
import styles from './index.module.scss';
import { useEffect } from 'react';

interface Props {
  onSubmit?: Function;
}

const Form = (props: Props) => {
  // useEffect(() => {
  //   const queryParam = new URLSearchParams({
  //     url: 'https://jason89521.github.io/URL-Shortening-API/12313j',
  //   });
  //   const requestUrl = `${API.base_url}/shorten?${queryParam}`;
  //   fetch(requestUrl)
  //     .then(data => data.json())
  //     .then(result => {
  //       console.log(result);
  //     });
  // }, []);

  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <form>
          <div className={`${styles['form-control']} ${styles['is-invalid']}`}>
            <input placeholder="Shorten a link here..." />
            <span className={styles.feedback}>Error</span>
            <Button classes={styles.btn}>Shorten It!</Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Form;
