import Header from "./components/Header";
import Feed from "./components/Feed";
import Hero from "./components/Hero";
import { useState } from "react";

const Home = () => {
  return (
    <main className="app">
      <Header />
      <Hero />
      <Feed />
    </main>
  );
};

export default Home;
