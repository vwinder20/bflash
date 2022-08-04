import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import "./styles.sass";
const Home = () => {
  return (
    <section className="home-container">
      <div className="promo-container">
        <h1>
          BrainFlash - it’s a project created for simplify your memorize routine
        </h1>
        <h1>Create, delete, edit your own vocabulary online </h1>
        <Link to="/auth">
          <Button value="Get started" type="blue" />
        </Link>
      </div>
    </section>
  );
};

export default Home;
