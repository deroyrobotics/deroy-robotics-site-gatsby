import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Logo from "./logo"
import Navigation from "./navigation";

import "../assets/css/tailwind.css"
import "../assets/scss/style.scss"
import Footer from "./Footer";

const query = graphql`
query LayoutQuery {
  site {
    siteMetadata {
      siteTitle: title
    }
  }
}
`

const Layout = ({children, className}) => {

  const { site } = useStaticQuery(query)
  const { siteTitle } = site.siteMetadata

  return (
    <div className="primary-container">
      <Header>
        <Logo title={siteTitle} />
        <div className="flex-1"></div>
        <Navigation/>
      </Header>
      <main className={"z-20 px-4 pt-8 md:px-0 max-w-screen-md m-auto container " + className}>
        {children}
      </main>
      <Footer/>
    </div>
  )
}

export default Layout

