import { MdPersonAddAlt } from 'react-icons/md'
import { IconContext } from '../../components/IconContext'
import { useTheme } from '../../hooks/useTheme'
import { Div, DivFlex, SubtitleHighlight } from '../../styled components/Darth-theme'
import { AddFriendButton } from '../../styled components/Profile-theme'

export function ProfileInfoAddButton () {
  // Theme
  const { isDark } = useTheme()

  const handleFriend = () => {
    console.log('add-friend')
  }

  return (
    <AddFriendButton
      $isDark={isDark}
      onClick={handleFriend}
    >
      <DivFlex
        $gap='0.7rem'
        $aiCenter
      >
        <IconContext icon={MdPersonAddAlt} />
        <Div $width='130px'>
          <SubtitleHighlight>Agregar amigo</SubtitleHighlight>
        </Div>
      </DivFlex>
    </AddFriendButton>
  )
}
