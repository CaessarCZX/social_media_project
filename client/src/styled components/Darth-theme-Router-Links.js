import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { DARTH_THEME_DARK_MODE as dark } from './Darth-theme.var.js'

export const LinkS = styled(Link)`
  font-family: inherit;
  line-height: 1.5;
  text-decoration: none;

  ${(props) => props.$action && css`
    color: ${dark.choosenElementBtn};
  `}

  ${(props) => props.$medium && css`
    font-size: 14px;
    font-weight: 300;
  `}
`
