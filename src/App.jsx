import { Suspense, useState } from "react";
import "./App.css";
import Hero from "./Hero/Hero";
import Navbar from "./Navbar/Navbar";
import Players from "./Players/Players";

const playerPromise = async () => {
  const res = await fetch("/players.json");
  const data = res.json();
  return data;
};

function App() {
  const playersData = playerPromise();

  const [coinPrice, setCoinPrice] = useState(2000);

  return (
    <>
      <Navbar coinPrice={coinPrice}></Navbar>
      <Hero></Hero>
      <Suspense
        fallback={<span className="loading loading-spinner loading-lg"></span>}
      >
        <Players
          playersData={playersData}
          coinPrice={coinPrice}
          setCoinPrice={setCoinPrice}
        ></Players>
      </Suspense>
    </>
  );
}

export default App;
