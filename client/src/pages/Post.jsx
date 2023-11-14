import { useTheme } from '../hooks/useTheme'
import {
  CenterAbosolute,
  SectionFull
} from '../styled components/Darth-theme.js'

export function Post () {
  const { isDark } = useTheme()

  return (
    <>
      <SectionFull $enableBg $isDark={isDark} $absolute>
        <CenterAbosolute>
          hola
        </CenterAbosolute>
      </SectionFull>
    </>
  )
}
