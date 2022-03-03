import changeTheNumber from "./IncDec";

import { combineReducers } from "redux";


const rootRed = combineReducers({
  changeTheNumber,
//   in a similiar way we can add all the reducers here that we have made in our IncDec file
// Here we have added only one as we only have one function to perform in the application
})

export default rootRed;