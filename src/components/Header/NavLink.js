import styled from 'styled-components'
import { Link } from 'gatsby'

const NavLink = styled(Link)`
  text-decoration: none;
  color: #000;

  &.active {
    border-bottom: 1px solid red;
  }
`

export default NavLink
