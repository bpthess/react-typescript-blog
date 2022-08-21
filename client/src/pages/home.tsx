import React from "react";
import { Container } from "reactstrap";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import IPageProps from "../interfaces/page";

const HomePage: React.FunctionComponent<IPageProps> = (props) => {
  return (
    <Container fluid className="p-0">
      <Navigation />
      <Header
        title="A Nerdy Blog Website"
        headline="check out what people have to say!"
        children={undefined}
      />
      <Container className="mt-5">Blog stuff here ....</Container>
    </Container>
  );
};

export default HomePage;
