import React, { useState } from 'react';

export default function Header() {
  const [name, setName] = useState('');
  const [error, setError] =  useState('');

  const handleBlur = (e) => setName(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) setError('Input field is empty');
    else setError('')
  }

    return(
      <form onSubmit={handleSubmit}>
        <input type="text" onBlur={handleBlur}  />
        <span style={{color: 'red', display: 'block'}}>{error}</span>
        <button>Submit</button>
      </form> 
    )
}