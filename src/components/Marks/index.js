import React, { useState} from "react";
import './marks.css';


export default function Marks() {

    const [input, setinput] = useState('')

    const [button, setButton] = useState('')
    const [ inputMatchingError, setInputMatchingError] =useState(false);

    const handleSubmit =(e) => {
        e.preventDefault();
        if (input || typeof input!=='number') setInputMatchingError(true)
        else setInputMatchingError(false)

       
    }
    return(
        <div className="marks-container">
        <h1>MARKS</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="col-md">
                <input type="text" className="form-control" placeholder="input"  onBlur={(e) => setinput(e.target.value)}/>
                <input type="input" className="form-control" placeholder="botton" onBlur={(e) => setButton(e.target.value)}  />
                {inputMatchingError && <small className="text-danger">not matching</small>}

          </div>
           </div>
           <button>SUBMIT</button>

        </form>
        </div>
    )
}