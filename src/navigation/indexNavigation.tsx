import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {Router, Scene} from 'react-native-router-flux'
import SearchScreen from "../modules/searchSreen/searchScreen";
import UserDetailView from "../modules/userDetailView/userDetailView";
import RepoAndFollowersView from "../modules/userDetailView/repoAndFollowersView";

export default class IndexNavigation extends Component {
    render() {
        return (
            <View style={styles.navigationContainer}>
                <Router>
                    <Scene key="root">
                        <Scene
                            key="SearchScreen"
                            component={SearchScreen}
                            initial
                            hideNavBar
                        />
                        <Scene
                            key="UserDetail"
                            component={UserDetailView}
                            hideNavBar
                        />
                        <Scene
                            key="RepoAndFollowers"
                            component={RepoAndFollowersView}
                            hideNavBar
                        />
                    </Scene>
                </Router>
            </View>
        );
    }
}

let styles = StyleSheet.create({
    navigationContainer: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0, 0.1)'
    }
});
