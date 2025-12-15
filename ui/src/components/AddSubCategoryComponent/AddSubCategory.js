import './AddSubCategory.css';
import { useState , useEffect } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { __categoryapiurl } from '../../API_URL';
import { __subcategoryapiurl } from '../../API_URL';

function AddSubCategory() {

  const navigate = useNavigate();

  const [output, setOutput] = useState()
  const [catnm, setCatnm] = useState()
  const [subcatnm, setSubcatnm] = useState()
  const [File, setFile] = useState(null)
  const [cDetails, setCDetails] = useState([])

  useEffect(()=>{
    axios.get(__categoryapiurl + "fetch")
    .then((response) => {
      setCDetails(response.data);
    })
    .catch((error) => {
      console.error("Error fetching categories:", error);
    });
  },[]);

  const handleChange=(event)=>{
  setFile(event.target.files[0]);
 }

 const handleSubmit =(event)=>{
  event.preventDefault();
  if(!catnm ||!subcatnm|| !File)
  {
    setOutput("All fields are required");
    return;
  }
  const formdata = new FormData();
  formdata.append('catnm',catnm);
  formdata.append('subcatnm',subcatnm);
  formdata.append('caticon',File);
  axios.post(__subcategoryapiurl + "save",formdata,{
    headers:{
      'Content-Type':'multipart/form-data'
    }
  }).then((response)=>{
    //console.log(response.data);
    setCatnm("");
    setSubcatnm("");
    setFile(null);   
    setOutput("Sub Category added successfully");
      
  }).catch((error)=>{
    //console.log(error);
    setOutput("Sub Category not added successfully");
  })
}
  
  
  


  return (
<>
  <section class="form-section">
    <h2>Add Category</h2>

    <h3>{output}</h3>

    <form class="form-card">

      <div class="form-field">
      <label>Category Name</label>
      <select onChange={e => setCatnm(e.target.value)} value={catnm}>
        <option>Select Category</option>
        {
          cDetails.map((row) => (
            <option key={row._id} value={row.catnm}>{row.catnm}</option>
          ))
        }
      </select>
      </div>

      <div class="form-field">
        <label >Sub Category Name:</label>
        <input type="text" required onChange={e => setSubcatnm(e.target.value)} value={subcatnm} />
      </div>

      <div class="form-field">
        <label >Sub Category Icon:</label>
        <input type="file" onChange={handleChange}/>
      </div>

      <div class="form-actions">
        <button type="button"  onClick={handleSubmit} class="btn-primary">Add category</button>
      </div>
    </form>
  </section>

</>)
}

export default AddSubCategory;