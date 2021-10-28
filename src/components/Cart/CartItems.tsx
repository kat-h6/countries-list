import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { AppState } from '../../types/types'
import DeleteIcon from '@mui/icons-material/Delete'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'

import { Country } from '../../types/country'
import { removeCountry } from '../../redux/actions/shopping'

export default function CartItems() {
  const cartItems = useSelector((state: AppState) => state.shopping.inCart)
  const dispatch = useDispatch()
  const handleRemoveCountry = (country: Country) => {
    dispatch(removeCountry(country))
  }
  return (
    <>
      <Typography
        variant="h6"
        sx={{ display: 'flex', justifyContent: 'center' }}
      >
        Starred Countries
      </Typography>
      <Divider />
      {cartItems.map((item) => (
        <ListItem button key={item.name}>
          <ListItemIcon sx={{ mr: -2 }}>
            <DeleteIcon
              color="secondary"
              onClick={() => handleRemoveCountry(item)}
            />
          </ListItemIcon>
          <Link style={{ textDecoration: 'none' }} to={`/country/${item.name}`}>
            {item.name}
          </Link>
        </ListItem>
      ))}
    </>
  )
}
