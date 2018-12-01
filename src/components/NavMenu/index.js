import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Nav = styled.nav`
  flex-basis: 25%;
  flex-shrink: 0;
  @media (max-width: 425px) {
    display: none;
  }
`

const List = styled.div`
  text-align: right;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`

const StyledLink = styled(Link)`
  padding: 10px;
  margin: 0;
  margin-right: 0.725em;
  color: #a39683;
  text-decoration: none;
  font-family: 'Cinzel';
  &:hover {
    color: #d3b725;
  }
  &:not(:first-child) {
    border-top: 1px solid #ececec;
  }
`

const NavMenu = () => (
  <Nav className="nav-list">
    <List>
      <StyledLink to="/" exact activeStyle={{ color: '#d3b725' }}>
        Welcome
      </StyledLink>
      <StyledLink to="/event/" activeStyle={{ color: '#d3b725' }}>
        Wedding Event
      </StyledLink>
      <StyledLink to="/program/" activeStyle={{ color: '#d3b725' }}>
        Wedding Program
      </StyledLink>
      <StyledLink to="/rsvp/" activeStyle={{ color: '#d3b725' }}>
        RSVP
      </StyledLink>
      <StyledLink to="/photos/" activeStyle={{ color: '#d3b725' }}>
        Photo Gallery
      </StyledLink>
      <StyledLink to="/faq/" activeStyle={{ color: '#d3b725' }}>
        FAQ
      </StyledLink>
    </List>
  </Nav>
)

export default NavMenu
