import React from "react";
import MakeButton from "./Button";
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <h2 className="titl text-3xl w-full ">Wellcom to Dish Master</h2>
      
      <header id="header w-full">

<div className="flex w-full ">
        <h2 className="text-md right-1 text-2xl ">Choose your action:</h2>
</div>

        <div className="flex">
          <div className="w-1/3">
        <Link to="/Dishes">
          <MakeButton id="btn-new-dish" type="submit" version="secondary">
            Make a new Dish
          </MakeButton>
        </Link></div>
        <div className="w-1/3">
        <Link to="/Ing">
          <MakeButton id="btn-new-ing" type="submit" version="secondary">
            Make a new Ingredient
          </MakeButton>
        </Link></div>
        <div className="w-1/3">
        <Link to="/">
              <MakeButton  id="btn-home" type="submit" version="secondary" className='h-40 w-40'>
                Go Home
              </MakeButton>
            </Link></div>
        </div>
      </header>
    </>
  );
}

export default Header;
