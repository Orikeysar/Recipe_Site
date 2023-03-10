import "./App.css";
import React from "react";
import IngredientForm from "./Components/Ingredients/IngredientForm";
import IngredientList from "./Components/Ingredients/IngredientList";
import { IngredintProvider } from "./Components/Ingredients/IngredintProvider";
import Header from "./Components/Header";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import MakeButton from "./Components/Button";
import Dish from "./Components/dishes/Dish";
import DishList from "./Components/dishes/DishList";
import { DishProvider } from "./Components/dishes/DishProvider";
import DishForm from "./Components/dishes/DishForm";
import Home from './pages/Home'
function App() {
  return (
    <>
      <IngredintProvider>
        <DishProvider>
          <Router>
           

            <div className="container mx-auto px-3 pb-12">
              <Header />
              <Routes>
              <Route
                  exact
                  path="/"
                  element={
                    <>
                      <Home/>
                    </>
                  }
                ></Route>
                <Route
                  exact
                  path="/Ing"
                  element={
                    <>
                      <IngredientForm />
                      <IngredientList />
                    </>
                  }
                ></Route>
                <Route
                  exact
                  path="/Dishes"
                  element={
                    <>
                    <DishForm/>
                      <DishList />
                    </>
                  }
                />
              </Routes>
            </div>
          </Router>
        </DishProvider>
      </IngredintProvider>
    </>
  );
}

export default App;
