import {createStore} from 'redux';
import {appReducers} from "./index";

import {persistStore, persistReducer, persistCombineReducers} from 'redux-persist';
import AsyncStorage from "@react-native-community/async-storage";

// Note: this API requires redux@>=3.1.0
const config = {
    key: 'root',
    storage: AsyncStorage
};

const reducers = persistReducer(config, appReducers);
export const store = createStore(reducers);

export default function configureStore() {

    let persistor = persistStore(store);

    return {store, persistor};


}
