import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { AppState } from '../../types/types'
import DeleteIcon from '@mui/icons-material/Delete'
import { MenuItem } from '@mui/material'
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
      {cartItems.map((item) => {
        const name = item.name
        return (
          <MenuItem key={item.name}>
            <DeleteIcon
              color="secondary"
              onClick={() => handleRemoveCountry(item)}
            />
            {name}
          </MenuItem>
        )
      })}
    </>
  )
}
