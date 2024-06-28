import React from "react";
import PrimaryBtn from "../components/buttons/primary-btn/presentational.component";
import SecondaryBtn from "../components/buttons/secondary-btn/presentational.component";

const Home = () => {
  return (
    <>
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
      <div className="flex gap-4 m-8 flex-wrap">
        <SecondaryBtn size="small" />
        <SecondaryBtn type="invert" size="large" />
        <SecondaryBtn type="frameless" size="medium" />
        <SecondaryBtn type="transparent" />
        <SecondaryBtn disabled />
        <SecondaryBtn size="small" fullWidth />
        <SecondaryBtn type="invert" size="large" fullWidth />
        <SecondaryBtn type="frameless" size="medium" fullWidth />
        <SecondaryBtn type="transparent" fullWidth />
        <SecondaryBtn disabled fullWidth />
      </div>
    </>
  );
};

export default Home;
