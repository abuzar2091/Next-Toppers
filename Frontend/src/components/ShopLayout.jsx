import React from 'react'
import Shop from './Shop.jsx'
import Footer from './Footer.jsx'
import { Outlet } from 'react-router-dom'
import ShopSideBar from './ShopSideBar.jsx'
import ShopHeader from './ShopHeader.jsx'

function ShopLayout() {
  return (
    <div className="bg-gray-100">
    <ShopHeader/>
    <div className="flex gap-20">
        <div className="w-[30%]">
           <ShopSideBar />
        </div>
        <div className='w-[60%]'>
        <Shop/>
        <Outlet/> 
        </div>
    </div>
    <Footer />
    </div>
  )
}
export default ShopLayout