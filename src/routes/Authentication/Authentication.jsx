import React from "react";
import "./styles.sass";
const Authentication = () => {
  const handleSubmit = () => {
    console.log("submiting");
  };
  return (
    <section className="authentication-container">
      <h1>Sing In | Sing Up</h1>
      <form action="submit" onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username</label>
          <input type="text" />
        </div>
        <div className="input-container">
          <label>Email</label>
          <input type="text" />
        </div>
        <div className="input-container">
          <label>Password</label>
          <input type="text" />
        </div>
        <div className="input-container">
          <label>Confirm password</label>
          <input type="text" />
        </div>
      </form>
    </section>
  );
};

export default Authentication;
