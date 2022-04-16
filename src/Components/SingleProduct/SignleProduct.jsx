import React, { useState } from "react";
import { Button, Card, Modal } from "react-bootstrap";
import "./SingleProduct.css";

const SignleProduct = (props) => {
  const { pairImage, price, name, color, quantity } = props.product;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="col-md-6 col-lg-4 my-2 prod--design">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={pairImage} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text> ${price}</Card.Text>
          <div className=" ">
            <Button className="btn btn-outline-warning w-100 m-1" variant=" ">
              Buy Now
            </Button>
            <Button
              onClick={handleShow}
              className="btn btn-outline-primary w-100 m-1"
              variant=" "
            >
              Details
            </Button>
          </div>
        </Card.Body>
      </Card>

      <div className="modal--design">
        <Modal className="mx-auto text-center" show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Product Name: {name}</Modal.Title>
          </Modal.Header>
            <img className="w-100" src={pairImage} alt=" product images" />
            <p>Price: ${price}</p>
            <p>Color: {color}</p>
            <p className="text-primary"> Available : 
            {
              quantity ? ' In Stock' : ` Solid Out (${quantity})`
            }
            </p>
          
            
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default SignleProduct;
