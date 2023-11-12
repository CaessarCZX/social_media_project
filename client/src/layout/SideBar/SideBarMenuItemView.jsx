import PropTypes from 'prop-types'
import { useTheme } from '../../hooks/useTheme.js'
import {
  LiFlex,
  MicroSubtitle,
  SmallText
} from '../../styled components/Darth-theme.js'
import {
  SideBarMenuItemCollapse,
  SideBarTooltip,
  WrapLink
} from '../../styled components/SideBarMenu-theme.js'
import { SideBarIconContext } from './SideBarIconContext.jsx'

export function SideBarMenuItemView ({ sectionItem, isOpen }) {
  // Theme
  const { isDark } = useTheme()

  // Sections data
  const {
    name,
    shortName,
    label,
    url,
    Icon
  } = sectionItem

  return (
    <LiFlex
      aria-label={label}
      $aiCenter
    >
      <WrapLink to={url}>
        <SideBarMenuItemCollapse $isOpen={isOpen}>
          <SideBarIconContext icon={Icon} />
          {
            isOpen
              ? <MicroSubtitle $isDark={isDark}>{name}</MicroSubtitle>
              : <SmallText $isDark={isDark}>{shortName}</SmallText>
          }
        </SideBarMenuItemCollapse>
      </WrapLink>
      {
        isOpen || <SideBarTooltip>{label}</SideBarTooltip>
      }
    </LiFlex>
  )
}

SideBarMenuItemView.propTypes = {
  sectionItem: PropTypes.object.isRequired,
  isOpen: PropTypes.bool.isRequired
}
