import reducer, { initialState } from "./index";

describe("Reducer", () => {
  it("initialState should be like state", () => {
    expect(
      reducer(undefined, {
        type: null,
        payload: null,
      })
    ).toEqual(initialState);
  });

  it("should change isLoading when the fetch is triggered", () => {
    expect(
      reducer(
        {
          homepage: {
            isLoading: null,
            suggestions: [],
          },
        },
        {
          type: "FETCH_CHARACTERS",
        }
      )
    ).toEqual({
      homepage: {
        isLoading: true,
        suggestions: [],
      },
    });
  });

  it("should set isLoading to false and assign data", () => {
    expect(
      reducer(
        {
          homepage: {
            isLoading: true,
            characters: [],
            suggestions: [],
          },
        },
        {
          type: "FETCH_CHARACTERS_SUCCESS",
          payload: {
            data: [
              {
                id: 1,
              },
            ],
          },
        }
      )
    ).toEqual({
      homepage: {
        characters: [{ id: 1 }],
        isLoading: false,
        suggestions: [],
      },
    });
  });
});
