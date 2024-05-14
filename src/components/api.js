import axios from 'axios'

export const getRecipes = async (searchedQuery) => {
    try {
        const response = await axios.get(`https://forkify-api.herokuapp.com/api/search?q=${searchedQuery}`)
        console.log(response.data)
        return response.data;
    } catch (error) {
        console.log(error.message)
        return error.response;
    }
}
