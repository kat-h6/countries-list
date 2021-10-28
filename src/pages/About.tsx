import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { AppState } from '../types/types'
import CountryCard from '../components/Country/CountryCard'
import PrimarySearchAppBar from '../components/NavBar/NavBar'

type paramTypes = {
  name: string
}

export default function About() {
  const { name } = useParams<paramTypes>()

  const country = useSelector((state: AppState) =>
    state.countries.countries.find((c) => c.name === name)
  )

  if (!country) {
    return <div>Country not found</div>
  }

  return (
    <>
      <PrimarySearchAppBar />
      <CountryCard country={country} />
    </>
  )
}
