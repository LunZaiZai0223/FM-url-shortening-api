import { useState } from 'react';

// components
import Button from '../Button';

import API from '../../api';

// style classes
import styles from './index.module.scss';

// redux
import { useDispatch } from 'react-redux';
import {
  getShortenedLinkFailAction,
  getShortenedLinkPendingAction,
  getShortenedLinkSuccessAction,
} from '../../store/actions';

// hooks
import { useTypedSelector } from '../../hooks/useTypedSelector';

interface ShortenApiResponse {
  ok: boolean;
  result: ShortenApiResult;
  error_code?: number;
}

interface ShortenApiResult {
  share_link: string;
  original_link: string;
  full_short_link: string;
}

const ERROR_CODE_MAP: { [key: string]: string } = {
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
  const { errorFeedback, isError, isFetching } = useTypedSelector(
    (state) => state.links
  );
  const [enteredLink, setEnteredLink] = useState<string>('');
  const dispatch = useDispatch();

  const inputLinkHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const value = event.target.value;
    setEnteredLink(value);
  };

  const submitFormHandler = async (event: React.FormEvent): Promise<void> => {
    event.preventDefault();

    const queryParam = new URLSearchParams({
      url: enteredLink,
    });
    const requestUrl = `${API.base_url}/shorten?${queryParam}`;

    try {
      dispatch(getShortenedLinkPendingAction());
      const res = await fetch(requestUrl);
      const { ok, result, error_code }: ShortenApiResponse = await res.json();

      if (!ok) {
        throw error_code;
      } else {
        const { share_link, original_link, full_short_link } = result;
        const formatted = { share_link, original_link, full_short_link };
        dispatch(getShortenedLinkSuccessAction(formatted));
        setEnteredLink('');
      }
    } catch (errorCode: any) {
      const errorFeedback = ERROR_CODE_MAP[errorCode];
      dispatch(getShortenedLinkFailAction(errorFeedback));
    }
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
