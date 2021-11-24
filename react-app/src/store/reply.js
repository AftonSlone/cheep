const SET_REPLY_MODAL = "reply/SET_REPLY_MODAL";
const SET_SINGLE_REPLY = "reply/SET_SINGLE_REPLY";
const SET_REPLY_ACTIONS_MENU = "reply/SET_REPLY_ACTIONS_MENU";

const initialState = {
  replyModal: false,
  singleReply: null,
  actionsMenu: false,
};

const setReplyModal = (payload) => ({
  type: SET_REPLY_MODAL,
  payload: payload,
});

const setSingleReply = (payload) => ({
  type: SET_SINGLE_REPLY,
  payload: payload,
});

const setReplyActionsMenu = (payload) => ({
  type: SET_REPLY_ACTIONS_MENU,
  payload: payload,
});

export const updateReplyActionsMenu = (payload) => async (dispatch) =>
  dispatch(updateReplyActionsMenu(payload));

export const updateSingleReply = (payload) => async (dispatch) =>
  dispatch(setSingleReply(payload));

export const updateReplyModal = (payload) => async (dispatch) =>
  dispatch(setReplyModal(payload));

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_REPLY_MODAL:
      return { ...state, replyModal: action.payload };
    case SET_SINGLE_REPLY:
      return { ...state, singleReply: action.payload };
    case SET_REPLY_ACTIONS_MENU:
      return { ...state, actionsMenu: action.payload };
    default:
      return state;
  }
}
