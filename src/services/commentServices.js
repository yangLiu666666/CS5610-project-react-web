import httpClient from "../Axios";

export const addNewComment = (mealId, comment) => {
    return httpClient.post(`/comments`, {mealId, comment})
        .then((resp) => resp.data)
}

export const deleteCommentByID = (mealId, commentId) => {
    return httpClient.delete(`/comments`, {data: {mealId, commentId}})
        .then((resp) => resp.data)
}

export const findCommentsByMeal = (mealId) => {
    return httpClient.get(`/meals/${mealId}/comments`)
        .then((resp) => resp.data)
}

export const updateCommentById = (mealId, comment, comment_id) => {
    return httpClient.put(`/comments`, {mealId,  comment, comment_id})
        .then((resp) => resp.data)
}