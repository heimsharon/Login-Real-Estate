import React from "react";

const CreateAnAccount: React.FC = () => {
  return (
    <div className="create-account-container">
      <h1>Create an Account</h1>
      <form>
        <input type="text" placeholder="Furture State" />
        <input type="email" placeholder="Future State" />
        <input type="password" placeholder="Enter your password" />
        <input type="password" placeholder="Confirm your password" />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default CreateAnAccount;