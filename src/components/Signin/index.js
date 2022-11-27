import React, { useState } from "react";

export default function Signin() {
  const forgotPasswordchema = object({
    email: string().min(1, "Email is required").email("Invalid email address"),
  });

  return(
    <div className="sign-up-container">
    <h1>CREATE ACCOUNT</h1>
    <form >
      <div className="form-row">
        <div className="col-md">
            <input type="text" className="form-control" placeholder="Email-id"   />
            < input type="password" className="form-control" placeholder="Password" />
      </div>
      </div>
      <div className="app">
        <input type="forgot password" className="form-control" placeholder="forgot password" />
      </div>
          <button>LOG IN</button>
    </form>  
    </div>
  
  )  
}
