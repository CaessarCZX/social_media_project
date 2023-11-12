import styled, { css } from 'styled-components'
import {
  DarthSense,
  DarthSenseLight,
  HeaderFlex
} from './Darth-theme.js'
import {
  DARTH_THEME_DARK_MODE as dark,
  DARTH_THEME_LIGHT_MODE as light
} from './Darth-theme.var.js'

export const HeaderContainer = styled(HeaderFlex)`
  ${DarthSenseLight}

  ${(props) => props.$isDark && css`
    ${DarthSense}
  `}
  ${(props) => props.$enableRadius && css`
    border-radius: ${dark.borderRadiusDefault};
  `}
  ${(props) => props.$lightStrong && css`
    background-color: ${light.backgroundContainerStrong};
  `}
`
