import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const LinkS = styled(Link)`
  font-family: inherit;
  line-height: 1;
  text-decoration: none;
  color: ${(props) => (props.$darkMode ? '#0ac4c4' : '#016161')};
  font-weight: ${(props) => props.$weight || '500'};
  font-size: ${(props) => props.$size || '0.87rem'}  
`
