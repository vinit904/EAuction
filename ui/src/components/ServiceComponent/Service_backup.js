import { useState , useEffect } from 'react';
import './Service.css';
import axios from 'axios';

function Service() {

  const [ posts , setPostDetails ] = useState([]);
  const api_url="https://jsonplaceholder.typicode.com/todos";

  useEffect(()=>{
    axios.get(api_url).then((result)=>{
      //console.log(result);
      setPostDetails(result.data);
    }).catch((error)=>{
      console.log(error);
    });
  },[]);

  return (
<>   

<div id="content" >
  <h1>View & Manage Posts Details</h1>
  <br/>
  <table border={3} cellPadding={10} cellSpacing={10}>
  <tr>
  <th>UserID</th>
  <th>ID</th>
  <th>Title</th>
  <th>Completed</th>
  </tr>
  
  {
    posts.map((row)=>(
      <tr>
        <td>{row.userId}</td>
        <td>{row.id}</td>
        <td>{row.title}</td>
        <td>{row.completed.toString()}</td>
      </tr>    
    ))
  }
    
  </table>


</div>

</>
  );
}

export default Service;




