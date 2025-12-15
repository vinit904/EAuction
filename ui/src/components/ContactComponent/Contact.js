import './Contact.css';
import { useState } from 'react';

function Contact() {

  const [ mks , setMarks ] = useState([34,56,78,90,43]);
  
  const [ emp , setEmpDetails ] = useState({"eno":1001,"enm":"jarvis","esal":10000.56});

  const [ users , setUserDetails ] = useState([{"uid":10101,"username":"user1@gmail.com","password":"user@123"},{"uid":10102,"username":"user2@gmail.com","password":"user@678"},{"uid":10103,"username":"user3@gmail.com","password":"user@986"}]);

  return (
<>   

<div id="content" >
  <h1>Component : Contact</h1>
  
  <br/><hr/><br/>    
  <h2>View & Manage User Details</h2>  
  <table border="1" cellPadding={10} cellSpacing={10} >
  <tr>
  <th>UserID</th>
  <th>Username</th>
  <th>Password</th>  
  </tr>

  {
    users.map((row)=>(
      <tr>
        <td>{row.uid}</td>
        <td>{row.username}</td>
        <td>{row.password}</td>      
      </tr>        
    ))
  }    

  </table>    


  <br/><hr/><br/>    
  <h2>Employee Details Loop Access</h2>
  {
    Object.keys(emp).map((k)=>(
      <p>{k}----&gt;{emp[k]}</p>
    ))
  }

  <br/><hr/><br/>    
  <h2>Employee Details Manual Access</h2>
  <p>Eno : {emp.eno}</p>
  <p>Enm : {emp['enm']}</p>
  <p>Esal : {emp['esal']}</p>

  <br/><hr/><br/>    
  <h2>Marks List Loop Access</h2>
  {
    mks.map((x)=>(
      <p>{x}</p>
    ))
  }

  <br/><hr/><br/>    
  <h2>Marks List Manual Access</h2>
  <p>Marks 1 : {mks[0]}</p>
  <p>Marks 2 : {mks[1]}</p>
  <p>Marks 3 : {mks[2]}</p>
  <p>Marks 4 : {mks[3]}</p>
  <p>Marks 5 : {mks[4]}</p>

</div>

</>
  );
}

export default Contact;




