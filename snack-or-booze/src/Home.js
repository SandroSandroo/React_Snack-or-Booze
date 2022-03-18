import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";

// home page when data loading
function Home({ snacks, drinks }) {
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h3 className="font-weight-bold">
              Welcome to Silicon Valley's premier dive cafe!
            </h3>
          </CardTitle>
          <CardSubtitle className="font-weight-bold h5">
            We offer {snacks.length} diferent types of snacks and{" "}
            {drinks.length} deferent types of drinks.
          </CardSubtitle>
        </CardBody>
      </Card>
    </section>
  );
}

export default Home;
