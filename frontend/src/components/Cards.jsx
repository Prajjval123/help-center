import React from "react";
import Card from "./Card";
import { data } from "../constants/data";


const Cards = () => {
  return (
    <>
      {data.map((data, id) => <Card key={id} title={data.title} description={data.description} />)}
    </>
  );
};

export default Cards;
