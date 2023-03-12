import Action, { ActionTypes } from '../actionTypes';

interface LinksReducerState {
  isFetching: boolean;
  isError: boolean;
  errorFeedback: string;
  links: Link[];
}

export interface Link {
  original_link: string;
  share_link: string;
  full_short_link: string;
  copied_status: boolean;
}

const INIT_STATE: LinksReducerState = {
  isFetching: false,
  isError: false,
  errorFeedback: '',
  links: [],
};

const linksReducer = (
  state: LinksReducerState = INIT_STATE,
  action: Action
): LinksReducerState => {
  const { type, payload } = action;
  switch (type) {
    case ActionTypes.GET_SHORTENED_LINK_PENDING:
      return {
        ...state,
        isFetching: true,
        isError: false,
        errorFeedback: '',
      };

    case ActionTypes.GET_SHORTENED_LINK_FAIL:
      return {
        ...state,
        isError: true,
        isFetching: false,
        errorFeedback: payload,
      };

    case ActionTypes.GET_SHORTENED_LINK_SUCCESS:
      return {
        ...state,
        isError: false,
        isFetching: false,
        errorFeedback: '',
        links: [...state.links, { ...payload, copied_status: false }],
      };

    case ActionTypes.SET_COPIED_STATUS:
      // immutable way update state
      return {
        ...state,
        links: state.links.map((item, index) => {
          const updatedItem = { ...item };
          if (index === payload) {
            updatedItem.copied_status = true;
          } else {
            updatedItem.copied_status = false;
          }

          return updatedItem;
        }),
      };

    case ActionTypes.SET_DATA_FROM_LOCAL_STORAGE:
      return {
        ...state,
        links: payload,
      };

    default:
      return state;
  }
};

export default linksReducer;
