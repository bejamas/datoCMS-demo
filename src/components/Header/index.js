import React from 'react'
import NavLink from './NavLink'

const PAGES = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'About',
    path: '/about/'
  }
]

export default () => (
  <header>
    <nav>
      <ul>
        {PAGES.map((page, i) => (
          <li key={`main-nav__${i}`}>
            <NavLink to={page.path} activeClassName='active'>
              {page.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  </header>
)
