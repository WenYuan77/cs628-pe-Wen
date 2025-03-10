import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5001/api/recipes")
      .then(response => setRecipes(response.data))
      .catch(error => console.error("Failed to fetch recipes", error));
  }, []);

  return (
    <div>
      <h1>Recipe List</h1>
      <Link to="/add">➕ Add New Recipe</Link>
      <ul>
        {recipes.map(recipe => (
          <li key={recipe._id}>
            <Link to={`/recipes/${recipe._id}`}>{recipe.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
