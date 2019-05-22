import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

const Footer = styled.footer`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 2rem;
  justify-content: center;
  margin-bottom: 2rem;
`

const StyledLink = styled.a`
  &,
  &:visited,
  &:hover,
  &:active {
    color: ${({ color }) => color};
  }
`

export default () => (
  <div>
    <h6>Follow along:</h6>
    <Footer>
      <StyledLink
        href="https://www.strava.com/athletes/mattwelson"
        target="_blank"
        rel="noopener noreferrer"
        color="#FF5722"
      >
        <FontAwesomeIcon icon={['fab', 'strava']} size="2x" />
      </StyledLink>
      <StyledLink
        href="https://www.instagram.com/m.welson/"
        target="_blank"
        rel="noopener noreferrer"
        color="#673AB7"
      >
        <FontAwesomeIcon icon={['fab', 'instagram']} size="2x" />
      </StyledLink>
      <StyledLink
        href="https://twitter.com/mattwelson"
        target="_blank"
        rel="noopener noreferrer"
        color="#03A9F4"
      >
        <FontAwesomeIcon icon={['fab', 'twitter']} size="2x" />
      </StyledLink>
    </Footer>
  </div>
)
