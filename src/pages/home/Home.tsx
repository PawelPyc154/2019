import React from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";

export interface HomeProps {}

const Home: React.SFC<HomeProps> = () => {
  return (
    <>
      <Section1 />
      <Section2 />
    </>
  );
};

export default Home;
