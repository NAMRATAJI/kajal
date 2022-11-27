import React, { useState} from "react";
import './signupform.css';

export default function Signupform() {
    
    const[lname, setLname] = useState(false)

    const[lnameError, setLnameError] = useState(false)

    const[email, setEmail] = useState(false)

    const [EmailError, setEmailError] = useState(false)

    const [password, setPassword] = useState('')

    const [rePassword, setRePassword] = useState('')
    const [ passwordMatchingError, setPasswordMatchingError] =useState(false);

    const[forgotPass,  setForgotPass] = useState(false)
    const[forgotPassError,  setForgotPassError,] = useState(false);


    const[fname,  setFName] = useState(false)

    const[fnameError,  setFnameError,] = useState(false)

    const handleSubmit =(e) => {
        e.preventDefault();
        if (!fname) setFnameError(true)
        else setFnameError(false)

        if (!lname) setLnameError(true)
        else setLnameError(false)

        if (!email) setEmailError(true)
        else setEmailError(false)

        if (password !== rePassword) setPasswordMatchingError(true)
        else setPasswordMatchingError(false)

        if (!forgotPass) setForgotPassError(true)
        else setForgotPassError(false)
        
    }
    return (
        <div className="sign-up-container">
            <h1>CREATE ACCOUNT</h1>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="col-md">
                    <input type="text" className="form-control" placeholder="first Name"  onBlur={(e) => setFName(e.target.value)} />
                    {fnameError && <small className="text-danger"> first Name should not be empty</small>}
              </div>
                </div>
                <div className="form-row">
                  <div className="col-md">
                        <input type="text" className="form-control" placeholder="Last Name" onBlur={(e) => setLname(e.target.value)} />
                        {lnameError && <small className="text-danger"> Last Name should not be empty</small>}
                </div>    
                </div>
                <div className="form-row">
                <div className="col-md">
                        <input type="text" className="form-control" placeholder="Email" onBlur={(e) => setEmail(e.target.value)} />
                        {EmailError && <small className="text-danger">Email Name should not be empty</small>}
                </div>    
                </div>
                <div className="form-row">
                    <div className="col-md">
                        <input type="text" className="form-control" placeholder="password" onBlur={(e) => setPassword(e.target.value)} />
                    </div>
                </div>
                <div className="form-row">
                <div className="col-md">
                        <input type="password" className="form-control" placeholder="Re-type Password" onBlur={(e) => setRePassword(e.target.value)} />
                </div>
                </div>
                <div className="app">
                    <input type="forgotpass" className="form-control" placeholder="Forgot Password" onBlur={(e) => setForgotPass(e.target.value)} />
                    { forgotPassError}
                </div>
                <button>SIGN UP</button>
                {passwordMatchingError && <small className="text-danger">password is not matching</small>}
                <div className="login">
                    <button>SIGN IN</button>
                </div>

            </form>
        </div>

    )

}
