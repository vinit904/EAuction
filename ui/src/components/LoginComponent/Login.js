import './Login.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { __userapiurl } from '../../API_URL'; 


{/* 
  import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const RECAPTCHA_SITE_KEY = "your_site_key_here";

function ContactForm() {
  const [captchaValue, setCaptchaValue] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!captchaValue) {
      setError("Please complete the reCAPTCHA");
      return;
    }

    const payload = {
      ...formData,
      recaptchaToken: captchaValue,
    };

    try {
      const res = await fetch("http://localhost:8080/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (res.ok) {
        setSuccess("Form submitted successfully!");
        setError("");
        setCaptchaValue(null);
      } else {
        setError(data.message || "Submission failed");
      }
    } catch (err) {
      setError("Server error: " + err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        required
      />
      <textarea
        placeholder="Message"
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        required
      />

      <ReCAPTCHA sitekey={RECAPTCHA_SITE_KEY} onChange={handleCaptchaChange} />
      
      <button type="submit">Submit</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}
    </form>
  );
}
export default ContactForm;
  */}

function Login() {
  const navigate = useNavigate();
  const [output, setOutput] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = () => {
    const userDetail = { "email": email, "password": password };
    axios.post(__userapiurl+"login" , userDetail).then((response) => {
      console.log("login response");
      const userData = response.data.user;
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("email", userData.email);
      localStorage.setItem("mobile", userData.mobile);
      localStorage.setItem("address", userData.address);
      localStorage.setItem("city", userData.city);
      localStorage.setItem("gender", userData.gender);
      localStorage.setItem("role", userData.role);
      localStorage.setItem("info", userData.info);
      userData.role=="admin"?navigate("/admin"):navigate("/user");
      
    }).catch(() => {
      setOutput("Invaild user or please verify your account")
      setEmail("");
      setPassword("")
    });
  }



  return (
    <>

      <section id="login" class="form-section">
        <h2>Login</h2>

        <h3>{output}</h3>

        <form class="form-card">

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
              value={email}
            />
          </div>


          <div class="form-field">
            <label >Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
              minlength="8"
              autocomplete="current-password"
              onChange={e => setPassword(e.target.value)}
              value={password}
            />
          </div>


          <div class="form-actions">
            <button type="button" onClick={handleSubmit} class="btn-primary">Login</button>
          </div>
        </form>
      </section>




    </>
  );
}

export default Login;




