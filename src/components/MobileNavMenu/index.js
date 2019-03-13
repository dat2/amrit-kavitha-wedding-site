import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { compose, withHandlers, withState } from 'recompose'
import ClickOutside from 'react-click-outside'
import AnimateHeight from 'react-animate-height'

import bars from './bars.svg'

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  cursor: pointer;
  @media (min-width: 426px) {
    display: none;
  }
`

const Bar = styled.div`
  background-color: #d3b725;
  color: white;
  padding: 5px 10px;
  &:hover {
    background-color: #ad9522;
  }
`

const Menu = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: #d3b725;
`

const FaBars = styled.img.attrs({
  src: bars,
})`
  margin: 0;
  width: 0.875em;
  overflow: visible;
`

const StyledLink = styled(Link)`
  text-align: center;
  padding: 10px;
  margin: 0;
  width: 50%;
  text-decoration: none;
  font-family: 'Cinzel';
  color: white;
  &:visited {
    color: white;
  }
`

const MobileNavMenu = ({ visible, toggleVisible, closeMenu }) => (
  <ClickOutside onClickOutside={closeMenu}>
    <Nav onClick={toggleVisible}>
      <Bar>
        <FaBars />
      </Bar>
      <AnimateHeight duration={500} height={visible ? 'auto' : 0}>
        <Menu>
          <StyledLink to="/" exact activeStyle={{ backgroundColor: '#ad9522' }}>
            Welcome
          </StyledLink>
          <StyledLink to="/event/" activeStyle={{ backgroundColor: '#ad9522' }}>
            Wedding Event
          </StyledLink>
          <StyledLink
            to="/program/"
            activeStyle={{ backgroundColor: '#ad9522' }}
          >
            Wedding Program
          </StyledLink>
          <StyledLink to="/rsvp/" activeStyle={{ backgroundColor: '#ad9522' }}>
            RSVP
          </StyledLink>
          <StyledLink
            to="/photos/"
            activeStyle={{ backgroundColor: '#ad9522' }}
          >
            Photo Gallery
          </StyledLink>
          <StyledLink to="/faq/" activeStyle={{ backgroundColor: '#ad9522' }}>
            FAQ
          </StyledLink>
        </Menu>
      </AnimateHeight>
    </Nav>
  </ClickOutside>
)

const enhance = compose(
  withState('visible', 'setVisible', false),
  withHandlers({
    toggleVisible: props => () => {
      props.setVisible(!props.visible)
    },
    closeMenu: props => () => {
      props.setVisible(false)
    },
  })
)

export default enhance(MobileNavMenu)
