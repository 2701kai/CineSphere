import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/footer.comp";
import StartPage from "./pages/StartPage";
// props to @payermann for inspiring the route idea using StartPage instead of Hero Logic
// brilliant - again.
// That´s the way to make collab the EPITOME of fun.
import Movies from "./pages/movies";
import Series from "./pages/series";
import Watchlist from "./pages/watchlist";
import Movie from "./pages/movie";
import Serie from "./pages/serie";
import ObjPage from "./pages/ObjPage";

import "./index.css";

function Layout() {
  const location = useLocation();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "dark");
  }, []);

  return (
    <>
      <Navbar />
      <div className="app-container">
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<Movie />} />
          <Route path="/series" element={<Series />} />
          <Route path="/series/:id" element={<Serie />} />
          <Route path="/watchlist" element={<Watchlist />} />
          <Route path="/testobj" element={<ObjPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}
