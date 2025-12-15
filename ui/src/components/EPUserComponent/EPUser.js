import './EPUser.css';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { __userapiurl } from '../../API_URL';
import { useNavigate } from 'react-router-dom';

function EPUser() {

  const navigate = useNavigate();

  const [output, setOutput] = useState();

  const [email] = useState(localStorage.getItem("email"))

  const [name, setName] = useState();
  const [mobile, setMobile] = useState();
  const [address, setAddress] = useState();
  const [city, setCity] = useState();
 


  const handleSubmit = () => {

    axios.patch(__userapiurl + "update",
          { "condition_obj": { "email": email }, "content_obj": { "name": name , "mobile": mobile , "address": address , "city" : city } }
        ).then(() => {
          setOutput("Profile updated successfully");
          // navigate("/admin");
        }).catch((error)=>{
          
          setOutput("update failed");

        
        });

}



return (
  <>
   
    <section id="login" class="form-section">
      <h3 style={{ 'color': 'red' }}>{output}</h3>


      <form class="form-card">

        <div class="form-field">
          <label >Name</label>
          <input

            name="name"
            onChange={e => setName(e.target.value)}
            value={name}
          />
        </div>

        <div class="form-field">
          <label >Mobile</label>
          <input

            name="Contact"
            onChange={e => setMobile(e.target.value)}
            value={mobile}
          />
        </div>

        <div class="form-field">
          <label >Address</label>
          <input
          
            name="Address"
            onChange={e => setAddress(e.target.value)}
            value={address}
          />
        </div>

         <div class="form-field">
          <label >City</label>
          <input

            name="City"
            onChange={e => setCity(e.target.value)}
            value={city}
          />
        </div>

        <div class="form-actions">
          <button type="button" onClick={handleSubmit} class="btn-primary">Update profile</button>
        </div>
      </form>
    </section>




  </>
);
}

export default EPUser;