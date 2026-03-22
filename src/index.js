import React,{useEffect, useState, useRef} from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"



function Main(){
var [data,setdata] = useState([
])

var [ip,sip] = useState("")

  return (
    <>
   <div className='container'>
    <h2>Todo Applications</h2>
    <div className='input-container'>
    <input onChange={(c) => {
      sip(c.target.value)
    }} />
    <button onClick={() => {
      setdata([...data, {id: data.length + 1, job: ip}])

    }}>Add</button>
    </div>

    <ul>

      {
       data.map((x) => 
      
    <div className='todo-item'>
    <li key={x.id}>{x.id}.{x.job}</li>
    <button onClick={() => {
      setdata(data.filter(item => item.id !== x.id ))
    }} >Delete</button>
   </div>
      )
      }

    </ul>
    
   </div>
    </>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Main/>
);
