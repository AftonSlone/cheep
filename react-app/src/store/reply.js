const SET_REPLY_MODAL = "reply/SET_REPLY_MODAL";
const SET_SINGLE_REPLY = "reply/SET_SINGLE_REPLY";
const SET_REPLY_ACTIONS_MENU = "reply/SET_REPLY_ACTIONS_MENU";
const SET_EDIT_REPLY = "reply/SET_EDIT_REPLY";

const initialState = {
  replyModal: false,
  singleReply: null,
  actionsMenu: false,
  editReply: false,
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

const setEditReply = (payload) => ({
  type: SET_EDIT_REPLY,
  payload: payload,
});

export const updateEditReply = (payload) => async (dispatch) =>
  dispatch(setEditReply(payload));

export const updateReplyActionsMenu = (payload) => async (dispatch) =>
  dispatch(setReplyActionsMenu(payload));

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
    case SET_EDIT_REPLY:
      return { ...state, editReply: action.payload };
    default:
      return state;
  }
}
