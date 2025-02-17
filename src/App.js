import React, { useState } from 'react'
import { useContext,userContext } from './context';

function App() {   
    // let user=useContext(userContext);
    const [list,setList]=useState([]);
    const [name,setName]=useState("");
    const changed=(e)=>{
        setName(e.target.value);
    }
    const added=(e)=>{
        if(name!==""){
            const res={name:name,isauth:"Yes"}
            setList([...list,res]);
            e.preventDefault();
        }
    }
    const signedout=()=>{
        const res={name:"",isauth:"No"}
        setList([...list,res]);
        e.preventDefault();
    }
    const reset=(e)=>{
        setList([]);
        e.preventDefault();
    }
    function remove(i){
        const newlist=list.filter((_,index)=>index!==i);
        setList(newlist);
        e.preventDefault();
    }
  return (
    <div id='main'>
        <form>
            <input id='shopping-input' type='text' onChange={changed}></input>
            <button id='login-btn' onClick={added}>Longin</button>
            <button id='signout' onClick={signedout}>Signout</button>
            <button id='clear-list' onClick={reset}>ClearList</button>
        </form>
        <div id='current-user'>
            <ul key="relative">
                {
                    list.map((item,index)=>{
                        return <li key="{item.name}" id='item-{item.name}'>Current user:{item.name}, isAuthenticated: {item.isauth} <button id="remove-{item.name}" onClick={()=>{remove(index)}}>Remove</button></li>
                    })
                }
            </ul>
        </div>
    </div>
  )
}

export default App