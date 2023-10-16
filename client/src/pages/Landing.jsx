import { useTheme } from '../hooks/useTheme.js'
import LogoPage from '../layout/LogoPage.jsx'
import {
  Button,
  Div,
  Footer,
  HeaderFlex,
  ItemFlex,
  MainTitle,
  Page,
  SectionMain,
  Text,
  UlFlex
} from '../styled components/Darth-theme.dark'

export function Landing () {
  const { isDark, toggleTheme } = useTheme()

  return (
    <>
      <Page $enableBg $isDark={isDark}>
        <HeaderFlex $padding='1rem' $jBetween>
          <picture>
            <LogoPage />
          </picture>
          <UlFlex $gap='1rem' $aiCenter $wrap>
            <ItemFlex>
              <Button $isDark={isDark}>Hola</Button>
            </ItemFlex>
            <ItemFlex>
              <Button $isDark={isDark}>Como?</Button>
            </ItemFlex>
            <ItemFlex>
              <Button onClick={toggleTheme} $action>Mode</Button>
            </ItemFlex>
          </UlFlex>
        </HeaderFlex>
        <main>
          <SectionMain $height='85vh'>
            <Div $maxWidth='700px' $contCenter $txtCenter $padding='17vh 0'>
              <MainTitle $isDark={isDark}>Conecta con los tuyos</MainTitle>
              <Text $isDark={isDark}>Unete a la resistencia, crea amistades y crece dentro de nuestra red</Text>
              <UlFlex $contCenter $padding='3rem 0 0' $maxWidth='300px'>
                <Button $isDark={isDark}>Regístrate</Button>
                <Button $action $margin='0 0 0 1rem' $isDark={isDark}>Inicia sesión</Button>
              </UlFlex>
            </Div>
          </SectionMain>
        </main>
      </Page>
      <Footer>
        <SectionMain>
          <ul>
            <li>Hola</li>
            <li>Como</li>
          </ul>
        </SectionMain>
      </Footer>
    </>
  )
}
