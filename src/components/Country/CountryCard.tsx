import * as React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import StarIcon from '@mui/icons-material/Star'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

import { Country } from '../../types/country'
import { addCountry } from '../../redux/actions/shopping'

export default function CountryCard({ country }: { country: Country }) {
  const dispatch = useDispatch()
  const handleClick = (country: Country) => {
    dispatch(addCountry(country))
  }

  return (
    <Box
      sx={{
        mt: 6,
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Card sx={{ maxWidth: 600 }}>
        <CardHeader title={country.name} subheader={country.capital} />
        <CardMedia
          component="img"
          height="194"
          image={country.flag}
          alt="country flag"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {country.name} is located in {country.region} with a population of{' '}
            {country.population}. Languages used in {country.name} include{' '}
            {country.languages.map((l, index) => (index ? ', ' : '') + l.name)}.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton
            aria-label="add to starred"
            onClick={() => handleClick(country)}
          >
            <StarIcon color="secondary" />
          </IconButton>
          <Button sx={{ marginLeft: 'auto' }}>
            <Link style={{ textDecoration: 'none' }} to="/">
              Back
            </Link>
          </Button>
        </CardActions>
      </Card>
    </Box>
  )
}
