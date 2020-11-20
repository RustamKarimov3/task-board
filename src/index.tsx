import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import App from "./view/containers/App";

import rootReducer from "./redux/reducer";

import "./main.scss";

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const renderApp = () =>
    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <App />
            </Provider>
        </React.StrictMode>,
        document.getElementById("root")
    );

if (process.env.NODE_ENV !== "production" && module.hot) {
    module.hot.accept("./redux/reducer", () =>
        store.replaceReducer(rootReducer)
    );
    module.hot.accept("./view/containers/App", renderApp);
}

renderApp();
