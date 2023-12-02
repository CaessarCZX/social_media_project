// import { LuUserCheck } from 'react-icons/lu'
import PropTypes from 'prop-types'
import { BsFilePost } from 'react-icons/bs'
import { LuUsers2 } from 'react-icons/lu'
import { RiUserFollowLine } from 'react-icons/ri'
import { useParams } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth.js'
import { useTheme } from '../../hooks/useTheme'
import { Div, DivFlex, Text, Title } from '../../styled components/Darth-theme'
import { StatsCardWrapper } from '../../styled components/Profile-theme'
import { TitleCase } from '../../utils/getStrings'
import { ProfileInfoAddButton } from '../ProfileInfo/ProfileInfoAddButton.jsx'
import { ProfileInfoStatsCardItem } from './ProfileInfoStatsCardItem'

export function ProfileInfoStatsCard (
  {
    firstname,
    lastname,
    counterFriends,
    counterFollow
  }
) {
  // Theme
  const { isDark } = useTheme()
  // Redux
  const auth = useAuth()
  // User id
  const { id } = useParams()

  const fullName = `${firstname} ${lastname}`

  // Items
  const StatsItem = [
    {
      id: 'stats-item-friends',
      name: 'amigos',
      counter: counterFriends,
      Icon: RiUserFollowLine
    },
    {
      id: 'stats-item-posts',
      name: 'publicaciones',
      counter: '2',
      Icon: BsFilePost
    },
    {
      id: 'stats-item-follow',
      name: 'seguidos',
      counter: counterFollow,
      Icon: LuUsers2
    }
  ]

  return (
    <StatsCardWrapper
      $isDark={isDark}
      $padding='1.5rem'
    >
      <DivFlex $jBetween>

        <Div>
          <Text $isDark={isDark}>Bienvenido de nuevo!!</Text>
          <Title $small $isDark={isDark}>{TitleCase(fullName)}</Title>
        </Div>

        {/* TODO: check the issue with ._id property when page is reload and cache is cleaded */}
        <Div>
          {
            auth && auth.user?._id && auth.user._id !== id && <ProfileInfoAddButton />
          }
        </Div>

      </DivFlex>
      <DivFlex $gap='1rem' $wrap $jBetween>
        {
          StatsItem.map(
            (item) => (
              <ProfileInfoStatsCardItem
                key={item.id}
                name={item.name}
                counter={item.counter}
                icon={item.Icon}
              />
            )
          )
        }
      </DivFlex>
    </StatsCardWrapper>
  )
}

ProfileInfoStatsCard.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  counterFriends: PropTypes.string.isRequired,
  counterFollow: PropTypes.string.isRequired
}
