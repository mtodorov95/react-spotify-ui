export const initialState = {
  user: null,
  token:
    "BQCuslWOPnk-5bYHFGVTFTvmhfbi_vwnO8SthZWF7u4bdPye6K…CGS0cS8V7lSnCt916t05fNANPYhmvxk4OYMZXye0wXZ5u_-nQ",
  playlists: [],
  playing: false,
  nowPlaying: null,
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    default:
      return state;
  }
};

export default reducer;
