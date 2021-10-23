import React from 'react'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TablePagination from '@mui/material/TablePagination'

import CountryRow from './CountryRow'
import { Languages, CountryTableProps, Column } from '../types/country'

const columns: Column[] = [
  {
    id: 'flag',
    label: 'flag',
    minWidth: 170,
    format: (value: string) => (
      <img src={value} alt="flag" width="60" height="30" />
    ),
  },
  { id: 'name', label: 'Name', minWidth: 100 },
  {
    id: 'population',
    label: 'Population',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'languages',
    label: 'Languages',
    minWidth: 170,
    align: 'right',
    format: (value: Languages[]) => (
      <ul>
        {value.map((l) => (
          <li key={l.name}>{l.name}</li>
        ))}
      </ul>
    ),
  },
  {
    id: 'region',
    label: 'Region',
    minWidth: 170,
    align: 'right',
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
      <TableContainer sx={{ maxHeight: 800 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead></TableHead>
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
