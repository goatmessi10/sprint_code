import React, { useState } from 'react'
import {Button,  Modal} from 'react-bootstrap'
import TextField from '@material-ui/core/TextField';
import { NativeSelect} from '@material-ui/core';
import './Register.css'
import scLogoBlack from '../../Assets/scLogoBlack.png'
  

const Register = () => {
    const [state, setstate] = useState({show : false});
    const [courseName, setCourseName] = React.useState('');

  const handleChange = (event) => {
    setCourseName(event.target.value);
  };

    const handleModal = ()=>{
        const currentState = state.show ;
        setstate({show : !currentState});
    }

    return (
        <div>
            {/* <Button  className="registeration-button" onClick={()=>handleModal()} >Register</Button> */}
            <button className="registeration-button" onClick={()=>handleModal()} > Register </button>

            <Modal className='register-popup-back' show={state.show} >
               <Modal.Body className='register-pop-up'>
            <div>
                <img style={{height: '80px'}}src={scLogoBlack} alt="logo"></img>
            </div>
               <h3 style={{letterSpacing : '2px'}}>Register</h3>
               <TextField id="standard-basic" style={{width : '60%'}} type='text' label="Enter Name" />
               <br></br>
               <TextField id="standard-basic" style={{width : '60%'}} type='email' label="Email" />
               <br></br>
               <TextField id="standard-basic" style={{width : '60%'}} type='text' label="Phone Number" />
               {/* select intrested course */}
               <br></br> <br></br>

         <NativeSelect
          value={courseName}
          onChange={handleChange}
          name="age"
        //   className={classes.selectEmpty}
          inputProps={{ 'aria-label': 'age' }}
          style={{width : '60%'}}
          >
          <option value="">Select course</option>
          <option  value={'javaWithDsa'}>Java with DSA</option>
          <option value={'c++WithDsa'}>C++ with DSA</option>
          <option value={'python'}>Python</option>
        </NativeSelect>
        
        {/* <FormHelperText>Some important helper text</FormHelperText> */}
        <div style={{margin :'5px',padding:'inherit'}}>
        <Button style={{marginRight:'10px' }} onClick = {()=>handleModal()} >Enter</Button>
        <Button onClick={()=>handleModal()}>Close</Button>
        </div>
            </Modal.Body>
               
                  
            </Modal>
        </div>
    )

}

export default Register
