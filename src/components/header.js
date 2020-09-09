import React from "react"

const Header = ({children}) => (
  <header className="site-header p-6 flex z-50 relative shadow">
    {children}
  </header>
)

export default Header