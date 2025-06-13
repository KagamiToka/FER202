import React, { useState } from 'react';

export function TextBox() {
    const [name, setName] = useState('Suzume');
    const [age, setAge] = useState('32');
    return(
        <div>
            <input 
                type="text"
                value={name}
                onChange={(e) => {setName(e.target.value);
                    console.log(e.target.value)
                }}            
            />
            <p>My name is {name}</p>
            <input 
                type="number"
                value={age}
                onChange={(e) => setAge(parseInt(e.target.value,10))}            
            />
            <p>My name is {age}</p>
        </div>
    );
}