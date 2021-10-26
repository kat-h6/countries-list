import * as React from 'react'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import { useDispatch } from 'react-redux'

import './buttons.scss'
import { addCountry } from '../../redux/actions/shopping'
import { Country } from '../../types/country'

type ContainedButtonsProps = {
  country: Country
}

export default function ContainedButtons({ country }: ContainedButtonsProps) {
  const dispatch = useDispatch()
  const handleClick = (country: Country) => {
    dispatch(addCountry(country))
  }
  return (
    <Stack direction="row" spacing={2}>
      <Button
        variant="contained"
        size="small"
        color="secondary"
        className="btn btn--center"
      >
        <Link to={`/country/${country.name}`}>More info</Link>
      </Button>
      <Button
        onClick={() => handleClick(country)}
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
