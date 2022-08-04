import React from "react";
import "./styles.sass";
const Button = ({ value, type }) => {
  return <button className={`button ${type}`}>{value}</button>;
};

export default Button;
