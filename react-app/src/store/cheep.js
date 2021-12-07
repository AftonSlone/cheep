// constants
const SET_SINGLE_CHEEP = "cheep/SET_SINGLE_CHEEP";
const SET_EDIT_CHEEP = "cheep/SET_EDIT_CHEEP";
const SET_ACTIONS_MENU = "cheep/SET_ACTIONS_MENU";
const SET_NEW_CHEEP = "cheep/SET_NEW_CHEEP";
const SET_UPDATE_TIMELINE = "cheep/SET_UPDATE_TIMELINE";
const SET_UPDATE_CHEEPCARD = "cheep/SET_UPDATE_CHEEPCARD";
const SET_NEW_REPLY = "cheep/SET_NEW_REPLY";
const UPDATE_TIMELINE_CHEEP = "cheep/UPDATE_TIMELINE_CHEEP";
const SET_TIMELINE = "cheep/SET_TIMELINE";
const ADD_CHEEP = "cheep/ADD_CHEEP";
const DELETE_CHEEP = "cheep/DELETE_CHEEP";

const initialState = {
  singleCheep: null,
  editCheep: false,
  actionsMenu: false,
  newCheep: false,
  updateTimeline: false,
  updateCheepCard: false,
  timeline: null,
};

const addCheep = (payload) => ({
  type: ADD_CHEEP,
  payload: payload,
});

const newReply = (payload) => ({
  type: SET_NEW_REPLY,
  payload: payload,
});

const deleteCheep = (payload) => ({
  type: DELETE_CHEEP,
  payload: payload,
});

const setCheep = (payload) => ({
  type: SET_SINGLE_CHEEP,
  payload: payload,
});

const setUpdateCheepCard = (payload) => ({
  type: SET_UPDATE_CHEEPCARD,
  payload: payload,
});

const setTimeline = (payload) => ({
  type: SET_TIMELINE,
  payload: payload,
});

const updateTimelineCheep = (payload) => ({
  type: UPDATE_TIMELINE_CHEEP,
  payload: payload,
});

const newCheep = (payload) => ({
  type: SET_NEW_CHEEP,
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

export const setUpdateTimelineCheep = (payload) => async (dispatch) =>
  dispatch(updateTimelineCheep(payload));

export const fetchDeleteCheep = (payload) => async (dispatch) =>
  dispatch(deleteCheep(payload));

export const fetchNewReply = (payload) => async (dispatch) =>
  dispatch(newReply(payload));

export const fetchTimeline = (payload) => async (dispatch) => {
  const res = await fetch(`/api/cheeps/user/${payload.id}/timeline`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  return await dispatch(setTimeline(data.data));
};

export const addNewCheep = (payload) => async (dispatch) =>
  dispatch(addCheep(payload));

export const updateCheepCard = (payload) => async (dispatch) => {
  return dispatch(setUpdateCheepCard(payload));
};

export const updateNewCheep = (payload) => async (dispatch) =>
  dispatch(newCheep(payload));

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
    case ADD_CHEEP:
      return { ...state, timeline: [action.payload, ...state.timeline] };
    case SET_EDIT_CHEEP:
      return { ...state, editCheep: action.payload };
    case SET_NEW_REPLY:
      return {
        ...state,
        singleCheep: {
          ...state.singleCheep,
          replies: [...state.singleCheep.replies, action.payload],
        },
        timeline: state.timeline.map((cheep) => {
          if (cheep.id === action.payload.cheep.id)
            return { ...cheep, replies: [...cheep.replies, action.payload] };
          return cheep;
        }),
      };
    case SET_ACTIONS_MENU:
      return { ...state, actionsMenu: action.payload };
    case SET_UPDATE_TIMELINE:
      return { ...state, updateTimeline: action.payload };
    case SET_NEW_CHEEP:
      return { ...state, newCheep: action.payload };
    case SET_UPDATE_CHEEPCARD:
      return { ...state, updateCheepCard: action.payload };
    case SET_TIMELINE:
      return { ...state, timeline: action.payload };
    case DELETE_CHEEP:
      return {
        ...state,
        timeline: state.timeline.filter(
          (cheep) => cheep.id !== action.payload.id
        ),
        singleCheep: null,
      };
    case UPDATE_TIMELINE_CHEEP:
      if (state.timeline) {
        return {
          ...state,
          timeline: state.timeline.map((cheep) => {
            if (cheep.id === action.payload.id) return action.payload;
            return cheep;
          }),
        };
      }
      return { ...state, timeline: [action.payload] };
    default:
      return state;
  }
}
