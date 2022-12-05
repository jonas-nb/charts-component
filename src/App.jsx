import React from "react";
import HeaderBar from "./components/Header Bar/HeaderBar";
import "../src/assets/fixBorder.css";
import MainCharts from "./components/MainCharts/MainCharts";

const App = () => {
  return (
    <div className="fixBorder lg:w-[30rem] lg:m-auto min-w-[320px]">
      <HeaderBar />
      <MainCharts />
      <div className="text-center pt-5">
        created with 🧡 by Jonas Batista &copy;
      </div>
    </div>
  );
};

export default App;
