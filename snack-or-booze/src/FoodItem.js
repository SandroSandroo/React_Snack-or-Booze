import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

// show item detiles name, recipe and serve
function FoodItem({ items, cantFind }) {
  const { id } = useParams();

  let s = items.find((s) => s.id === id);
  if (!s) return <Redirect to={cantFind} />;

  return (
    <section>
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {s.name}
          </CardTitle>
          <CardText className="font-italic">{s.description}</CardText>
          <p>
            <b>Recipe:</b> {s.recipe}
          </p>
          <p>
            <b>Serve:</b> {s.serve}
          </p>
        </CardBody>
      </Card>
    </section>
  );
}

export default FoodItem;
