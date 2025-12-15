import { useState , useEffect } from 'react';
import './Service.css';
import axios from 'axios';

function Service() {

  const [ users , setUserDetails ] = useState([]);
  const api_url="https://jsonplaceholder.typicode.com/users";

  useEffect(()=>{
    var d=[];
    axios.get(api_url).then((result)=>{
      result.data.map((row,i)=>{
        d.push({});
        Object.keys(row).map((k)=>{
         if(typeof row[k]=='object')
         {
          Object.keys(row[k]).map((k1)=>{
           if(typeof row[k][k1]=='object')
           {
            Object.keys(row[k][k1]).map((k2)=>{
              d[i][k2]=row[k][k1][k2];
            });
           }
           else
            d[i][k1]=row[k][k1];
          });
         }
         else 
          d[i][k]=row[k];
        });
       });
       //console.log(d);
       setUserDetails(d);
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
  <th>ID</th>
  <th>Name</th>
  <th>Phone</th>
  <th>Street</th>
  <th>Lat</th>
  </tr>
  
  {
    users.map((row)=>(
      <tr>
        <td>{row.id}</td>
        <td>{row.name}</td>
        <td>{row.phone}</td>
        <td>{row.street}</td>
        <td>{row.lat}</td>
      </tr>    
    ))
  }
    
  </table>


</div>

</>
  );
}

export default Service;




