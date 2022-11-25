import React, { useState} from "react";
import './signupform.css';

export default function Signupform() {
    const[fname, setFName] = useState(false)

    const[fnameError, setFnameError] = useState(false)

    const handleSubmit =(e) => {
        e.preventDefault();
        if (!fname) setFnameError(true)
        else setFnameError(false)

        if (!lname) setLnameError(true)
        else setLnameError(false)

        if (!email) setEmailError(true)
        else setEmailError(false)

        if (!password) setPasswordError(true)
        else setPasswordError(false)

        if (!retypePass) setRetypePassError(true)
        else setRetypePassError(false)

    }

    const[lname, setLname] = useState(false)

    const[lnameError, setLnameError] = useState(false)

    const[email, setEmail] = useState(false)

    const[EmailError, setEmailError] = useState(false)

    const[password, setPassword] = useState(false)

    const[passwordError, setPasswordError] = useState(false)

    const[retypePass, setRetypePass] = useState(false)

    const[RetypePassError, setRetypePassError] = useState(false)

    return (
        <div className="sign-up-container">
            <h1>CREATE ACCOUNT</h1>
            <form onSubmit={handleSubmit}>
                <div className="col-md">
                    <input type="text" className="form-control" placeholder="first Name"  onBlur={(e) => setFName(e.target.value)} />
                    {fnameError && <small className="text-danger"> first Name should not be empty</small>}
                </div>
                <div className="col-md">
                    <div className="col-md">
                        <input type="text" className="form-control" placeholder="Last Name" onBlur={(e) => setLname(e.target.value)} />
                        {lnameError && <small className="text-danger"> Last Name should not be empty</small>}
                    </div>
                </div>
                <div className="col-md">
                    <div className="col-md">
                        <input type="text" className="form-control" placeholder="Email" onBlur={(e) => setEmail(e.target.value)} />
                        {EmailError && <small className="text-danger">Email Name should not be empty</small>}
                    </div>
                </div>
                <div className="col-md">
                    <div className="col-md">
                        <input type="text" className="form-control" placeholder="password"  onBlur={(e) => setPassword(e.target.value)} />
                        {passwordError && <small className="text-danger">Entered your password</small>}
                    </div>
                </div>
                <div className="col-md">
                    <div className="col-md">
                        <input type="text" className="form-control" placeholder="Re type password" onBlur={(e) => setRetypePass(e.target.value)} />
                        {RetypePassError && <small className="text-danger">Re-type your password</small>}
                    </div>
                </div>
                <button>SIGN UP</button>

            </form>
        </div>

    )

}
