const SET_EDIT_PROFILE_MODAL = "profile/SET_EDIT_PROFILE_MODAL";

const initialState = {
  editProfileModal: false,
};

const setEditProfileModal = (payload) => ({
  type: SET_EDIT_PROFILE_MODAL,
  payload: payload,
});

export const updateEditProfileModal = (payload) => async (dispatch) =>
  dispatch(setEditProfileModal(payload));

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_EDIT_PROFILE_MODAL:
      return { ...state, editProfileModal: action.payload };
    default:
      return state;
  }
}
