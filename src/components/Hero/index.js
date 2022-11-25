import React, { useState } from 'react';

export default function Hero() {
    const [name, setName] = useState('');
    const handleChange = (e) => setName(e.target.value);
    return(
        <>
        <select onChange={handleChange}>
            <option>Male</option>
            <option>Female</option>
            <option>Girl</option>
            <option>Boy</option>
            <option>Transgender</option>
        </select>
        <h1>You have selected {name}</h1>
        </>
    )
}