import React from 'react'
import { Outlet} from "react-router-dom";
import Header from './Header';
function RootLayout() {
  return (
    <div>
        <Header/>
        <section>
        <Outlet/>

        </section>

    </div>
  )
}

export default RootLayout