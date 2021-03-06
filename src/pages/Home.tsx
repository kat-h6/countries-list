import React, { useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { AppState } from '../types/types'
import { fetchData } from '../redux/actions/country'
import CountryTable from '../components/Country/CountryTable'
import Loading from '../components/Loading'
import PrimarySearchAppBar from '../components/NavBar/NavBar'

export default function Home() {
  const dispatch = useDispatch()
  // prettier-ignore
  const countries = useSelector((state: AppState) =>
    state.countries.keyword
      ? state.countries.filteredCountries : state.countries.countries
  )
  const error = useSelector((state: AppState) => state.countries.error)
  const loading = useSelector((state: AppState) => state.countries.loading)
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)

  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch])

  const handleChangePage = useCallback((event: unknown, newPage: number) => {
    setPage(newPage)
  }, [])

  const handleChangeRowsPerPage = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setRowsPerPage(+event.target.value)
      setPage(0)
    },
    []
  )

  if (error) return <div>Error handling data!</div>
  return (
    <>
      <PrimarySearchAppBar />
      {loading ? (
        <Loading />
      ) : (
        <CountryTable
          countries={countries}
          rowsPerPage={rowsPerPage}
          page={page}
          handleChangePage={handleChangePage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
        />
      )}
    </>
  )
}
