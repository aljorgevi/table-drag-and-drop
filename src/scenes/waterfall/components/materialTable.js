// import React, { useState } from 'react';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const reorder = (list, startIndex, endIndex) => {
//   const result = Array.from(list);
//   const [removed] = result.splice(startIndex, 1);
//   result.splice(endIndex, 0, removed);

//   return result;
// };

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9)
// ];

// const jobs = [
//   { name: 'job1', id: 1 },
//   { name: 'job2', id: 2 },
//   { name: 'job3', id: 3 },
//   { name: 'job4', id: 4 },
//   { name: 'job5', id: 5 },
//   { name: 'job6', id: 6 },
//   { name: 'job7', id: 7 }
// ];

// export default function BasicTable() {
//   const [dragging, setDragging] = useState(false);

//   const onDragEnd = result => {
//     const { source, destination } = result;
//     // dropped outside the list
//     if (!result.destination) return;

//     const fileredColumn = reorder(columnData, source.index, destination.index);

//     setColumnData(fileredColumn);
//   };

//   return (
//     <>
//       <div className='title'>Sequence of runs</div>
//       <TableContainer component={Paper}>
//         <Table sx={{ minWidth: 650 }} aria-label='simple table'>
//           <TableHead>
//             <TableRow>
//               {jobs.map(job => {
//                 return (
//                   <TableCell align='right' key={job.id}>
//                     <div>
//                       <div className='text-center'>{job.name}</div>
//                       <div>Type: Existing</div>
//                       <input type='text' placeholder='Insert RUN ID' />
//                       <div>Description</div>
//                     </div>
//                   </TableCell>
//                 );
//               })}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {rows.map(row => (
//               <TableRow
//                 key={row.name}
//                 sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//               >
//                 <TableCell component='th' scope='row' className='border-red'>
//                   {row.name}
//                 </TableCell>
//                 <TableCell align='right'>{row.calories}</TableCell>
//                 <TableCell align='right'>{row.fat}</TableCell>
//                 <TableCell align='right'>{row.carbs}</TableCell>
//                 <TableCell align='right'>{row.protein}</TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </>
//   );
// }
