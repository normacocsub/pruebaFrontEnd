import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});

let id = 0;
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return { id, name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen ', 159, 6.0, 24, 4.0),
  createData('Ice cream ', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];


const Historys = (props) => {
    return (
        <div style={{paddingTop: ('5%')}}>
            <Paper >
                <Table >
                    <TableHead>
                    <TableRow>
                        <CustomTableCell align="center">Ciudad</CustomTableCell>
                        <CustomTableCell align="center">Info</CustomTableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {props.history?.map(row => (
                        <TableRow  key={row.id}>
                        <CustomTableCell align="center">
                            {row.city}
                        </CustomTableCell>
                        <CustomTableCell align="center">{row.info}</CustomTableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </Paper>
        </div>
    );
} 

export default Historys;