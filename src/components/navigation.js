import React, {useState} from "react"
import { Link } from "gatsby"
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

const MenuItems = [
  {
    path: "/",
    title: "Home"
  },
  {
    path: "/about",
    title: "About"
  },
  {
    path: "/news",
    title: "News"
  },
  {
    path: "/contact",
    title: "Contact"
  }, {
    path: "/register",
    title: "Register"
  },
]

const ListLink = (props) => {

  return (
    <li className="px-2 py-1">
      <Link to={props.to}>{props.children}</Link>
    </li>
  )
}

const Navigation = (props) => {
  const [showMenu, setShowMenu] = useState(false)

  const handleToggleClick = () => {
    setShowMenu(!showMenu)
  }

  const listMenuItems = MenuItems.map((menuItem, index) => 
    <ListLink key={index} to={menuItem.path}>{menuItem.title}</ListLink>
  )

  let navClass = 'site-navigation text-right ' 
  navClass += showMenu ? 'menu-open' : 'menu-closed'

  return (
    <nav className={navClass}>
      <button onClick={handleToggleClick} className={"md:invisible md:hidden menu-trigger" + (showMenu ? " is-active" : "")}>
        <div className="icon-menu-line"><RiMenu3Line/></div>
        <div className="icon-menu-close"><RiCloseLine/></div>
      </button>
      <ul className="flex flex-col md:flex-row md:relative absolute right-0">
        {listMenuItems}
      </ul>
    </nav>
  )
}

export default Navigation
