import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// import defaultUserImg from '../../assets/defaultUserImg.svg'
import { useAuth } from '../../hooks/useAuth'
import { useProfile } from '../../hooks/useProfile.js'
import { useTheme } from '../../hooks/useTheme.js'
import { DivFlex, Title } from '../../styled components/Darth-theme.js'
import {
  ProfileContainerInfoWrapper, ProfileTitle
} from '../../styled components/Profile-theme'
import { ProfileInfoMiniCard } from './ProfileInfoMiniCard.jsx'
import { ProfileInfoStatsCard } from './ProfileInfoStatsCard.jsx'
// import { TitleCase } from '../../utils/getStrings.js'
import { useDispatch } from 'react-redux'
import { getProfileUsers } from '../../redux/actions/profileActions.js'

export function ProfileInfo () {
  // Theme
  const { isDark } = useTheme()

  // Redux
  const auth = useAuth()
  const profile = useProfile()
  const dispatch = useDispatch()

  // to fetch user info
  const { id } = useParams()

  // user profile data
  const [userData, setUserData] = useState([])

  // get user data
  useEffect(
    () => {
      if (auth && auth.user && id === auth.user._id) {
        setUserData([auth.user])
      } else {
        dispatch(
          getProfileUsers({
            users: profile.users,
            id,
            auth
          })
        )

        const newData = profile.users.filter(
          (user) => user._id === id)

        setUserData(newData) // It's already an array
      }
    }, [id, auth, dispatch, profile.users]
  )

  return (
    <ProfileContainerInfoWrapper>
      <ProfileTitle>
        <Title $small $isDark={isDark}>Mi perfil</Title>
      </ProfileTitle>
      {
        userData.length > 0 && userData.map(
          (user) => (
            <DivFlex
              $aiBaseline
              $padding='1rem'
              $gap='1rem'
              key={user._id}
            >
              <ProfileInfoStatsCard
                firstname={user.firstname}
                lastname={user.lastname}
                counterFollow={`${user.friends.length}`}
                counterFriends={`${user.following.length}`}
              />
              <ProfileInfoMiniCard
                story={user.story}
                username={user.username}
                avatar={user.avatar}
                gender={user.gender}
                email={user.email}
                phone={user.phone}
                website={user.website}
                id={id}
              />
            </DivFlex>
          )
        )
      }
    </ProfileContainerInfoWrapper>
  )
}
