import { useState } from "react";
import Navbar from "../components/Navbar";
import PokemonList from "../components/PokemonList";
import Footer from "../components/Footer";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <PokemonList searchTerm={searchTerm} />
      <Footer />
    </div>
  );
}
