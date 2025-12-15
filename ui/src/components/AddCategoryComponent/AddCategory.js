import './AddCategory.css';
import { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';  
import { __categoryapiurl } from '../../API_URL';

function Addcategory() {

  const navigate = useNavigate();

  const [output, setOutput] = useState()
  const [catnm, setCatnm] = useState()
  const [File, setFile] = useState(null)

  const handleChange =(event) =>{
    //console.log(event)
    setFile(event.target.files[0]);

  }

  const handleSubmit =(event)=>{
  event.preventDefault();
  if(!catnm || !File)
  {
    setOutput("All fields are required");
    return;
  }
  const formdata = new FormData();
  formdata.append('catnm',catnm);
  formdata.append('caticon',File);
  axios.post(__categoryapiurl + "save",formdata,{
    headers:{
      'Content-Type':'multipart/form-data'
    }
  }).then((response)=>{
    //console.log(response.data);
    setCatnm("");
    setFile(null);   
    setOutput("Category added successfully");
    navigate('/AddCategory');    
  }).catch((error)=>{
    //console.log(error);
    setOutput("Category not added successfully");
  })
}
  
  return (
<>
  <section  class="form-section">
    <h2>Add Category</h2>

    <h3>{output}</h3>

    <form class="form-card">

      <div class="form-field">
        <label >Category Name:</label>
        <input type="text" required onChange={e=> setCatnm(e.target.value)} value={catnm} />
      </div>

      <div class="form-field">
        <label >Category Icon:</label>
        <input type="file" onChange={handleChange} />
      </div>

      <div class="form-actions">
        <button type="button" onClick={handleSubmit} class="btn-primary">Add category</button>
      </div>
    </form>
  </section>

</>)
}




export default Addcategory;