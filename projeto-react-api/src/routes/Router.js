import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BASE_URL } from "../constants/url";
import HomePage from "../pages/home/HomePage";
import PokedexPage from "../pages/pokedex/PokedexPage";
import DetailsPage from "../pages/details/DetailsPage";
import Header from "../components/header/Header";



function Router() {
  const [details, setDetails] = useState([])


  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<HomePage setDetails={setDetails} />}
        />
        <Route
          path="/pokedex"
          element={<PokedexPage setDetails={setDetails} />}
        />
        <Route
          path='/details'
          element={<DetailsPage details={details} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;


//setDetailPage(pokemon)
//