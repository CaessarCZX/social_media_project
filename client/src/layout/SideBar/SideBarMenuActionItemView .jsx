import PropTypes from 'prop-types'
import { IconContext } from '../../components/IconContext.jsx'
import { useTheme } from '../../hooks/useTheme.js'
import {
  LiFlex,
  MicroSubtitle,
  SmallText
} from '../../styled components/Darth-theme.js'
import {
  SideBarActionItemButton,
  SideBarItemOpenFade,
  SideBarMenuItemCollapse,
  SideBarTooltip
} from '../../styled components/SideBarMenu-theme.js'

export function SideBarMenuActionItemView ({ actionItem, isOpen, setColor }) {
  // Theme
  const { isDark } = useTheme()

  // Sections data
  const {
    name,
    shortName,
    label,
    Icon,
    Action,
    color
  } = actionItem

  return (
    <LiFlex
      aria-label={label}
      $aiCenter
    >
      <SideBarActionItemButton onClick={Action}>
        <SideBarMenuItemCollapse $isOpen={isOpen}>
          <IconContext
            icon={Icon}
            style={{ color: setColor && color }}
          />
          {
            isOpen
              ? (
                <SideBarItemOpenFade>
                  <MicroSubtitle $isDark={isDark}>{name}</MicroSubtitle>
                </SideBarItemOpenFade>
                )
              : <SmallText $isDark={isDark}>{shortName}</SmallText>
          }
        </SideBarMenuItemCollapse>
      </SideBarActionItemButton>
      {
        isOpen || <SideBarTooltip>{label}</SideBarTooltip>
      }
    </LiFlex>
  )
}

SideBarMenuActionItemView.propTypes = {
  actionItem: PropTypes.object.isRequired,
  isOpen: PropTypes.bool.isRequired,
  setColor: PropTypes.bool
}
