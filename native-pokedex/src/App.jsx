import "./App.css";
import { PokemonList } from "./components/pokemon-list/PokemonList";
import { SearchBox } from "./components/search-box/SearchBox";

import { PokemonProvider } from "./store";

function App() {
  return (
    <PokemonProvider>
      <div className="mx-auto max-w-3xl">
        <SearchBox />
        <PokemonList />
      </div>
    </PokemonProvider>
  );
}

export default App;
