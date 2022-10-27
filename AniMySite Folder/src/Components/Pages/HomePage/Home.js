import React from "react";
import Header from "../../Header";
import ReccomendedList from "../../ReccomendedList";
import HomeBanner from "../../HomeAssets/HomeBanner";
import Backdrop from "../HomeScreen/Backdrop";

function Home() {
  return (
    <div>
      <Backdrop />
      <Header />
      <HomeBanner />
      <ReccomendedList />
    </div>
  );
}

export default Home;
