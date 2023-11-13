import { BsSearch } from 'react-icons/bs'
import { IoNotificationsOutline } from 'react-icons/io5'
import { IconContext } from '../../components/IconContext.jsx'
import { useTheme } from '../../hooks/useTheme.js'
import {
  HeaderFlex,
  LiFlex,
  UlFlex
} from '../../styled components/Darth-theme'
import {
  HeaderSearchBar,
  HeaderWrapButton,
  SearchBarPositionInnnerIcon
} from '../../styled components/Header-theme.js'
import { LogoPage } from '../Logo/LogoPage.jsx'

export function Header () {
  // Theme
  const { isDark } = useTheme()

  return (
    <HeaderFlex $jEnd>
      <UlFlex
        $aiCenter
        $margin='0 1rem 0'
      >

        <LiFlex
          $relative
          $margin='0 1rem 0 0'
        >
          <HeaderSearchBar placeholder='Buscar en GeekNet' $isDark={isDark} />
          <SearchBarPositionInnnerIcon>
            <IconContext size='1.1rem' icon={BsSearch} />
          </SearchBarPositionInnnerIcon>
        </LiFlex>

        <LiFlex>
          <HeaderWrapButton>
            <IconContext size='1.7rem' icon={IoNotificationsOutline} />
          </HeaderWrapButton>
        </LiFlex>

        <LiFlex>
          <LogoPage />
        </LiFlex>

      </UlFlex>
    </HeaderFlex>
  )
}
