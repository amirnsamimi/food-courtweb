import React from "react";
import PrimaryBtn from "../components/buttons/primary-btn/presentational.component";

const Home = () => {
  return (
    <div className="flex gap-4 m-8 flex-wrap">
      <PrimaryBtn size="small" />
      <PrimaryBtn type="invert" size="large" />
      <PrimaryBtn type="frameless" size="medium" />
      <PrimaryBtn type="transparent" />
      <PrimaryBtn disabled />
      <PrimaryBtn size="small" fullWidth />
      <PrimaryBtn type="invert" size="large" fullWidth />
      <PrimaryBtn type="frameless" size="medium" fullWidth />
      <PrimaryBtn type="transparent" fullWidth />
      <PrimaryBtn disabled fullWidth />
    </div>
  );
};

export default Home;
