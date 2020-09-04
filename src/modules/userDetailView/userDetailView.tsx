import React, {FunctionComponent} from "react";
import {useSelector} from "react-redux";
import {Image, View, Text, TouchableOpacity} from "react-native";
import {userSelector} from "../../redux/user/selectors";
import {Actions} from "react-native-router-flux";
import {userDetailStyles as styles} from "../../styles";

export const UserDetailView: FunctionComponent<any> = () => {

    const userReducer = useSelector(userSelector);
    const {user, userInfo} = userReducer;

    return (
        <View style={{flex: 1}}>
            <View style={styles.headAndFooter}>
                <Image source={{uri: user.avatar_url}} style={styles.image}/>
                <View style={styles.tittleContainer}>
                    <Text style={styles.tittle}>{user.login}</Text>
                </View>
            </View>
            <View style={{flex: 5}}>
                <Text style={styles.information}>Information</Text>
                <Text style={[styles.userInfo, {fontWeight: 'bold'}]}>Full Name:</Text><Text
                style={styles.userInfo}>  {userInfo.name}</Text>
                <Text style={[styles.userInfo, {fontWeight: 'bold'}]}>Company: </Text><Text
                style={styles.userInfo}> {userInfo.company}</Text>
                <Text style={[styles.userInfo, {fontWeight: 'bold'}]}>Location: </Text><Text
                style={styles.userInfo}> {userInfo.location}</Text>
            </View>
            <View style={[styles.headAndFooter, styles.footer]}>
                <TouchableOpacity style={styles.buttons} onPress={() => Actions.RepoAndFollowers("repo")}
                                  disabled={userInfo.public_repos === 0}>
                    <Text
                        style={{fontWeight: 'bold'}}>{userInfo.public_repos} {userInfo.public_repos === 1 ? "repository" : "repositories"}</Text>
                    <Text>Click to view all</Text>

                </TouchableOpacity>
                <TouchableOpacity style={styles.buttons} onPress={() => Actions.RepoAndFollowers("follower")}
                                  disabled={userInfo.followers === 0}>
                    <Text
                        style={{fontWeight: 'bold'}}>{userInfo.followers} {userInfo.followers === 1 ? "follower" : "followers"}</Text>
                    <Text>Click to view all</Text>
                </TouchableOpacity>
            </View>
        </View>
    )

};


export default UserDetailView;


