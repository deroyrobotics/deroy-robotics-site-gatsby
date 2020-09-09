import React from "react"
import { Link } from "gatsby"
let logoImage = '/assets/deroy-robotics-profile.png'
const Logo = (props) => (
  <div className="site-logo  relative">
    <Link to="/" style={{top: '-1.6rem', height: '6.5rem'}} className="absolute shadow inline-block relative border border-gray-500 w-48 rounded-b bg-gray-100 px-4">
      <img src={logoImage} alt={props.title} className="w-48 h-24" />
    </Link>
  </div>
)

export default Logo