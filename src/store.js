import rootRed from "./reducer/index";

import { createStore } from "redux";

const store = createStore(rootRed);

export default store;