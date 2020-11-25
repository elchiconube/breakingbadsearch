import * as actions from "./index";

describe("Actions", () => {
  it("should fetch default characters", () => {
    expect(actions.fetchInitCharacters()).toEqual({
      type: "FETCH_CHARACTERS",
      payload: {
        request: {
          method: "GET",
          url: "/characters",
        },
      },
    });
  });
});
