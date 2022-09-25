
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAlert, getAlerts } from '../Redux/AlertData/action';
import 'material-icons/iconfont/material-icons.css';
import DeleteOutline from '@mui/icons-material/DeleteOutline';
import { Button, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import Paginationtable from './Pagination';
function createData(
  Name,
  PriceSignal,
  Criteria,
  Value,
  Email,
  ActiveDays,
  Actions,
  id
) {
  return { Name, PriceSignal, Criteria, Value, Email,ActiveDays,Actions,id};
}


export default function BasicTable(query) {
  const data=useSelector(store=>store.alertData.data)
  const dispatch=useDispatch()
  React.useEffect(()=>{
     dispatch(getAlerts({page:query.page,size:query.size}))
  },[])

  const rows = [];
    
   data.map((e)=>{
      rows.push(createData(e.name,e.priceSignal,e.criteria,e.value,e.email,e.days,{id:e._id}))
   })
   
   const deleteIcon =
   (<IconButton onClick={(e)=>{ 
    console.log(e.target.parentNode)
   }
   }>
    
     <DeleteOutline color="secondary" />
   </IconButton>
   );
   const handleDelete=(id)=>{
    dispatch(deleteAlert({id:id,page:query.page,size:query.size}))
   }
   const handleEdit=(id)=>{
    dispatch(deleteAlert({id:id,page:query.page,size:query.size}))
   }
   const editIcon = (
     <IconButton onClick={(e)=>console.log("edited")}>
       <EditIcon color="primary" />
     </IconButton>
   );
  return (
    <TableContainer component={Paper} >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Price Signal</TableCell>
            <TableCell align="right">Criteria</TableCell>
            <TableCell align="right">Value</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Active Days</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.Actions.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.Name}
              </TableCell>
              <TableCell align="right">{row.PriceSignal}</TableCell>
              <TableCell align="right">{row.Criteria}</TableCell>
              <TableCell align="right">{row.Value}</TableCell>
              <TableCell align="right">{row.Email}</TableCell>
              <TableCell align="right">{row.ActiveDays}</TableCell>
              <TableCell align="right" ><Button onClick={()=>console.log("edit model")}>edit</Button><Button onClick={()=>handleDelete(row.Actions.id)}>delete</Button> </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export const Formdata =({query,paging})=>{
  console.log(paging,"pagii")
    return(<>
    <BasicTable query={query}/>
    <div className='pagination-wrapper'><Paginationtable paging={paging}/></div>
    </>
    )
}