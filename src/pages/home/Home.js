import React from 'react'
// import Header from '../../component/header/Header'
import Main from '../../component/main/Main'
import Servise from '../../component/servise/Servise'
import Products from '../../component/products/Products'
import New from '../../component/new/New'
import OurBlogs from  '../../component/OurBlogs/OurBlogs'
import Follow from '../../component/follow/Follow'

const Home = () => {
  return (
    <div>
        {/* <Header /> */}
        <Main />
        <Servise />
        <Products />
        <New />
        <OurBlogs/>
        <Follow />
    </div>
  )
}

export default Home
