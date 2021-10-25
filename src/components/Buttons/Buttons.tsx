import * as React from 'react'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'

import './buttons.scss'

type ContainedBtnProps = {
  name: string
}

export default function ContainedButtons({ name }: ContainedBtnProps) {
  return (
    <Stack direction="row" spacing={2}>
      <Button
        variant="contained"
        size="small"
        color="secondary"
        className="btn btn--center"
      >
        <Link to={`/country/${name}`}>More info</Link>
      </Button>
      <Button
        variant="contained"
        size="small"
        color="secondary"
        className="btn btn--center"
      >
        Add
      </Button>
    </Stack>
  )
}
