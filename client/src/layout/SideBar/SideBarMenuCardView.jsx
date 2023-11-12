import PropTypes from 'prop-types'
// import defaultImg from '../../assets/defaultUserImg.svg'
import exampleImg from '../../assets/examplePhoto.jpg'
import { useTheme } from '../../hooks/useTheme.js'
import {
  ArticleFlex,
  SmallText,
  Subtitle, SubtitleHighlight
} from '../../styled components/Darth-theme.js'
import { SideBarProfileData, SideBarProfileImg, SideBarWrapProfileImg } from '../../styled components/SideBarMenu-theme.js'

export function SideBarMenuCardView ({ card, isOpen }) {
  // Theme
  const { isDark } = useTheme()
  // Get data from user
  const { displayName, username, occupation, photoUrl } = card

  return (
    <ArticleFlex $col $padding='0.7rem' $margin='0.5rem 0 0'>
      <SideBarWrapProfileImg>
        <SideBarProfileImg
          src={photoUrl || exampleImg}
          alt={`perfil de ${displayName}`}
        />
      </SideBarWrapProfileImg>
      <SideBarProfileData $isOpen={isOpen}>
        <Subtitle $isDark={isDark} $medium>{displayName}</Subtitle>
        <SubtitleHighlight $medium>{username}</SubtitleHighlight>
        <SmallText $isDark={isDark}>{occupation}</SmallText>
      </SideBarProfileData>
    </ArticleFlex>
  )
}

SideBarMenuCardView.propTypes = {
  card: PropTypes.object.isRequired,
  isOpen: PropTypes.bool.isRequired
}
