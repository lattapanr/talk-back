import Header from "./components/Header";
import Feed from "./components/Feed";
import Hero from "./components/Hero";
import { useState } from "react";

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const bgClass = darkMode ? "bg-charcoal" : "bg-off-white";

  return (
    <main className={`w-full ${bgClass} ${darkMode ? "dark" : ""}`}>
      <div className="relative z-10 flex justify-center items-center flex-col max-w-7xl mx-auto sm:px-16 px-6">
        <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        <Hero />
        <Feed />
      </div>
    </main>
  );
};

export default Home;
