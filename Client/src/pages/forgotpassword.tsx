import React from "react";

const ForgotPassword: React.FC = () => {
  return (
    <div className="forgot-password-container">
      <h1>Forgot Password</h1>
      <form>
        <input type="email" placeholder="Enter your email" />
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
};

export default ForgotPassword;