import {getFollowers, getInfo, getRepos, searchUser} from './routes';
import {setFollowers, setInfo, setRepos} from "../redux/user/actions";

class UserService {

    async searchUsers(userName: string) {
        return await UserService.fetchRequest(searchUser(userName)).then((response) => {
                return response;
            }
        );
    }

    async getFollowers(userName: string, dispatch: any): Promise<void> {
        try {
            const response = UserService.fetchRequest(getFollowers(userName));
            dispatch(setFollowers(await response))
        } catch (e) {
            console.log(e);
        }
    }

    async getInfo(userName: string, dispatch: any): Promise<void> {
        try {
            const response = UserService.fetchRequest(getInfo(userName));
            dispatch(setInfo(await response))
        } catch (e) {
            console.log(e);
        }
    }

    async getRepos(userName: string, dispatch: any): Promise<void> {
        try {
            const response = UserService.fetchRequest(getRepos(userName));
            dispatch(setRepos(await response))
        } catch (e) {
            console.log(e);
        }
    }


    private static async fetchRequest(url: string) {
        return await fetch(url, {
            method: 'GET',
            headers: {
                'accept': 'application/vnd.github.v3+json'
            }
        }).then(res => res.json());

    }
}

export default new UserService;
