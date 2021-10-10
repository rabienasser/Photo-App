import { CHANGE_THEME } from "./types";

const themeReducer = (state = { light: true }, action) => {
   switch (action.type) {
      case CHANGE_THEME:
         return {
            light: !state.light,
         };
      default:
         return state;
   }
};

export default themeReducer;
