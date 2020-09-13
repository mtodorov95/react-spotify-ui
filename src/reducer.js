export const initialState = {
  user: null,
  token: null,
  playlists: [],
  shownPlaylist: null,
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
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_SHOWN_PLAYLIST":
      return {
        ...state,
        shownPlaylist: action.playlist,
      };
    default:
      return state;
  }
};

export default reducer;
