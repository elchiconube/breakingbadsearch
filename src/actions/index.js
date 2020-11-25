export const fetchInitCharacters = () => ({
  type: "FETCH_CHARACTERS",
  payload: {
    request: {
      method: "GET",
      url: `/characters`,
    },
  },
});

export const fetchCharacters = (value) => ({
  type: "FETCH_CHARACTERS",
  payload: {
    request: {
      method: "GET",
      url: `/characters`,
      params: { name: value },
    },
  },
});

export const fetchSuggestions = (value) => ({
  type: "FETCH_SUGGESTIONS",
  payload: {
    request: {
      method: "GET",
      url: `/characters`,
      params: { name: value },
    },
  },
});
