import React, { useEffect, useState } from 'react'
import Search from './search'
import Recipes from './recipeList'
import { getRecipes } from './api'

const recipe = () => {

  const [searchedQuery, setSearchedQuery] = useState('pizza')
  const [recipes, setRecipes] = useState([])

  useEffect(()=>{
    getSearchResults()
  },[searchedQuery])

 const getSearchResults = async () =>{
  let result = await getRecipes(searchedQuery)
  if (result && result.recipes){
    setRecipes(result.recipes)
  }
 }



  return (
    <div>
    <Search setSearchedQuery={setSearchedQuery}/>
    <Recipes recipes={recipes} searchedQuery={searchedQuery}/>
    </div>
  )
}

export default recipe
