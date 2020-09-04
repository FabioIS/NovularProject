import React, {FunctionComponent} from "react";
import {useSelector} from "react-redux";
import {View, Text, FlatList} from "react-native";
import {userSelector} from "../../redux/user/selectors";
import {UserRow} from "../searchSreen/elements/UserRow";
import {repAndFollStyles as styles} from "../../styles";

export const RepoAndFollowersView: FunctionComponent<any> = (props) => {
    const type = props.data;
    const userReducer = useSelector(userSelector);
    const {userFollowers, userRepos, user} = userReducer;
    const data = type === 'follower' ? userFollowers : userRepos;

    // @ts-ignore
    const renderItem = ({item}) => (
        type === 'follower' ? <UserRow user={{login: item.login, avatar_url: item.avatar_url}}/> :
            <UserRow user={{login: item.name, avatar_url: item.avatar_url}}/>
    );

    // @ts-ignore
    return (
        <View style={{flex: 1}}>
            <Text style={styles.title}>{user.login} {type === 'follower' ? "followers" : "repositories"}</Text>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={row => row.id}
            />
        </View>
    )

};


export default RepoAndFollowersView;



