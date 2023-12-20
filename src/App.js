import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import RecipePage from './routes/RecipePage';
import RecipeDetail from './routes/RecipeDetail'
import Nutrient from './routes/Nutrient';

function App() {
  return (
    <Router>
      <Routes>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
        <Route path={`${process.env.PUBLIC_URL}/recipe`} element={<RecipePage />} />
        <Route path={`${process.env.PUBLIC_URL}/recipe/:id`} element={<RecipeDetail />} />
        <Route path={`${process.env.PUBLIC_URL}/nutrient`} element={<Nutrient />} />
      </Routes>
    </Router>
  );
}

export default App;
