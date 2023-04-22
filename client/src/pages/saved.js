import React, { useEffect, useState } from "react";
import { useGetUserID } from "../hooks/useGetUserID";
import axios from "axios";
import { Link } from "react-router-dom";


const Saved = () => {
  const [savedRecipes, setSavedRecipes] = useState([]);
  const userID = useGetUserID();

  useEffect(() => {
    const fetchSavedRecipes = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/recipes/savedRecipes/${userID}`
        );
        setSavedRecipes(response.data.savedRecipes);
      } catch (err) {
        console.log(err);
      }
    };
    fetchSavedRecipes();
  }, []);
  return (
    <div>
    <h1>Saved Recipes</h1>
    <ul>
      {savedRecipes.map((recipe) => (
        <li key={recipe._id}>
          <div>
            <h2>{recipe.name}</h2>
            <h4>Location:{recipe.collegeName}</h4>
          </div>
          <p>{recipe.description}</p>
          <img src={recipe.imageUrl} alt={recipe.name} />
          <Link to={recipe.eurl}> <p className="cati">Register</p></Link>
        </li>
      ))}
    </ul>
  </div>
  )
}

export default Saved