import React from "react";
import { Outlet, Link } from "react-router-dom";

import Button from "../../components/Button";
import "./styles.sass";
const Navigation = () => {
  return (
    <div>
      <header>
        <div className="navigation-container">
          <Link to="/">
            <h1 className="logo">BFlash</h1>
          </Link>
          <div className="navigation-item">
            <Link to="/auth">
              <Button value="sing-in" type="default" />
            </Link>
            <Link to="/auth">
              <Button value="sing-in" type="blue" />
            </Link>
          </div>
        </div>
      </header>
      <Outlet />
    </div>
  );
};

export default Navigation;
