const routes = {
    base: "https://api.github.com",
    search: "/search/users?q=",
    users: "/users/",
    followers: '/followers',
    repos: '/repos',
    page: ';per_page=50;page=1'
};


export const searchUser = (userName: string) => {
    const {base, search, page} = routes;
    return `${base}${search}` + userName + `${page}`;
};
export const getFollowers = (userName: string) => {
    const {base, users, followers} = routes;
    return `${base}${users}` + userName + `${followers}`;
};
export const getRepos = (userName: string): string => {
    const {base, users, repos}= routes;
    return `${base}${users}` + userName + `${repos}`;
};
export const getInfo = (userName: string): string => {
    const {base, users} = routes;
    return `${base}${users}` + userName ;
};

