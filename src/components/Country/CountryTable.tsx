import React from 'react'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TablePagination from '@mui/material/TablePagination'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'

import CountryRow from './CountryRow'
import { Languages, CountryTableProps, Column } from '../../types/country'

const fontSize = {
  fontSize: '0.3em',
}

const columns: Column[] = [
  {
    id: 'flag',
    label: 'Flag',
    minWidth: 150,
    format: (value: string) => (
      <img src={value} alt="flag" width="60" height="30" />
    ),
  },
  { id: 'name', label: 'Name', minWidth: 100 },
  {
    id: 'population',
    label: 'Population',
    minWidth: 180,
    align: 'left',
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'languages',
    label: 'Languages',
    minWidth: 150,
    align: 'left',
    format: (value: Languages[]) => (
      <List sx={{ ...fontSize }}>
        {value.map((l) => (
          <ListItem disablePadding key={l.name}>
            <ListItemText primary={l.name} />
          </ListItem>
        ))}
      </List>
    ),
  },
  {
    id: 'region',
    label: 'Region',
    minWidth: 150,
    align: 'left',
  },
]

export default function CountryTable({
  countries,
  page,
  rowsPerPage,
  handleChangePage,
  handleChangeRowsPerPage,
}: CountryTableProps) {
  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 'vh' }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                  sx={{ fontWeight: 'bold', fontSize: 16 }}
                >
                  {column.label}
                </TableCell>
              ))}
              <TableCell sx={{ fontWeight: 'bold', fontSize: 16 }}>
                Details
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {countries
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((country) => {
                return (
                  <CountryRow
                    key={country.name}
                    country={country}
                    columns={columns}
                  />
                )
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={countries.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  )
}
