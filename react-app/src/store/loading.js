// constants
const SET_LOADING = 'loading/SET_LOADING';

const setLoading = (loading) => ({
  type: SET_LOADING,
  payload: loading
});

const initialState = { loading: false };

export const isLoading = (state) => async (dispatch) => {
    dispatch(setLoading(state));
  }



export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_LOADING:
      return { loading: action.payload }
    default:
      return state;
  }
}
