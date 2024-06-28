import React from "react";
import PrimaryBtn from "../components/buttons/primary-btn/presentational.component";

const Home = () => {
  return (
    <div>
      <PrimaryBtn />
      <PrimaryBtn type="invert" />
      <PrimaryBtn type="frameless" />
      <PrimaryBtn type="transparent" />
    </div>
  );
};

export default Home;
