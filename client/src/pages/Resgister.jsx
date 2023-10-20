import { useTheme } from '../hooks/useTheme.js'
import LogoPage from '../layout/LogoPage.jsx'
import { LinkS } from '../styled components/Darth-theme-Router-Links.js'
import {
  Article,
  Button,
  CenterAbosolute,
  Div, DivFlex, Input, Label, LateralAbsolute, SpacerContainer,
  Text,
  Title
} from '../styled components/Darth-theme.dark.js'

export function Register () {
  const { isDark } = useTheme()

  return (
    <Div $height='110vh'>{/* < ==== < ====  TODO: REMOVE THIS TAG, IT'S JSUT FOR DEVELOPMENT */}
      <SpacerContainer $isDark={isDark}>
        <LateralAbsolute $margin='1.5rem'>
          <LinkS to='/' $isDark={isDark}>Ir a inicio</LinkS>
        </LateralAbsolute>
        <CenterAbosolute $width='100%' $maxWidth='400px'>
          <Article $pInline='1rem'>
            <Div $txtCenter>
              <picture>
                <LogoPage $large />
              </picture>
              <Title $small $isDark={isDark}>Crea tu cuenta gratis</Title>
            </Div>
            <form>
              <DivFlex $mBlock='1rem' $gap='1.5rem'>
                <Div>
                  <Label $required $isDark={isDark}>Nombre</Label>
                  <Input
                    type='text'
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
                  placeholder='alguien@mail.com'
                  minLength='10'
                  maxLength='50'
                  $isDark={isDark}
                />
              </Div>
              <Div $mBlock='1rem'>
                <Label $required $isDark={isDark}>Contraseña</Label>
                <Input
                  type='password'
                  placeholder='Ej: myPassword'
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
