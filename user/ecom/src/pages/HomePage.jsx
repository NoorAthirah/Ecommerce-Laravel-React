import React, { Component, Fragment } from 'react'
import FeaturedProducts from "../components/home/FeaturedProducts"
import Categories from "../components/home/categories"
import Collections from "../components/home/collection"
import NewArrival from "../components/home/NewArrival"
import HomeTop from "../components/home/HomeTop"

export class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <HomeTop/>
        <FeaturedProducts/>
        <NewArrival/>
        <Collections/> 
        <Categories/>            
      </Fragment>
    )
  }
}

export default HomePage
