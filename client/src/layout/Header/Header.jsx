import { useTheme } from '../../hooks/useTheme.js'
import { LiFlex, UlFlex } from '../../styled components/Darth-theme'
import { HeaderContainer } from '../../styled components/Header-theme.js'
import { LogoPage } from '../Logo/LogoPage.jsx'

export function Header () {
  // Theme
  const { isDark } = useTheme()

  return (
    <HeaderContainer $isDark={isDark}>
      <UlFlex>
        <LiFlex>
          Input
        </LiFlex>
        <LiFlex>
          icons
        </LiFlex>
        <LiFlex>
          <LogoPage />
        </LiFlex>
      </UlFlex>
    </HeaderContainer>
  )
}
