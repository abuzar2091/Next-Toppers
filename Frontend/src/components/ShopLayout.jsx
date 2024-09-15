import React from 'react'
import Footer from './Footer.jsx'
import { Outlet } from 'react-router-dom'
import ShopSideBar from './ShopSideBar.jsx'
import ShopHeader from './ShopHeader.jsx'
import Shop from './Shop.jsx'

function ShopLayout() {
  return (
    <div className="bg-gray-100">
    <ShopHeader/>
    <div className="flex gap-20">
        <div className="hidden xl:flex w-[30%]">
           <ShopSideBar />
        </div>
        <div className='xl:w-[60%] w-[100%]'>
        <Shop/>
        <Outlet/> 
        </div>
    </div>
    <Footer />
    </div>
  )
}
export default ShopLayout