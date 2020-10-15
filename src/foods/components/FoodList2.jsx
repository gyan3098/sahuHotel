import React from "react";
import { Container, Row, Col, Button } from "reactstrap";


import FoodItem from "./FoodItem2";
import "./FoodList.css";

const FoodList = (props) => {
  console.log(props.items.length);
  if (props.items.length === 0) {
    return (
      <div>
        <h2> No item found, Maybe come later</h2>
      </div>
    );
  }

  return (
    <Container className="mt--60">
      <Row>
        <Col sm="6">
        <Button>Filter
            </Button></Col>
      </Row>
      <Row>
        {props.items.map((food) => {
          return (
            <FoodItem
              key={food.id}
              id={food.id}
              image={food.imageUrl}
              name={food.name}
              newPrice={food.newPrice}
              oldPrice={food.oldPrice}
            />
          );
        })}
      </Row>
    </Container>
  );
};

export default FoodList;
