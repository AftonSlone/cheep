const SET_REPLY_MODAL = "reply/SET_REPLY_MODAL";
const SET_SINGLE_REPLY = "reply/SET_SINGLE_REPLY";

const initialState = {
  replyModal: false,
  singleReply: null,
};

const setReplyModal = (payload) => ({
  type: SET_REPLY_MODAL,
  payload: payload,
});

const setSingleReply = (payload) => ({
  type: SET_SINGLE_REPLY,
  payload: payload,
});

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
    default:
      return state;
  }
}
