import React from "react";
import { Button, Card } from "react-bootstrap";
import './SingleProduct.css'
const SignleProduct = (props) => {
  const { pairImage, price, name } = props.product;
  return (
    <div className="col-md-6 col-lg-4 my-2 prod--design">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={pairImage} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text> ${price}</Card.Text>
          <Button className="btn btn-outline-warning w-50" variant=" ">Buy Now</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SignleProduct;
