const ThemeReducer = (state, action) => {
  // console.log(action.type)
  switch (action.type) {
    case "toggle":
      return {
        darkMode: !state.darkMode,
      };

    default:
      return state;
    
  }
};

export default ThemeReducer;
