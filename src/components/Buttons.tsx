import * as React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import { useDispatch } from 'react-redux'
import StarIcon from '@mui/icons-material/Star'

import { addCountry, removeCountry } from '../redux/actions/shopping'
import { Country } from '../types/country'
import { AppState } from '../types/types'

type ContainedButtonsProps = {
  country: Country
}

export default function ContainedButtons({ country }: ContainedButtonsProps) {
  const cartItems = useSelector((state: AppState) => state.shopping.inCart)
  const dispatch = useDispatch()

  function existsInCart(country: Country) {
    return cartItems.some((c) => c.name === country.name)
  }

  const handleClick = (country: Country) => {
    if (existsInCart(country)) {
      dispatch(removeCountry(country))
    } else {
      dispatch(addCountry(country))
    }
  }

  let color = existsInCart(country) ? 'info' : 'secondary'

  return (
    <Stack direction="row" spacing={2}>
      <Link style={{ textDecoration: 'none' }} to={`/country/${country.name}`}>
        <Button variant="contained" size="small" color="primary">
          More
        </Button>
      </Link>
      <Button
        onClick={() => handleClick(country)}
        variant="contained"
        size="small"
        color={color}
        id="btn-star"
      >
        <StarIcon />
      </Button>
    </Stack>
  )
}
