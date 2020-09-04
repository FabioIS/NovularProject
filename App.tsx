import configureStore from './src/redux/reduxStore';
import {Provider} from "react-redux";
import React, {Component} from "react";
import {StatusBar, SafeAreaView, StyleSheet, Platform} from 'react-native';
import IndexNavigation from "./src/navigation/indexNavigation";
import {PersistGate} from "redux-persist/integration/react";

const {store, persistor} = configureStore();

export default class App extends Component {


  render() {
    return (
        <Provider store={store}>
          <PersistGate persistor={persistor}>
              <IndexNavigation/>
          </PersistGate>
        </Provider>
    );
  }

}


const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor:'black',
    paddingTop: Platform.OS === "android" ? 24 : 0
  }
});
