import React, { useState } from 'react'
import {Button,  Modal} from 'react-bootstrap'
import TextField from '@material-ui/core/TextField';
import { NativeSelect} from '@material-ui/core';
import './Register.css'
import scLogoBlack from '../../Assets/scLogoBlack.png'
import {db} from '../../firebase.js'
// import SelectInput from '@material-ui/core/Select/SelectInput';
  

const Register = () => {
    const [state, setstate] = useState({show : false});
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [course, setCourse] = useState("");
    
  

    const handleModal = ()=>{
        const currentState = state.show ;
        setstate({show : !currentState});
    }
    const handleData =()=>{
    db.collection("users").add({
        name : name ,
        email : email,
        number : number,
        course : course
    })  
    console.log(name,email,number,course);
    handleModal();
    }

  
    return (
            <div>
            <button className="registeration-button" onClick={()=>handleModal()} > Register </button>
            <Modal className='register-popup-back' show={state.show} >
               <Modal.Body className='register-pop-up'>
            <div>
                <img style={{height: '80px'}}src={scLogoBlack} alt="logo"></img>
            </div>
               <h3 style={{letterSpacing : '2px'}}>Register</h3>
               <TextField id="standard-basic" value={name} onChange={event=>setName(event.target.value)}  style={{width : '60%'}} type='text' label="Enter Name" />
               <br></br>
               <TextField id="standard-basic" value={email} onChange={event=>setEmail(event.target.value)} style={{width : '60%'}} type='email' label="Email" />
               <br></br>
               <TextField id="standard-basic" value={number} onChange={event=>setNumber(event.target.value)} style={{width : '60%'}} type='text' label="Phone Number" />
               {/* select intrested course */}
               <br></br> <br></br>

         <NativeSelect
          value={course}
          onChange={event=>setCourse(event.target.value)}
          inputProps={{ 'aria-label': 'age' }}
          style={{width : '60%'}}
          >
          <option value="">Select course</option>
          <option  value={'javaWithDsa'}>Java with DSA</option>
          <option value={'c++WithDsa'}>C++ with DSA</option>
          <option value={'python'}>Python</option>
        </NativeSelect>
        
        <div style={{margin :'5px',padding:'inherit'}}>
        <Button disabled={ !(name && email)} style={{marginRight:'10px' }} onClick = {()=>handleModal()} >Enter</Button>
        <Button onClick={()=>handleModal()}>Close</Button>
        </div>
            </Modal.Body>
               
        
            </Modal>
        </div>
    )

}

export default Register
