import { useState } from 'react'
import { useTheme } from '../hooks/useTheme.js'
import LogoPage from '../layout/LogoPage.jsx'
import { LinkS } from '../styled components/Darth-theme-Router-Links.js'
import {
  Article,
  Button,
  CenterAbosolute,
  Div, DivFlex, Input, Label, LateralAbsolute,
  SmallText,
  SpacerContainer,
  Text,
  Title
} from '../styled components/Darth-theme.dark.js'

export function Register () {
  // Input data
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // Confirmation
  const [confirmPassword, setConfirmPassword] = useState('')
  // Show pass feature
  const [showpass, setShowpass] = useState(false)
  const [showOfPass, setShowOfPass] = useState(false)

  // Theme
  const { isDark } = useTheme()

  // Subtit form data
  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <Div $height='120vh'>{/* < ==== < ====  TODO: REMOVE THIS TAG, IT'S JSUT FOR DEVELOPMENT */}
      <SpacerContainer $isDark={isDark}>
        <LateralAbsolute $margin='1.5rem'>
          <LinkS to='/' $isDark={isDark}>Ir a inicio</LinkS>
        </LateralAbsolute>
        <CenterAbosolute $mBlock='4rem' $width='100%' $maxWidth='400px'>
          <Article $pInline='1rem'>
            <Div $txtCenter>
              <picture>
                <LogoPage $large />
              </picture>
              <Title $small $isDark={isDark}>Crea tu cuenta gratis</Title>
            </Div>
            <form onSubmit={handleSubmit}>
              <DivFlex $mBlock='1rem' $gap='1.5rem'>
                <Div>
                  <Label $required $isDark={isDark}>Nombre</Label>
                  <Input
                    type='text'
                    value={firstname}
                    onChange={(event) => setFirstname(event.target.firstname)}
                    placeholder='Ej: Tony...'
                    minLength='5'
                    maxLength='50'
                    $isDark={isDark}
                  />
                </Div>
                <Div>
                  <Label $required $isDark={isDark}>Apellidos</Label>
                  <Input
                    type='text'
                    value={lastname}
                    onChange={(event) => setLastname(event.target.lastname)}
                    placeholder='Ej: Cayetano...'
                    minLength='5'
                    maxLength='50'
                    $isDark={isDark}
                  />
                </Div>
              </DivFlex>
              <Div $mBlock='1rem'>
                <Label $required $isDark={isDark}>Nombre de usuario</Label>
                <Input
                  type='text'
                  value={username}
                  onChange={(event) => setUsername(event.target.username)}
                  placeholder='Ej: inSamuel77'
                  minLength='5'
                  maxLength='25'
                  $isDark={isDark}
                />
              </Div>
              <Div $mBlock='1rem'>
                <Label $required $isDark={isDark}>Email</Label>
                <Input
                  type='text'
                  value={email}
                  onChange={(event) => setEmail(event.target.email)}
                  placeholder='alguien@mail.com'
                  minLength='10'
                  maxLength='50'
                  $isDark={isDark}
                />
              </Div>
              <Div $mBlock='1rem'>
                <DivFlex>
                  <Label $required $isDark={isDark}>Contraseña</Label>
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
                  placeholder='Ej: miContraseña'
                  minLength='8'
                  maxLength='25'
                  $isDark={isDark}
                />
              </Div>
              <Div $mBlock='1rem'>
                <DivFlex>
                  <Label $required $isDark={isDark}>Confirmar contraseña</Label>
                  <SmallText
                    $bold={showOfPass}
                    $clickable
                    $width={showOfPass ? '160px' : '155px'}
                    $isDark={isDark}
                    onClick={() => setShowOfPass(!showOfPass)}
                  >
                    {showOfPass ? 'Ocultar Contraseña' : 'Mostrar Contraseña'}
                  </SmallText>
                </DivFlex>
                <Input
                  type={showOfPass ? 'type' : 'password'}
                  value={confirmPassword}
                  onChange={(event) => setConfirmPassword(event.target.confirmPassword)}
                  placeholder='Ej: miContraseña'
                  minLength='8'
                  maxLength='25'
                  $isDark={isDark}
                />
              </Div>
              <DivFlex $mBlock='1.2rem'>
                <Button type='submit' $action>Registrate</Button>
              </DivFlex>
            </form>
            <DivFlex $gap='0.5rem' $jCenter>
              <Text $medium $isDark={isDark}>¿Ya tienes una cuenta?</Text>
              <LinkS to='/login' $medium $action>Inicia sesión aquí</LinkS>
            </DivFlex>
          </Article>
        </CenterAbosolute>
      </SpacerContainer>
    </Div>
  )
}
