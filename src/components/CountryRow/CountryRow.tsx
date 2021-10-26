import React from 'react'
import { TableCell } from '@mui/material'
import TableRow from '@mui/material/TableRow'

import CountryTableCell from '../CountryTableCell/CountryTableCell'
import { CountryRowProps } from '../../types/country'
import ContainedButtons from '../Buttons/Buttons'

export default function CountryRow({ columns, country }: CountryRowProps) {
  return (
    <TableRow hover role="checkbox" tabIndex={-1} key={country.name}>
      {columns.map((column) => {
        const value = country[column.id]
        return (
          <CountryTableCell key={column.id} column={column} value={value} />
        )
      })}
      <TableCell>
        <ContainedButtons country={country} />
      </TableCell>
    </TableRow>
  )
}
