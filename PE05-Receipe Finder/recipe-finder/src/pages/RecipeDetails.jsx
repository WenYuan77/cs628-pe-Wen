import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const RecipeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5001/api/recipes/${id}`)
      .then(response => setRecipe(response.data))
      .catch(error => console.error("Failed to fetch recipe details", error));
  }, [id]);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5001/api/recipes/${id}`);
      navigate("/");
    } catch (error) {
      console.error("Failed to delete recipe", error);
    }
  };

  if (!recipe) return <p>Loading...</p>;

  return (
    <div>
      <h1>{recipe.name}</h1>
      <p><strong>Ingredients:</strong> {recipe.ingredients.join(", ")}</p>
      <p><strong>Instructions:</strong> {recipe.instructions}</p>
      <button onClick={handleDelete}>❌ Delete</button>
    </div>
  );
};

export default RecipeDetails;
