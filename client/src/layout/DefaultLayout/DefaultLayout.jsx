// import { useTheme } from '../../hooks/useTheme.js'
import { Header } from '../Header/Header.jsx'
import { SideBarMenu } from '../SideBar/SideBarMenu.jsx'

export function DefaultLayout () {
  // Theme
  // const { isDark } = useTheme()

  return (
    <>
      <Header />
      <SideBarMenu />
    </>
  )
}
