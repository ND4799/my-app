import React, { useState } from 'react';

const Ustate = () => {
    // 声明一个新的叫做 “count” 的 state 变量
  const [count, setCount] = useState(0);
  console.log('888888')
  /* useEffect(() => {
    // Update the document title using the browser API
    //document.title = `You clicked ${count} times`;
    
    //document.getElementById('weather').innerText = `You clicked ${count+Math.random()} times`;
    
   
  }); */
  //console.log(count,setCount)
  /* const add = () => {
    setCount(count+1);
    document.getElementById('weather').innerText = `You clicked ${count} times`;
  } */
  
    return(
      <div style={{ padding:'10px',background:'#999'}}>
        <span>You clicked {count} times</span>
        <button style={{cursor:'pointer',marginLeft:'10px'}} onClick={()=>setCount(count+1)}>Click me !</button>
        {/* <button onClick={() => setCount(count + 10)}>Click me</button> */}
      </div>
    )
}


export default Ustate;