import React , {useState }from "react";

import Button from "../../shared/components/FormElements/Button";
import Card from "../../shared/components/UIElements/Card";
import Modal from "../../shared/components/UIElements/Modal"
import "./FoodItem.css";

const FoodItem = (props) => {
  console.log(props.newPrice.full);
  const discount = (
    (props.oldPrice.full - props.newPrice.full) /
    props.oldPrice.full
  ).toFixed(2);

    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const halfItemHandler =() =>{
        setShowConfirmModal(false);
    }
    const fullItemHandler =() =>{
        setShowConfirmModal(false);
    }

    const showTypeFoodHandler = () => {
        setShowConfirmModal(true);
    }
    const cancelDeleteHandler = () => {
        setShowConfirmModal(false);
      };
  return (
    <div className="col-12 col-md-6 m-1">
      <Modal
        show={showConfirmModal}
        onCancel={cancelDeleteHandler}
        header="Select type"
        footerClass="food-item__modal-actions"
        footer={
          <ul>
            <p>FULL</p><Button inverse onClick={fullItemHandler}>
              {props.newPrice.full}
            </Button>
            <Button inverse onClick={halfItemHandler}>
              HALF
            </Button>
          </ul>
        }
      ></Modal>
      <span className="food-item">
        <Card className="food-item__content">
          <div className="food-item__image">
            <img src={props.image} className="" alt={props.name} />
          </div>

          <div className="food-item__info">
            <h2>{props.name}</h2>
            {discount > 0 ? (
              <h3 className="old__prize">Rs. {props.oldPrice.full}</h3>
            ) : (
              <p></p>
            )}
            <h3>Rs. {props.newPrice.full}</h3>
          </div>
          <div className="food-item__actions">
            <Button inverse onClick={showTypeFoodHandler}>ADD TO CART</Button>
          </div>
        </Card>
      </span>
    </div>
  );
};

export default FoodItem;
