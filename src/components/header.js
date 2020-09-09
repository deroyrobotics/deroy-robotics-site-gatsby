import React from "react"

const Header = ({children}) => (
  <header className="site-header z-50 relative shadow flex flex-1 justify-center">
    <div className="site-header-inner max-w-5xl p-6 flex flex-1 ">
      {children}
    </div>
  </header>
)

export default Header