import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

const Footer = styled.footer`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 1rem;
  justify-content: center;
`

export default () => (
  <Footer>
    <FontAwesomeIcon icon={['fab', 'strava']} size="2x" />
    <FontAwesomeIcon icon={['fab', 'instagram']} size="2x" />
    <FontAwesomeIcon icon={['fab', 'twitter']} size="2x" />
  </Footer>
)
