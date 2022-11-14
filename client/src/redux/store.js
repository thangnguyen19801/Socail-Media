import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import authReducer from "./reducers/authReducer";
import alertReducer from "./reducers/alertReducer";
import themeReducer from "./reducers/themeReducer";
import profileReducer from "./reducers/profileReducer";
import statusReducer from "./reducers/statusReducer";
import homePostsReducer from "./reducers/postReducer";
import detailPostReducer from "./reducers/detailPostReducer";
import modalReducer from "./reducers/modalReducer";
import discoverReducer from "./reducers/discoverReducer";
import suggestionsReducer from "./reducers/suggestionsReducer";
import socketReducer from "./reducers/socketReducer";
import notifyReducer from "./reducers/notifyReducer";
import messageReducer from "./reducers/messageReducer";
import onlineReducer from "./reducers/onlineReducer";
import callReducer from "./reducers/callReducer";
import peerReducer from "./reducers/peerReducer";

const rootReducer = {
  auth: authReducer,
  alert: alertReducer,
  call: callReducer,
  profile: profileReducer,
  homePosts: homePostsReducer,
  detailPost: detailPostReducer,
  discover: discoverReducer,
  suggestions: suggestionsReducer,
  socket: socketReducer,
  notify: notifyReducer,
  message: messageReducer,
  modal: modalReducer,
  online: onlineReducer,
  peer: peerReducer,
  socket: socketReducer,
  status: statusReducer,
  theme: themeReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

const DataProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default DataProvider;
