import "./App.css";
import { Outlet, ReactLocation, Router } from "@tanstack/react-location";
import { PokemonList } from "./components/pokemon-list/PokemonList";
import { SearchBox } from "./components/search-box/SearchBox";

import { PokemonProvider } from "./store";
import { PokemonDetail } from "./components/pokemon-detail/PokemonDetail";

const location = new ReactLocation();

const routes = [
  {
    path: "/",
    element: (
      <>
        <SearchBox />
        <PokemonList />
      </>
    ),
  },
  {
    path: "/pokemon/:id",
    element: <PokemonDetail />,
  },
];

function App() {
  return (
    <PokemonProvider>
      <Router location={location} routes={routes}>
        <div className="mx-auto max-w-3xl">
          <Outlet />
        </div>
      </Router>
    </PokemonProvider>
  );
}

export default App;
