const SET_EDIT_PROFILE_MODAL = "profile/SET_EDIT_PROFILE_MODAL";
const SET_PROFILE_USER = "profile/SET_PROFILE_USER"

const initialState = {
  editProfileModal: false,
  user: null
};

const setEditProfileModal = (payload) => ({
  type: SET_EDIT_PROFILE_MODAL,
  payload: payload,
});

const setUser = (payload) => ({
  type: SET_PROFILE_USER,
  payload: payload,
})

export const updateEditProfileModal = (payload) => async (dispatch) =>
  dispatch(setEditProfileModal(payload));

  export const fetchProfileUser = (id) => async (dispatch) => {
    const res = await fetch(`/api/users/${id}`);
    const data = await res.json();
    dispatch(setUser(data));
  };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_EDIT_PROFILE_MODAL:
      return { ...state, editProfileModal: action.payload };
    case SET_PROFILE_USER:
      return { ...state, user: action.payload}
    default:
      return state;
  }
}
