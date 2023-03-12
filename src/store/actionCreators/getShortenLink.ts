import { Dispatch } from 'redux';
import Action from '../actionTypes/index';
import API from '../../api';

import {
  getShortenedLinkPendingAction,
  getShortenedLinkSuccessAction,
  getShortenedLinkFailAction,
} from '../actions';

import { ERROR_CODE_MAP } from '../../Components/Form';

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

export const getShortenLink = (enteredLink: string) => {
  return async (dispatch: Dispatch<Action>) => {
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
      }
    } catch (errorCode: any) {
      const errorFeedback = ERROR_CODE_MAP[errorCode];
      dispatch(getShortenedLinkFailAction(errorFeedback));
    }
  };
};
