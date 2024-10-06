import React, { useEffect } from 'react'
import { Button, TextField } from '@mui/material' 
import { useState } from 'react'
import axios from 'axios'
import {useLocation} from 'react-router-dom'

const Addemp = (props) => {
    var [inputs, setInputs] = useState({ Name: "", Age: "", Dept: "", Sal: "" })
    var location= {useLocation}
    console.log(inputs);

    const inputHandler = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
        console.log(inputs);
    }
    const addHandler = () => {
        if(location.state!==null){}
        axios.post("http://localhost:3004/add",inputs)
            .then((response)=>{
           console.log(response);
                alert(response.data.message);
               
            })
        
    }
    
  return (
      <div>
          <h1> ADD EMPLOYEE</h1>
          < TextField
              variant="outlined"
              label="Name"
              value={inputs.Name}
              onChange={inputHandler}
              name="Name"/><br/>
          
           <TextField
              variant="outlined"
              label="Age"
              value={inputs.Age}
              onChange={inputHandler}
              name="Age" /><br />
          <TextField
              variant="outlined"
              label="Dept"
              value={inputs.Dept}
              onChange={inputHandler}
              name="Dept" /><br />
          
          <TextField
              variant="outlined"
              label="Sal"
              value={inputs.Sal}
              onChange={inputHandler}
              name="Sal" /><br />
          
          
          <Button variant='Contained' color='secondary' onClick={addHandler}>Submit</Button>
      
    </div>
  )
}

export default Addemp
