/* 
action type 必須獨一無二，因為 dispatch action 時每個 reducer 都會有該 action 的存取權，因此如果重複的話就會叫用數個符合的 reducers，讓 redux 資料意外被更新
*/
export enum ActionTypes {
  GET_SHORTENED_LINK_PENDING = 'GET_SHORTENED_LINK_PENDING',
  GET_SHORTENED_LINK_SUCCESS = 'GET_SHORTENED_LINK_SUCCESS',
  GET_SHORTENED_LINK_FAIL = 'GET_SHORTENED_LINK_FAIL',
  SET_COPIED_STATUS = 'SET_COPIED_STATUS',
}

interface ActionPending {
  type: ActionTypes.GET_SHORTENED_LINK_PENDING;
  payload?: null;
}

interface ActionSuccess {
  type: ActionTypes.GET_SHORTENED_LINK_SUCCESS;
  payload: {
    original_link: string;
    share_link: string;
    full_short_link: string;
  };
}

interface ActionFail {
  type: ActionTypes.GET_SHORTENED_LINK_FAIL;
  payload: string;
}

interface ActionSetCopiedStatus {
  type: ActionTypes.SET_COPIED_STATUS;
  payload: number;
}

// 這個會協助 typescript 推斷不同 action 時所帶的 payload 之型別
type Action =
  | ActionPending
  | ActionFail
  | ActionSuccess
  | ActionSetCopiedStatus;

export default Action;
