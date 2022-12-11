import httpClient from "../Axios";

export const register = (email, password, role, name, country) => {
    return httpClient.post('/users', {email, password, role, name, country})
        .then((resp)=>resp.data)
}
export const login = (email, password) => {
    return httpClient.post('/login', {email, password})
        .then((resp)=>resp.data)
}
export const autoLogin = (uid) => {
    return httpClient.post('/auto_login', {uid})
        .then((resp)=>resp.data)
}

export const logout = () => {
    return httpClient.post('/logout')
        .then((resp)=>resp.data)
}

export const userAFollowUserB = (uidA, uidB) => {
    return httpClient.post(`/${uidA}/follow/${uidB}`)
        .then((resp)=>resp.data)
}

export const findFollowersByUserId = (uid) => {
    return httpClient.get(`/users/${uid}/followers`)
        .then((resp)=>resp.data)
}

export const findFollowingsByUserId = (uid) => {
    return httpClient.get(`/users/${uid}/followings`)
        .then((resp)=>resp.data)
}

export const findUserById = (uid) => {
    return httpClient.get(`/users/${uid}`)
        .then((resp)=>resp.data)
}

export const userARemoveFollowUserB = (uidA, uidB) => {
    return httpClient.delete(`/${uidA}/follow/${uidB}`)
        .then((resp) => resp.data)
}

