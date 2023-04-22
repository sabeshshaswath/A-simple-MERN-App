import React,{useState}from 'react'
import axios from "axios";
import { useGetUserID } from "../hooks/useGetUserID";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const Create = () => {
  const userID = useGetUserID();
  const [cookies, _] = useCookies(["access_token"]);
  const [recipe, setRecipe] = useState({
    // name: "",
    // // description: "",
    // // // ingredients: [],
    // description: "",
    // imageUrl: "",
    // eurl: "",
    userOwner: userID,
    // date:"",
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRecipe({ ...recipe, [name]: value });
    // name=="name" && console.log(event.target.value)
    // name==="date" && console.log(event.target)
    // console.log(recipe);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(recipe)
    try {
      await axios.post(
        "http://localhost:3001/recipes",
        { ...recipe },
        {
          headers: { authorization: cookies.access_token },
        }
      );

      alert("Recipe Created");
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="create-recipe">
      <h2>Create Event</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Event Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={recipe.name}
          onChange={handleChange}
        />
        <label htmlFor="cname">College Name</label>
        <textarea
          id="cname"
          name="collegeName"
          value={recipe.collegeName}
          onChange={handleChange}
        ></textarea>
        {/* <label htmlFor="ingredients">Ingredients</label>
        {recipe.ingredients.map((ingredient, index) => (
          <input
            key={index}
            type="text"
            name="ingredients"
            value={ingredient}
            onChange={(event) => handleIngredientChange(event, index)}
          />
        ))} */}
        {/* <button type="button" onClick={handleAddIngredient}>
          Add Ingredient
        </button> */}
        <label htmlFor="instructions">Description</label>
        <textarea
          id="instructions"
          name="description"
          value={recipe.description}
          onChange={handleChange}
        ></textarea>
        <label htmlFor="imageUrl">Image URL</label>
        <input
          type="text"
          id="imageUrl"
          name="imageUrl"
          value={recipe.imageUrl}
          onChange={handleChange}
        />
        <label htmlFor="cookingTime">Event URL</label>
        <input
          type="text"
          id="cookingTime"
          name="eurl"
          value={recipe.eurl}
          onChange={handleChange}
        />
        <label htmlFor="datee">Event Date</label>
           <input
          type="date"
          id="datee"
          name="date"
          value={recipe.date}
          onChange={handleChange}
        />
        <button type="submit">Create Recipe</button>
      </form>
    </div>
  );
};

export default Create