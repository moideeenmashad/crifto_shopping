import React, { useState } from "react";

const Home = () => {
  const [wish, setWish] = useState("Comeback after 30th Bro");
  return (
    <div>
      <h1>{wish}</h1>
    </div>
  );
};

export default Home;
