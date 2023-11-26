import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import { removeToCart } from '../redux/action';
export const Cart = (id) => {
    
    const dispatch = useDispatch()

    const cartProduct = useSelector(state => state.cartProductReducer)

    const totalPrice = cartProduct.reduce((acc, val) => {
        return acc + val.price
    }, 0)


    return (

        <TableContainer component={Paper} style={{opacity:"0.7"}}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell style={{fontSize:"20px" , fontWeight:"bolder"}} >Title</TableCell>
                        <TableCell style={{ fontWeight: "bolder",fontSize:"15px" }} align="right">Image</TableCell>
                        <TableCell style={{ fontWeight: "bolder",fontSize:"15px"  }} align="right">Price&nbsp;(Rs)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {cartProduct.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row" style={{fontWeight:"bold"}}>
                                {row.title}
                            </TableCell>
                            <TableCell align="right">
                                <img src={row.image} height="80" width="100" />
                            </TableCell>
                            <TableCell align="right">{row.price}</TableCell>
                            <TableCell>
                            <RemoveShoppingCartIcon variant="outlined" style={{color:"red"}} onClick={() => dispatch(removeToCart(row.id))}/>
                            </TableCell>

                        </TableRow>
                    ))}
                    <TableRow>
                        <TableCell style={{ fontWeight: "bold",fontSize:"20px" }} colSpan={2} align="left" >Total</TableCell>
                        <TableCell style={{ fontWeight: "bold",fontSize:"20px",color:"green" }} align="right" >{totalPrice}</TableCell>
                    </TableRow>
                   
                </TableBody>
            </Table>
        </TableContainer>
    )


}
