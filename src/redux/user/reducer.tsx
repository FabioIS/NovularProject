import {SelectedUser, UserActionTypes} from "./types";

const initialState: SelectedUser = {
    userFollowers: [],
    userInfo: {},
    userRepos: [],
    user: {
        login: "",
        avatar_url: ""
    }
};

export function userReducer(state = initialState, action: UserActionTypes): SelectedUser {
    switch (action.type) {
        case "SET_FOLLOWERS":
            return {
                ...state,
                userFollowers: action.payload
            };
        case "SET_INFO":
            return{
                ...state,
                userInfo: action.payload
            };
        case "SET_REPOS":
            return {
                ...state,
                userRepos: action.payload
            };
        case "SET_USER":
            return {
                ...state,
                user: action.payload
            };
        default:
            return state
    }
}
