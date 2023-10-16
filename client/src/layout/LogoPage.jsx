import logoDark from '../assets/logo-dark.svg'
import logoLight from '../assets/logo-light.svg'
import { useTheme } from '../hooks/useTheme.js'
import {
  LogoMain
} from '../styled components/Darth-theme.dark'

export default function LogoPage () {
  const { isDark } = useTheme()

  const handleLogo = isDark ? logoDark : logoLight

  return (
    <LogoMain src={handleLogo} alt='GeekNetwork log' title='GeekNetwork' />
  )
}
