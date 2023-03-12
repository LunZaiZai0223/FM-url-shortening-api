import Action, { ActionTypes } from '../actionTypes';
import { Link } from '../links';

/* 
action 只是一個 { type: 'id', payload: {...data passed to reducer } } 的物件，這些函式就是負責建立有這兩個 properties 的 object
 */
export const getShortenedLinkPendingAction = (): Action => {
  return { type: ActionTypes.GET_SHORTENED_LINK_PENDING };
};

export const getShortenedLinkSuccessAction = (data: {
  original_link: string;
  share_link: string;
  full_short_link: string;
}): Action => {
  // payload 會帶資訊給 reducer
  return { type: ActionTypes.GET_SHORTENED_LINK_SUCCESS, payload: data };
};

export const getShortenedLinkFailAction = (errorFeedback: string): Action => {
  return { type: ActionTypes.GET_SHORTENED_LINK_FAIL, payload: errorFeedback };
};

export const setCopiedStatusAction = (targetIndex: number): Action => {
  return { type: ActionTypes.SET_COPIED_STATUS, payload: targetIndex };
};

export const setDataFromLocalStorage = (data: Link[]): Action => {
  return { type: ActionTypes.SET_DATA_FROM_LOCAL_STORAGE, payload: data };
};
