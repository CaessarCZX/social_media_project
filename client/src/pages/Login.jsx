import { useTheme } from '../hooks/useTheme.js'
import LogoPage from '../layout/LogoPage.jsx'
import { LinkS } from '../styled components/Darth-theme-Router-Links.js'
import {
  Article,
  Button,
  CenterAbosolute,
  Div,
  DivFlex,
  Input,
  Label,
  LateralAbsolute,
  SpacerContainer,
  Text,
  Title
} from '../styled components/Darth-theme.dark'

export function Login () {
  const { isDark } = useTheme()
  return (
    <Div $height='100vh'>{/* < ==== < ====  TODO: REMOVE THIS TAG, IT'S JSUT FOR DEVELOPMENT */}
      <SpacerContainer $relative $isDark={isDark}>
        <LateralAbsolute $margin='1.5rem'>
          <LinkS to='/' $isDark={isDark}>Ir a inicio</LinkS>
        </LateralAbsolute>
        <CenterAbosolute $width='100%' $maxWidth='400px'>
          <Article $pInline='1rem'>
            <Div $txtCenter>
              <picture>
                <LogoPage $large />
              </picture>
              <Title $small $isDark={isDark}>Entra a tu cuenta</Title>
            </Div>
            <form>
              <Div $mBlock='1rem'>
                <Label $isDark={isDark}>Email</Label>
                <Input type='text' placeholder='user@mail.com' $isDark={isDark} />
              </Div>
              <Div $mBlock='1rem'>
                <Label $isDark={isDark}>Password</Label>
                <Input type='password' placeholder='pass...' $isDark={isDark} />
              </Div>
              <DivFlex $mBlock='1.2rem'>
                <Button type='submit' $action>Iniciar sesión</Button>
              </DivFlex>
            </form>
            <DivFlex $gap='0.5rem' $jCenter>
              <Text $medium $isDark={isDark}>¿Aún no tienes una cuenta?</Text>
              <LinkS to='/register' $medium $action>Registrate aquí</LinkS>
            </DivFlex>
          </Article>
        </CenterAbosolute>
      </SpacerContainer>
    </Div>
  )
}
