const ThemeReducer = (state, action) => {
  switch (action.type) {
    case "toggle":
      return {
        // state,
        darkMode: !state.darkMode,
      };

    default:
      // return {
      //   // state,
      //   // darkMode: state.darkMode,
      // };

      return state;
    
  }
};

export default ThemeReducer;
