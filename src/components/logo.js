import React from "react"
import { Link } from "gatsby"
let logoImage = '/assets/deroy-robotics-profile.png'
const Logo = (props) => (
  <div className="site-logo absolute top-0 left-0 pl-8 h-24">
    <Link to="/" style={{top: '-2px', height: '6.5rem'}} className="shadow inline-block relative border border-gray-500 w-48 rounded-b bg-gray-100 px-4">
      <img src={logoImage} alt={props.title} className="w-48 h-24" />
    </Link>
  </div>
)

export default Logo