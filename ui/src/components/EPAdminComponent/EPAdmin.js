import './EPAdmin.css';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { __userapiurl } from '../../API_URL';
import { useNavigate } from 'react-router-dom';

function EPAdmin() {

  const navigate = useNavigate();

  const [output, setOutput] = useState();

  const [email, setEmail] = useState()

  const [name, setName] = useState();

  const [mobile, setMobile] = useState();
  const [address, setAddress] = useState();
  const [city, setCity] = useState();
  const [gender, setGender] = useState();

  

  useEffect(() => {
    axios.get(__userapiurl + "fetch",
      { params: { "email": localStorage.getItem("email") } }).then((result) => {

        const user = result.data[0]
        setName(user.name)
        setEmail(user.email)
        setMobile(user.mobile)
        setAddress(user.address)
        setCity(user.city)

      })
  }, [])



  const handleSubmit = () => {

    axios.patch(__userapiurl + "update",
      { "condition_obj": { "email": email }, "content_obj": { "name": name, "mobile": mobile, "address": address, "city": city , "gender":gender} }
    ).then(() => {
      setOutput("Profile updated successfully");
      // navigate("/admin");
    }).catch((error) => {

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
            <label >Email</label>
            <input
              readOnly="readonly"
              name="email"
              onChange={e => setName(e.target.value)}
              value={email}
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

          <fieldset class="form-field">
            <legend>Gender</legend>
            <div class="radio-group">
              <label class="radio">
                <input type="radio" name="gender" onChange={e => setGender(e.target.value)} value="male" required />
                <span>Male</span>
              </label>
              <label class="radio">
                <input type="radio" name="gender" onChange={e => setGender(e.target.value)} value="female" required />
                <span>Female</span>
              </label>
            </div>
          </fieldset>

          <div class="form-actions">
            <button type="button" onClick={handleSubmit} class="btn-primary">Update profile</button>
          </div>
        </form>
      </section>




    </>
  );
}

export default EPAdmin;