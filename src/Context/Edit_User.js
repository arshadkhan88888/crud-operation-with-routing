import React, {useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { contxt } from './ContextGlobal';

const Edit_User = (props) => {
    const {data,editUser}=useContext(contxt)
    const [data1,setData1]=useState({})
    
    let history=useHistory()

    const currentuser=props.match.params.id

    useEffect(()=>{
        debugger
        const userId=currentuser;
        debugger
        const data2=data.find((ele)=>ele.id===Number(userId))
        debugger
        setData1(data2)
    },[currentuser,data])

    const handleChange=(e)=>{
        let key=e.target.id;
        let val=e.target.value;
        setData1({
            ...data1,[key]:val
        })
    }

    const handleClick=()=>{
        editUser(data1)
        history.push('/')
    }

    return (
        <div>
            <h1>Update User</h1>
            <label>Name</label>
            <input type='text' placeholder="Name" id="name"  value={data1.name} onChange={handleChange}/>
            <label>phone</label>
            <input type='number' placeholder="Phone" id="phone" value={data1.phone} onChange={handleChange}/>
            <label>City</label>
            <input type='text' placeholder="City" id="city" value={data1.city} onChange={handleChange}/>
            <button  className='btn btn-warning ml-2' onClick={handleClick}>Update</button>
            <Link to='/'  className='btn btn-secondary ml-4'>Cancel</Link>
        </div>
    );
};

export default Edit_User;