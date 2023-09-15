import React from 'react'
import { Provider } from 'react-redux'
import Store from './Store/Store'
import Category from './Component/Category'
import Products from './Component/Products'
import Header from './Component/Header'
import Footer from './Component/Footer'

export default function Main() {
  return (
    <Provider store={Store}>
      <Header/>
      <Category />
      <Footer/>
    </Provider>
  )
}
