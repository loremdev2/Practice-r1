import React, { useState } from 'react';
import Child from './Child';

const Parent = () => {
  const [msg, setMsg] = useState("");

  const onSubmitClick =(value)=>{
    setMsg(value);
  }

  return (
    <div>
      <h3>Parent Component</h3>
      <p>Data from child : {msg} </p>
      <Child onSubmit={onSubmitClick} />
    </div>
  )
}

export default Parent;