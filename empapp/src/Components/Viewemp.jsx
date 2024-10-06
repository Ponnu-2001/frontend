import { Table, TableRow, TableContainer, TableCell, TableHead, TableBody } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { Button } from '@mui/material'
import {useNavigate} from 'react-router-dom'
const Viewemp = () => {
    var [user, SetUser] = useState([])
    var navigate = useNavigate();

    axios.get("http://localhost:3004/view")
        .then((response) => {
            console.log(response.data)
            SetUser(response.data)
        })
    const delvalue = (id) => {
        console.log(id)
        axios.delete("http://localhost:3004/remove/" + id)
            .then((response) => {
                alert(response.data.message)
                window.location.reload();
                
            })
    }
    const updatevalue = (val) => {
        navigate("/addemp", { state: { val } });
    };
    

    return (
        <div>
            <h1>Employee Details</h1>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Age</TableCell>
                            <TableCell>Dept</TableCell>
                            <TableCell>Sal</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {user.map((val) => {
                            return (
                                <TableRow>
                                    <TableCell>{val.Name}</TableCell>
                                    <TableCell>{val.Age}</TableCell>
                                    <TableCell>{val.Dept}</TableCell>
                                    <TableCell>{val.Sal}</TableCell>
                                    <TableCell>
                                        <button onClick={() => {
                                            delvalue(val._id)
                                        }}>Delete</button>

                                    
                                    </TableCell>
                                    <TableCell>
                                        <Button onClick={() => {
                                            delvalue(val._id)
                                        }}>Update</Button>
                                        <Button variant="contained"
                                            Color='success'
                                            onClick={() => {
                                                updatevalue(val)
                                            }}>Update</Button>
                                          
                                      


                                    </TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>

                </Table>
            </TableContainer>
        </div>
    )
}

export default Viewemp
