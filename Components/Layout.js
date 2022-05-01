import Navbar from './Nav'
import Footer from './Footer'

import React from 'react'

export const Layout = ({children}) => {
  return (
    <div>
        <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
export default Layout;
