export function setSearchedMeals(state, meals)
{
    state.searchedMeals = meals || [];
}

export function setMealDetails(state, meal) {
    state.meal = meal || null;
}

export function clearMealDetails(state)
{
    state.meal = null;
}

export function setSearchedMealsByLetter(state, meals) {
    state.searcheMealsByLetter = meals || [];
}

export function setIngredients(state, ingredients) 
{
    state.ingredients = ingredients || [];
}

export function setSearcheMealsByIngredients(state, meals) 
{
    state.searcheMealsByIngredients = meals || [];
}