import React, { useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
//import { Link } from 'react-router-dom'

import { AppState } from '../types/types'
//import { addProduct, removeProduct } from '../redux/actions'
//import Counter from '../components/Counter'
import { fetchData } from '../redux/actions/country'
import CountryTable from '../components/CountryTable/CountryTable'
import Loading from '../components/Loading/Loading'
import PrimarySearchAppBar from '../components/NavBar/NavBar'
//const names = ['Apple', 'Orange', 'Avocado', 'Banana', 'Cucumber', 'Carrot']

export default function Home() {
  const dispatch = useDispatch()
  //  const products = useSelector((state: AppState) => state.product.inCart)
  // prettier-ignore
  const countries = useSelector((state: AppState) =>
    state.search.keyword
      ? state.countries.countries.filter((country) =>
        country.name.toLowerCase().startsWith(state.search.keyword)
      ) : state.countries.countries
  )
  const error = useSelector((state: AppState) => state.countries.error)
  const loading = useSelector((state: AppState) => state.countries.loading)
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)

  /*  const handleAddProduct = () => {
    const product: Product = {
      id: (+new Date()).toString(),
      name: names[Math.floor(Math.random() * names.length)],
      price: +(Math.random() * 10).toFixed(2),
    }
    dispatch(addProduct(product))
  } */

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
      {/* {products.length <= 0 && <div>No products in cart</div>}
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            <Link to={`/products/${p.id}`}>{`${p.name} - $${p.price}`}</Link>

            {'  '}

            <button onClick={() => dispatch(removeProduct(p))}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={handleAddProduct}>Add product</button>
      <Counter />
        */}
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
