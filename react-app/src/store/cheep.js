// constants
const SET_SINGLE_CHEEP = "cheep/SET_SINGLE_CHEEP";
const SET_EDIT_CHEEP = "cheep/SET_EDIT_CHEEP";
const SET_ACTIONS_MENU = "cheep/SET_ACTIONS_MENU";
const SET_UPDATE_TIMELINE = "cheep/SET_UPDATE_TIMELINE";

const initialState = {
  singleCheep: null,
  editCheep: false,
  actionsMenu: false,
  updateTimeline: false,
};

const setCheep = (payload) => ({
  type: SET_SINGLE_CHEEP,
  payload: payload,
});

const setEditCheep = (payload) => ({
  type: SET_EDIT_CHEEP,
  payload: payload,
});

const setActionsMenu = (payload) => ({
  type: SET_ACTIONS_MENU,
  payload: payload,
});

const setUpdateTimeline = (payload) => ({
  type: SET_UPDATE_TIMELINE,
  payload: payload,
});

export const updateTimeline = (payload) => async (dispatch) =>
  dispatch(setUpdateTimeline(payload));

export const actionsMenu = (payload) => async (dispatch) =>
  dispatch(setActionsMenu(payload));

export const singleCheep = (payload) => async (dispatch) =>
  dispatch(setCheep(payload));

export const editCheep = (payload) => async (dispatch) =>
  dispatch(setEditCheep(payload));

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_SINGLE_CHEEP:
      return { ...state, singleCheep: action.payload };
    case SET_EDIT_CHEEP:
      return { ...state, editCheep: action.payload };
    case SET_ACTIONS_MENU:
      return { ...state, actionsMenu: action.payload };
    case SET_UPDATE_TIMELINE:
      return { ...state, updateTimeline: action.payload };
    default:
      return state;
  }
}
