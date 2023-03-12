import { useState } from 'react';

// components
import Button from '../Button';

// style classes
import styles from './index.module.scss';

// redux
import { getShortenLink } from '../../store/actionCreators/getShortenLink';

// hooks
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useTypedDispatch } from '../../store';

export const ERROR_CODE_MAP: { [key: string]: string } = {
  '1': 'No url parameter set.',
  '2': 'This is not a valid URL.',
  '3': 'Rate limit exceeded. Wait a second and try again.',
  '4': 'IP-address has been blocked.',
  '5': 'shrtcode code already taken/in use.',
  '6': 'Unknown error.',
  '7': 'No code specified ("code" parameter is empty).',
  '8': 'Invalid code submitted.',
  '9': 'Missing required parameters.',
  '10': 'Trying to shorten a disallowed Link.',
};

const Form = () => {
  console.log('[form-render]');
  const { errorFeedback, isError, isFetching } = useTypedSelector(
    (state) => state.links
  );
  const [enteredLink, setEnteredLink] = useState<string>('');
  // const dispatch = useDispatch();
  const dispatch = useTypedDispatch();

  const inputLinkHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const value = event.target.value;
    setEnteredLink(value);
  };

  const submitFormHandler = (event: React.FormEvent): void => {
    event.preventDefault();
    dispatch(getShortenLink(enteredLink));
  };

  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <form onSubmit={submitFormHandler}>
          <div
            className={`${styles['form-control']} ${
              isError ? styles['is-invalid'] : ''
            }`}
          >
            <input
              placeholder="Shorten a link here..."
              value={enteredLink}
              onChange={inputLinkHandler}
            />
            {isError && (
              <span className={styles.feedback}>{errorFeedback}</span>
            )}
            <Button classes={styles.btn} type={'submit'} disabled={isFetching}>
              {isFetching ? 'Loading...' : 'Shorten It!'}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Form;
