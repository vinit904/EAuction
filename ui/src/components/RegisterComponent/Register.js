import './Register.css';

import { useState } from 'react';

import axios from 'axios'






function Register() {

  const [output , setOutput] = useState();

  const [name , setName] = useState();
  const [email , setEmail] = useState();
  const [password , setPassword] = useState();
  const [mobile , setMobile] = useState();
  const [address , setAddress] = useState();
  const [city , setCity] = useState();
  const [gender, setGender] = useState();

  const handleSubmit =(e) => {
    
    const userDetail = { 
      "name": name ,
      "email" : email , 
      "password":password ,
      "mobile" : mobile , 
      "address": address,
      "city": city,
      "gender":gender 
    };

    const apiUrl = "http://localhost:3005/user/save";

    axios.post(apiUrl,userDetail).then(()=>{
      setOutput("successful")
      setName("");
      setEmail("");
      setPassword("");
      setMobile("");
      setAddress("");
      setCity("");
    }).catch(()=>{
      setOutput("failed")
    });
  };
  

  return (
    <>


      <section id="register" class="form-section">
        <h2>Register</h2>

        <h3>{output}</h3>

        <form class="form-card" >

          <div class="form-field">
            <label >Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your full name"
              required
              autocomplete="name"
              onChange={ (e) => setName(e.target.value) }
              value={name}
              
            />
            
                    
          </div>

          <div class="form-field">
            <label >Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              required
              autocomplete="email"
              onChange={e => setEmail(e.target.value)}
              value = {email}

            />
          </div>


          <div class="form-field">
            <label >Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Minimum 8 characters"
              required
              minlength="8"
              autocomplete="new-password"
              onChange={e => setPassword(e.target.value)}
              value={password}
            />
          </div>

          <div class="form-field">
            <label >Mobile</label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              placeholder="10-digit mobile number"
              required
              pattern="[0-9]{10}"
              inputmode="numeric"
              autocomplete="tel"
              onChange={e => setMobile(e.target.value)}
              value={mobile}
            />
          </div>

          <div class="form-field">
            <label >Address</label>
            <textarea
              id="address"
              name="address"
              rows="3"
              placeholder="House no., street, area"
              required
              autocomplete="street-address"
              onChange={e => setAddress(e.target.value)}
              value={address}
            ></textarea>
          </div>


          <div class="form-field">
            <label >City</label>
            <select onChange={e => setCity(e.target.value)} value={city}>
             <option>select city</option>  
            <option>Indore</option>
            <option>Ujjain</option>
            <option>Dhar</option>
            <option>Dewas</option>
            </select>
            
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


          <div >
            <button type='button' onClick={handleSubmit} class="btn-primary">Submit</button>
          </div>
        </form>
      </section>




    </>
  );
}

export default Register;




