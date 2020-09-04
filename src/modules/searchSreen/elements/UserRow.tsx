import {Image, TouchableOpacity, View, Text} from "react-native";
import React from "react";
import {userRowStyles as styles} from "../../../styles";

interface UserRowProps {
    user: User,
    onPress?: (user: User) => void
}

export const UserRow = (props: UserRowProps) => {
    const buttonHomeScreen =
        <TouchableOpacity style={styles.userContainer}
                           onPress={() => props.onPress(props.user)}>
            <View style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
                <Image style={styles.image} source={{uri: props.user.avatar_url}}/>
                <Text style={styles.text}>{props.user.login}</Text>
            </View>
        </TouchableOpacity>;

    const buttonUserDetail =
        <View style={styles.userContainer}>
            <View style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
                {props.user.avatar_url === undefined ?
                    <Image style={styles.image} source={require('../../../assets/gitHubImage.png')}/> :
                    <Image style={styles.image} source={{uri: props.user.avatar_url}}/>}
                <Text style={styles.text}>{props.user.login}</Text>
            </View>
        </View>

    return (
        props.onPress !== undefined ? buttonHomeScreen : buttonUserDetail
    )
};


