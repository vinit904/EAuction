import './ManageUser.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { __userapiurl } from '../../API_URL';
import { useNavigate } from 'react-router-dom';

function ManageUsers() {

  const navigate = useNavigate();
  const [users, setUserDetails] = useState([]);

  useEffect(() => {
    axios.get(__userapiurl + "fetch", {
      params: { "role": "user" }
    }).then((result) => {
      setUserDetails(result.data);
    }).catch((error) => {
      console.log(error);
    });
  });

  const changeuserstatus = (_id, s) => {
    if (s == "active") {
      axios.patch(__userapiurl + "update",
        { "condition_obj": { "_id": _id }, "content_obj": { "status": 1 } }
      ).then(() => {
        navigate("/manageusers");
      });
    }
    else if (s == "inactive") {
      axios.patch(__userapiurl + "update",
        { "condition_obj": { "_id": _id }, "content_obj": { "status": 0 } }
      ).then(() => {
        navigate("/manageusers");
      });
    }
    else {
      axios.delete(__userapiurl + "delete",
        { "data": { "_id": _id } }
      ).then(() => {
        alert("User deleted successfully....");
        navigate("/manageusers");
      });
    }
  };

  return (
    <>

      <div id="tooplate_content">
        <div >

          <h2>View & Manage User Details</h2>
          <table border={2} cellPadding={5} cellSpacing={5}>
            <tr>
              <th>UserID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Address</th>
              <th>City</th>
              <th>Gender</th>
              <th>Info</th>
              <th>Status</th>
              <th>Action</th>
            </tr>

            {users.map((row) => (
              <tr>
                <td>{row._id}</td>
                <td>{row.name}</td>
                <td>{row.email}</td>
                <td>{row.mobile}</td>
                <td>{row.address}</td>
                <td>{row.city}</td>
                <td>{row.gender}</td>
                <td>{row.info}</td>
                <td>{row.status ? <font color='green'>Active</font> : <font color='orange'>InActive</font>}</td>
                <td>
                  {row.status ? <font onClick={() => { changeuserstatus(row._id, 'inactive') }} color='blue'>Change Status</font> : <font onClick={() => { changeuserstatus(row._id, 'active') }} color='blue'>Change Status</font>}
                  <br />
                  <font onClick={() => { changeuserstatus(row._id, 'delete') }} color="red">Delete</font>
                </td>
              </tr>
            ))}

          </table>

        </div>
      </div>

    </>
  );
}

export default ManageUsers;



