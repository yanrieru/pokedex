import Navbar from "../components/Navbar";
import PokemonList from "../components/PokemonList";
import Footer from "../components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <PokemonList />
      <Footer />
    </div>
  );
}
