import { createStore } from 'redux';
import rootReducer from './reducers/index';

// Importing Redux DevTools Extension
import { composeWithDevTools } from '@redux-devtools/extension';

// Create the store with Redux DevTools Extension
const store = createStore(
    rootReducer,
    composeWithDevTools()
);

export default store;
