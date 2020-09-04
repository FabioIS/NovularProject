import React, {FunctionComponent, useState, useEffect} from "react";
import {FlatList, Text, View} from "react-native";
import {normalize, SearchBar} from "react-native-elements";
import UserService from "../../service/userService";
import {UserRow} from "./elements/UserRow"
// @ts-ignore
import Pagination from "react-native-pagination"
import {useDispatch, useSelector} from "react-redux";
import {setUser} from "../../redux/user/actions";
import {userSelector} from "../../redux/user/selectors";
import {Actions} from "react-native-router-flux";
import userService from "../../service/userService";
import {homeScreenStyles as styles} from "../../styles";



interface SearchScreenState {
    textToSearch: string,
    userList: User[],
    viewableItems: any,
}


export const SearchScreen: FunctionComponent<SearchScreenState> = () => {
    const [textToSearch, setText] = useState('');
    const [userList, setUserList] = useState([]);
    const [viewableItems, setViewable] = useState([]);
    const dispatch = useDispatch();
    const userReducer = useSelector(userSelector);
    let reference = null;

    useEffect(() => {
        UserService.searchUsers(textToSearch).then(response => setUserList(response.items));
    }, [textToSearch]);


    const userDetail = (user: User) => {
        dispatch(setUser(user));
        userService.getFollowers(user.login, dispatch);
        userService.getRepos(user.login, dispatch);
        userService.getInfo(user.login, dispatch);
        Actions.UserDetail()
    };

    const onViewableItemsChanged = React.useRef(({viewableItems}) => {
        setViewable(viewableItems)
    });

    // @ts-ignore
    const renderItem = ({item}) => (
        <UserRow user={item} onPress={userDetail}/>
    );


    return (
        <View style={{flex: 1}}>
            <SearchBar
                placeholder="Search an user..."
                value={textToSearch}
                onChangeText={(value) => setText(value)}
            />

            <View style={{flex: 1}}>

                <FlatList
                    data={userList}
                    ref={ref => reference = ref}
                    renderItem={renderItem}
                    keyExtractor={user => user.login}
                    ListEmptyComponent={
                        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 50}}>
                            <Text style={styles.emptyMessage}>
                                Type the name of the user you are looking for </Text>
                        </View>}
                    onViewableItemsChanged={onViewableItemsChanged.current}
                />

                <Pagination
                    listRef={reference}
                    paginationVisibleItems={viewableItems}
                    paginationItems={userList}
                    paginationItemPadSize={3}
                    horizontal
                    dotIconSizeActive={normalize(20)}
                    dotIconSizeNotActive={normalize(15)}
                />
            </View>
        </View>
    );
};

export default SearchScreen;

