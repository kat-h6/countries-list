import React from 'react'

import CountryTableCell from './CountryTableCell'
import TableRow from '@mui/material/TableRow'
import { CountryRowProps } from '../types/country'

export default function CountryRow({ columns, country }: CountryRowProps) {
  return (
    <TableRow hover role="checkbox" tabIndex={-1} key={country.name}>
      {columns.map((column) => {
        const value = country[column.id]
        return (
          <CountryTableCell key={column.id} column={column} value={value} />
        )
      })}
    </TableRow>
  )
}
