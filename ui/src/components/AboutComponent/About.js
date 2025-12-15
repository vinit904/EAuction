import './About.css';
import { useState } from 'react';

function About() {

  const [ a ] = useState(100);
  const [ b ] = useState(200);

  const [ cDate , setCurrentDate ] = useState(Date());

  const [ count , setCount ] = useState(0);

  setTimeout(()=>{
    setCurrentDate(Date());
  },1000);

  const increment=()=>{
    setCount(count+1);
  };
  
  const decrement=()=>{
    setCount(count-1);
  };

  return (
<>   

<div id="content" >

<h1>User details : localStorage</h1>  
  <p>Username : {localStorage.getItem('sunm')}</p>
  <p>Password : {localStorage.getItem('spass')}</p>  

  <hr/>

<h1>Component : About</h1>

<br/><hr/><br/>

<h2>Counter : {count}</h2>
<button onClick={increment} >Increment</button>
<button onClick={decrement} >Decrement</button>

<br/><br/><hr/><br/>

<h2>Timer : {cDate}</h2>

<br/><hr/><br/>

<h2>Add : </h2>
<p>a = {a}</p>
<p>b = {b}</p>
<p>add = {a+b}</p>

</div>

</>
  );
}

export default About;




