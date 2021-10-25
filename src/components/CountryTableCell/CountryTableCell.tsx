import React from 'react'
import TableCell from '@mui/material/TableCell'

import { Column } from '../../types/country'

type CountryTableCellProps = {
  column: Column
  value: any
}

export default function CountryTableCell({
  column,
  value,
}: CountryTableCellProps) {
  return (
    <TableCell align={column.align}>
      {column.format ? column.format(value) : value}
    </TableCell>
  )
}
