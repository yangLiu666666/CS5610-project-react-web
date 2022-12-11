import httpClient from "../Axios";

export const findAllLikes = (uid) => {
    return httpClient.get(`users/${uid}/likes`)
        .then((resp) => resp.data);
}

export const userLikeMealById =(mealId) => {
    return httpClient.post(`/likes`, {mealId})
        .then((resp) => resp.data)
}

export const userRemoveLikeById = (mealId) => {
    return httpClient.delete(`/dislikes`, {data: {mealId}})
        .then((resp) => resp.data)
}
