export interface SelectedUser {
    userFollowers: Object[],
    userInfo: Object,
    userRepos: Object[],
    user: User,
}

export const SET_FOLLOWERS = 'SET_FOLLOWERS';
export const SET_REPOS = 'SET_REPOS';
export const SET_INFO = 'SET_INFO';
export const SET_USER = 'SET_USER';


interface SetFollowerAction {
    type: typeof SET_FOLLOWERS,
    payload: any[]
}
interface SetReposAction {
    type: typeof SET_REPOS,
    payload: any[]
}

interface SetInfoAction {
    type: typeof SET_INFO,
    payload: any
}

interface SetUSerAction {
    type: typeof SET_USER,
    payload: User
}


export type UserActionTypes = SetFollowerAction | SetInfoAction | SetReposAction | SetUSerAction;
