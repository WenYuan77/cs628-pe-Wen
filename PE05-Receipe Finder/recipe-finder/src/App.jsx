import { Routes, Route } from "react-router-dom";
import RecipeList from "./pages/RecipeList";
import AddRecipe from "./pages/AddRecipe";
import RecipeDetails from "./pages/RecipeDetails";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<RecipeList />} />
      <Route path="/add" element={<AddRecipe />} />
      <Route path="/recipes/:id" element={<RecipeDetails />} />
    </Routes>
  );
};

export default App;
