import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { contxt } from './ContextGlobal';

const Users = () => {
debugger
const {data,deleteUser,deleteALLUser}=useContext(contxt)



return (
        <div>
        <Link  className='btn btn-info' to ="/add_User">Add User</Link>
        <button onClick={deleteALLUser} className='btn btn-danger ml-4'>DELETE ALL</button>
            <h1>Users</h1>
            <table className="table table-bordered table-dark">
            <thead>
            <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>City</th>
            <th>EDIT</th>
            <th>DELETE</th>
            </tr>
            </thead>
            <tbody>
            {
               data.map((ele)=>
               <tr>
               <td>{ele.name}</td>
               <td>{ele.phone}</td>
               <td>{ele.city}</td>
               <td><Link className='btn btn-success' to={`edit_user/${ele.id}`}>EDIT</Link></td>
               <td><button  className='btn btn-danger' onClick={()=>deleteUser(ele.id)}>DELETE</button></td>
               </tr>
               )
            }
            </tbody>
            </table>

        </div>
    );
};

export default Users;