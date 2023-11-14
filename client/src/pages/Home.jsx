import { useTheme } from '../hooks/useTheme.js'
import { Page } from '../styled components/Darth-theme.js'

export function Home () {
  // Theme
  const { isDark } = useTheme()

  return (
    <Page
      $isDark={isDark}
      $absolute
      $heigth='100vh'
      $enableBg
      style={{ top: 0, zIndex: -2 }}
    >
      <h1 style={{ textAlign: 'center', color: '#fff', marginTop: '12vh' }}>Home :V</h1>
    </Page>
  )
}
