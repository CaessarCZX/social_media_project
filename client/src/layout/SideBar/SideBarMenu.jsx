import { useState } from 'react'
import {
  CiSettings,
  CiUser
} from 'react-icons/ci'
import {
  PiHouseSimpleLight
} from 'react-icons/pi'
import {
  VscMenu
} from 'react-icons/vsc'
import { IconContext } from '../../components/IconContext.jsx'
import { useTheme } from '../../hooks/useTheme.js'
import {
  SideBarContainer,
  SideBarWrapActivateButton
} from '../../styled components/SideBarMenu-theme.js'
import { SideBarMenuCardView } from '../SideBar/SideBarMenuCardView.jsx'
import { SideBarMenuItemView } from '../SideBar/SideBarMenuItemView.jsx'

const sectionItems = [
  {
    id: 1,
    name: 'Inicio',
    shortName: 'Inicio',
    label: 'Inicio',
    Icon: PiHouseSimpleLight,
    url: '/home'
  },
  {
    id: 2,
    name: 'Perfil',
    shortName: 'Perfil',
    label: 'Perfil',
    Icon: CiUser,
    url: '/profile'
  },
  {
    id: 3,
    name: 'Configuración',
    shortName: 'Config.',
    label: 'Configuración',
    Icon: CiSettings,
    url: '/settings'
  }
]

const userData = {
  id: 'card',
  displayName: 'Cesar Jhonatan Tun Cetina',
  username: 'caez@r45',
  occupation: 'Estudiante',
  photoUrl: '',
  url: '/'
}

export function SideBarMenu () {
  // Redux
  const { isDark } = useTheme()

  // For wrap
  const [isOpen, setIsOpen] = useState(false)

  // Wrap control
  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <SideBarContainer
      $isOpen={isOpen}
      $isDark={isDark}
      $absolute
      $disableBlockBorder
      $dissableLeftBorder
    >
      <SideBarWrapActivateButton onClick={handleClick}>
        <IconContext size='1.7rem' icon={VscMenu} />
      </SideBarWrapActivateButton>

      <SideBarMenuCardView
        card={userData}
        isOpen={isOpen}
      />
      {
        sectionItems.map(
          (sectionItem) => (
            <SideBarMenuItemView
              key={sectionItem.label}
              sectionItem={sectionItem}
              isOpen={isOpen}
            />))
      }
    </SideBarContainer>
  )
}
