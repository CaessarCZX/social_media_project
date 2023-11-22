import { useEffect, useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { IoNotificationsOutline } from 'react-icons/io5'
import { useDispatch } from 'react-redux'
import { IconContext } from '../../components/IconContext.jsx'
import { useAuth } from '../../hooks/useAuth.js'
import { useTheme } from '../../hooks/useTheme.js'
import { ALERT_TYPES } from '../../redux/actions/alertActions.js'
import {
  LiFlex,
  UlFlex
} from '../../styled components/Darth-theme'
import {
  HeaderContainerWrapper,
  HeaderSearchBar,
  HeaderWrapButton,
  SearchBarPositionInnnerIcon
} from '../../styled components/Header-theme.js'
import { getDataApi } from '../../utils/fetchDataApi.js'
import { LogoPage } from '../Logo/LogoPage.jsx'
import { HeaderSearchResults } from './HeaderSearchResults.jsx'

export function Header () {
  // Theme
  const { isDark } = useTheme()

  // For searchbar
  const [search, setSearch] = useState('')
  const [getUsers, setGetUsers] = useState([])

  // Redux
  const dispatch = useDispatch()
  const auth = useAuth()

  useEffect(
    () => {
      if (search && auth.token) {
        getDataApi(`search?username=${search}`, auth.token)
          .then(res => setGetUsers(res.data.users))
          .catch(err => {
            dispatch({
              type: ALERT_TYPES.ALERT,
              payload: {
                error: err.response.data.msg
              }
            })
          })
      } else {
        setGetUsers([])
      }
    }, [search, auth.token, dispatch]
  )

  return (
    <HeaderContainerWrapper $jEnd>
      <UlFlex
        $aiCenter
        $margin='0 1rem 0'
      >
        <LiFlex
          $relative
          $margin='0 1rem 0 0'
        >
          <form>
            <HeaderSearchBar
              placeholder='Buscar en GeekNet'
              $isDark={isDark}
              value={search}
              onChange={
                (e) => {
                  setSearch(e.target.value)
                }
              }
            />
          </form>
          <SearchBarPositionInnnerIcon>
            <IconContext size='1.1rem' icon={BsSearch} />
          </SearchBarPositionInnnerIcon>
          {/* {
            search && getUsers.length > 0 && (<HeaderSearchResults userArray={getUsers} />)
          } */}
          {
            search && (<HeaderSearchResults userArray={getUsers} />)
          }
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
    </HeaderContainerWrapper>
  )
}
