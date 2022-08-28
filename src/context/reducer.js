export const initialState = {
  data: {},
  dataKeys: [],
  selectedKey: "",
};

export const actionTypes = {
  SET_DATA: "setData",
  SET_KEY: "setKey",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_DATA:
      return {
        ...state,
        data: action.data,
        dataKeys: action.dataKeys,
      };
    case actionTypes.SET_KEY:
      return {
        ...state,
        selectedKey: action.selectedKey,
      };
    default:
      break;
  }
};
