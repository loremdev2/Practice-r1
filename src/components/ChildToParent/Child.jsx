import React, { useState } from 'react';
const Child = ({onSubmit}) => {
    const [value, setValue] = useState("");
    
    return (
        <div>
            <h5>Child Component</h5>
            <input
                type="text"
                placeholder="Enter a message"
                value={value}
                onChange={(e)=>{
                    setValue(e.target.value)
                }}

            />
            <button
                type='button'
                onClick={()=>{
                    onSubmit(value)
                }}
            >
                Submit
            </button>
        </div>
    )
}

export default Child;