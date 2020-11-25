export const initialState = {
  homepage: {
    characters: [],
    suggestions: [],
    isLoading: null,
    isSearchLoading: null,
  },
};

const reducer = (state = initialState, { type, payload, ...action }) => {
  switch (type) {
    case "FETCH_CHARACTERS":
      return {
        ...state,
        homepage: {
          ...state.homepage,
          suggestions: [],
          isLoading: true,
        },
      };
    case "FETCH_CHARACTERS_SUCCESS":
      return {
        ...state,
        homepage: {
          ...state.homepage,
          characters: payload.data,
          suggestions: [],
          isLoading: false,
        },
      };
    case "FETCH_CHARACTERS_FAIL":
      return {
        ...state,
        homepage: {
          ...state.homepage,
          characters: null,
          suggestions: [],
          isLoading: false,
        },
      };

    case "FETCH_SUGGESTIONS":
      return {
        ...state,
        homepage: {
          ...state.homepage,
          isSearchLoading: true,
        },
      };
    case "FETCH_SUGGESTIONS_SUCCESS":
      return {
        ...state,
        homepage: {
          ...state.homepage,
          suggestions: payload.data,
          isSearchLoading: false,
        },
      };
    case "FETCH_SUGGESTIONS_FAIL":
      return {
        ...state,
        homepage: {
          ...state.homepage,
          suggestions: null,
          isSearchLoading: false,
        },
      };
    default:
      return state;
  }
};

export default reducer;
