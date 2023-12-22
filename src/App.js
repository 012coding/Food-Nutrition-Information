import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styles from "./css/App.module.css";
import Home from "./routes/Home";
import RecipePage from "./routes/RecipePage";
import RecipeDetail from "./routes/RecipeDetail";
import Map from "./routes/Map";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className={styles.home}>
      <Router>
        <Navbar />
        <Routes>
          <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
          <Route
            path={`${process.env.PUBLIC_URL}/recipe`}
            element={<RecipePage />}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/recipe/:id`}
            element={<RecipeDetail />}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/map`}
            element={<Map />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
