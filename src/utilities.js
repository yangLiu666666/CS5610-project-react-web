export function isLike(meals, mealId) {
    const result = meals.filter((m) => {
        return m.mealId === mealId
    })
    return result.length > 0
}