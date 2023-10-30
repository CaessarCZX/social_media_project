import { useTheme } from '../hooks/useTheme'
import {
  ContainerArticle,
  SectionFull
} from '../styled components/Darth-theme.dark'

export function Post () {
  const { isDark } = useTheme()

  return (
    <>
      <SectionFull $enableBg $isDark={isDark}>
        <ContainerArticle $width='100%' $height='100px' $padding='1.5rem'>
          <h1>Example</h1>
        </ContainerArticle>
      </SectionFull>
    </>
  )
}
