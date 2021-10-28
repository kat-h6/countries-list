import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { AppState } from '../../types/types'
import DeleteIcon from '@mui/icons-material/Delete'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'

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
      {cartItems.map((item) => (
        <ListItem button key={item.name}>
          <ListItemIcon>
            <DeleteIcon
              color="secondary"
              onClick={() => handleRemoveCountry(item)}
            />
          </ListItemIcon>
          <Link style={{ textDecoration: 'none' }} to={`/country/${item.name}`}>
            <ListItemText>{item.name}</ListItemText>
          </Link>
        </ListItem>
      ))}
    </>
  )
}
