import React, { FC } from "react";
import SinglPizza from "./SinglPizza";
import Pizza from "../modules/Pizza";

interface DisplayPizzasProps {
  pizzasList: Pizza[];
  updatePizza: (newPizza: Pizza) => void;
  deletePizza: (id: number) => void;
}

const DisplayPizzas: FC<DisplayPizzasProps> = ({
  pizzasList,
  updatePizza,
  deletePizza,
}) => {
  return (
    <div className="container">
      {pizzasList.map((pizza) => {
        return (
          <SinglPizza
            key={pizza.id}
            deletePizza={deletePizza}
            updatePizza={updatePizza}
            pizza={pizza}
          />
        );
      })}
    </div>
  );
};

export default DisplayPizzas;
