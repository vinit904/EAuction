import './CPUser.css';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { __userapiurl } from '../../API_URL';
import { useNavigate } from 'react-router-dom';

function CPUser() {

  const navigate = useNavigate();

  const [output, setOutput] = useState();

  const [email] = useState(localStorage.getItem("email"))

  const [oldpassword, setOldPassword] = useState();
  const [newpassword, setNewPassword] = useState();
  const [confirmpassword, setConfirmPassword] = useState();


  const handleSubmit = () => {

    axios.get(__userapiurl+"fetch", {
      params: { "email": email, "password": oldpassword }

    }).then((result) => {
      if (newpassword == confirmpassword) {
        axios.patch(__userapiurl + "update",
          { "condition_obj": { "email": email }, "content_obj": { "password": confirmpassword } }
        ).then(() => {
          alert("password updated successfully");
          navigate("/logout");
        })
    }else{
      setOutput("New & Confirm New Password Mismatch....");    
        setNewPassword("");
        setConfirmPassword("");
    }}).catch ((error) => {

    setOutput("Invalid old password....");
    setOldPassword("");
  })


}



return (
  <>
   
    <section id="login" class="form-section">
      <h3 style={{ 'color': 'red' }}>{output}</h3>


      <form class="form-card">

        <div class="form-field">
          <label >Old Password</label>
          <input
            type="password"
            id="email"
            name="oldpassword"
            required 
            onChange={e => setOldPassword(e.target.value)}
            value={oldpassword}
          />
        </div>

        <div class="form-field">
          <label >New Password</label>
          <input
            type="password"
            required  
            name="Newpassword"
            onChange={e => setNewPassword(e.target.value)}
            value={newpassword}
          />
        </div>

        <div class="form-field">
          <label >Confirm Password</label>
          <input
            type="password"
            name="oldpassword"
            required  
            onChange={e => setConfirmPassword(e.target.value)}
            value={confirmpassword}
          />
        </div>





        <div class="form-actions">
          <button type="button" onClick={handleSubmit} class="btn-primary">Update Password</button>
        </div>
      </form>
    </section>




  </>
);
}

export default CPUser;