import { useTheme } from '../hooks/useTheme.js'
import { SideBarMenu } from '../layout/SideBar/SideBarMenu.jsx'
import { Page } from '../styled components/Darth-theme'

export function Home () {
  // Theme
  const { isDark } = useTheme()
  return (
    <Page $isDark={isDark} $heigth='100vh' $enableBg>
      <SideBarMenu />
    </Page>
  )
}
