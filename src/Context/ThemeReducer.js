const ThemeReducer = (state, action) => {
  switch (action) {
    case "toggle":
      return {
        state,
        darkMode: !state.darkMode,
      };

    default:
      return {
        state,
        darkMode: state,
      };
  }
};

export default ThemeReducer;
