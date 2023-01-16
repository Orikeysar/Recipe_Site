import React from "react";
import DishList from "../Components/dishes/DishList";

function Home() {
  return (
    <div className="HomeHeader ">
      <h1 className=" border-black">All Ready Recpies: </h1>

      <div className="mb-2 flex">
        <DishList />
      </div>
    </div>
  );
}

export default Home;
