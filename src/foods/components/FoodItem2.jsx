import React, { useState } from "react";
import { Card, CardImg, CardTitle, Col, Button, CardFooter } from "reactstrap";
import Modal from "../../shared/components/UIElements/Modal";

import "./FoodItem.css";

const FoodItem = (props) => {
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const halfItemHandler = () => {
    setShowConfirmModal(false);
  };
  const fullItemHandler = () => {
    setShowConfirmModal(false);
  };

  const showTypeFoodHandler = () => {
    setShowConfirmModal(true);
  };

  const cancelShowHandler = () => {
    setShowConfirmModal(false);
  };

  return (
    <React.Fragment>
      <Modal
        show={showConfirmModal}
        onCancel={cancelShowHandler}
        header={props.name}
        footerClass="food-item__modal-actions"
        footer={
          <ul>
            <p>FULL</p>
            <Button onClick={fullItemHandler}>
              {props.newPrice.full}
            </Button>
            <Button onClick={halfItemHandler}>
              HALF
            </Button>
          </ul>
        }
      ></Modal>
      <Col sm="6" md="4" lg="3">
        <Card height="100px">
          <CardImg
            top
            width="100%"
            height="100%"
            src={props.image}
            alt={props.name}
          />
          <CardTitle>{props.name}</CardTitle>
          <CardFooter>
            <Button onClick={showTypeFoodHandler} color="primary">
              Add to Cart
            </Button>
          </CardFooter>
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default FoodItem;
