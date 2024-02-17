import axiosClient from "../axiosClient";

//search meals
export async function searchMeals({commit}, keyword)
{
    try {
    
        const {data} = await axiosClient.get(`/search.php?s=${keyword}`);
    
        commit("setSearchedMeals", data.meals)
    
      } catch (error) {
        console.error(error.message);
      }
}

//get nmeal by id
export async function getMealById({commit}, id)
{
    commit("clearMealDetails");
    try {
        const {data} = await axiosClient.get(`/lookup.php?i=${id}`);
        commit("setMealDetails", data.meals.at(0));
    } catch (error) {
        console.error(error.message);
    }
}

//get meals by letter
export async function getMealByLetter({commit}, letter)
{
    try {
        const {data} = await axiosClient.get(`/search.php?f=${letter}`)
        commit("setSearchedMealsByLetter", data?.meals);
    } catch (error) {
        console.error(error.message);
        
    }
}

//get ingredirent
export async function getIngredients({commit})
{
    try {
        const {data} = await axiosClient.get(`/list.php?i=list`);
        commit("setIngredients", data?.meals);
    } catch (error) {
        console.error(error.message);
    }
}

//get meals by ingredirent
export async function getMealsByIngredients({commit}, ingredient)
{
    try {
        const {data} = await axiosClient.get(`/filter.php?i=${ingredient}`);
        commit("setSearcheMealsByIngredients", data?.meals);
    } catch (error) {
        console.error(error.message);
    }
}