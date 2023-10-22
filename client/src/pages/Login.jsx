import { useState } from 'react'
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
  SmallText,
  SpacerContainer,
  Text,
  Title
} from '../styled components/Darth-theme.dark'

export function Login () {
  // Autentication keys
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // Show password feature
  const [showpass, setShowpass] = useState(false)

  // Theme
  const { isDark } = useTheme()

  // Submit form data
  const handleSubmit = (event) => {
    event.preventDefault()
  }

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
            <form onSubmit={handleSubmit}>
              <Div $mBlock='1rem'>
                <Label $isDark={isDark}>Email</Label>
                <Input
                  type='text'
                  value={email}
                  onChange={(event) => setEmail(event.target.email)}
                  placeholder='user@mail.com'
                  $isDark={isDark}
                />
              </Div>
              <Div $mBlock='1rem'>
                <DivFlex $aiCenter>
                  <Label $isDark={isDark}>Contraseña</Label>
                  <SmallText
                    $bold={showpass}
                    $clickable
                    $width={showpass ? '160px' : '155px'}
                    $isDark={isDark}
                    onClick={() => setShowpass(!showpass)}
                  >
                    {showpass ? 'Ocultar Contraseña' : 'Mostrar Contraseña'}
                  </SmallText>
                </DivFlex>
                <Input
                  type={showpass ? 'type' : 'password'}
                  value={password}
                  onChange={(event) => setPassword(event.target.password)}
                  placeholder='pass...'
                  $isDark={isDark}
                />
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
