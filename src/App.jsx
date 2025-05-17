import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import StartPage from "./pages/startPage";
import Movies from "./pages/movies";
import Series from "./pages/series";
import Watchlist from "./pages/watchlist";
import Movie from "./pages/movie";
import Serie from "./pages/serie";
import ObjPage from "./pages/ObjPage";
import "./index.css"; // ensure tailwind is applied globally
import Footer from "./components/footer.comp";

function App() {
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "dark");
  }, []);

  return (
    <Router>
      <Navbar />
      <div className="app-container">
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<Movie />} />
          <Route path="/series/:id" element={<Serie />} />
          <Route path="/series" element={<Series />} />
          <Route path="/watchlist" element={<Watchlist />} />
          <Route path="/testobj" element={<ObjPage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
