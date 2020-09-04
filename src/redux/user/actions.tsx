import {SET_FOLLOWERS, SET_INFO, SET_REPOS, SET_USER, UserActionTypes} from "./types";


export function setFollowers(followers: any[]): UserActionTypes {
    return{
        type: SET_FOLLOWERS,
        payload: followers
    }
}

export function setRepos(repos: any[]): UserActionTypes {
    return{
        type: SET_REPOS,
        payload: repos
    }
}

export function setInfo(info: any): UserActionTypes {
    return{
        type: SET_INFO,
        payload: info
    }
}

export function setUser(user: User): UserActionTypes {
    return{
        type: SET_USER,
        payload: user
    }
}
