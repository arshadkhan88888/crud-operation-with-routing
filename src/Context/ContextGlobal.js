import React, { createContext, useReducer } from 'react';
import { Reducer } from './Reducers';

const InitData={
    data:[]
}

export const contxt= createContext(InitData)

export const ContxtProvider=({children})=>{
    const [state,dispatch]=useReducer(Reducer,InitData);

 const addUser=(data)=>{
        dispatch({
            type:'ADD_USER',
            payload:data
        })
    }
 
    const deleteUser=(id)=>{
        dispatch({
            type:'DELETE_USER',
            payload:id
        })
    }
    
    const editUser=(data)=>{
        dispatch({
            type:'UPDATE_USER',
            payload:data
        })
    }

    const deleteALLUser=(data)=>{
        dispatch({
            type:'DELETE_ALL_USER',
            payload:data
        })
    }

    return(
        <contxt.Provider value={{
            data:state.data,
            addUser,
            deleteUser,
            editUser,
            deleteALLUser
        }}>

        {children}
        </contxt.Provider>
    )
}