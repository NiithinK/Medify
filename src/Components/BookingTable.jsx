
import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function createData(name, times) {
  return { name, times };
}

const rows = [
  createData('Morning', ['10:00AM', '10:30AM', '11:00AM']),
  createData('Afternoon', ['12:00PM', '12:30PM', '1:00PM']),
  createData('Evening', ['6:00PM', '6:30PM', '7:00PM']),
];

const BasicTable = ({ onTimeSelect }) => {
  return (
    <TableContainer>
      <Table sx={{ minWidth: 200 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Timing</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              {row.times.map((time) => (
                <TableCell key={time} align="right">
                  <button style={{cursor:'pointer'}} onClick={() => onTimeSelect(time)}>{time}</button>
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BasicTable;

