import { useTheme } from '../hooks/useTheme'
import {
  Button,
  ContainerAside,
  Div,
  Input,
  ItemFlex,
  Label,
  MicroSubtitle,
  SectionFull,
  SmallText,
  Subtitle,
  SubtitleHighlight,
  UlFlex
} from '../styled components/Darth-theme.dark'

export function Post () {
  const { isDark, toggleTheme } = useTheme()

  return (
    <>
      <SectionFull $enableBg $isDark={isDark}>
        <ContainerAside>
          <Div $txtCenter>
            <Button onClick={toggleTheme} $isDark={isDark}>Mode</Button>
          </Div>
          <SubtitleHighlight>HOLA MUNDO</SubtitleHighlight>
          <Subtitle $isDark={isDark}>GG</Subtitle>
          <UlFlex $gap='1.5rem' $height='7rem' $wrap $jAround>
            <ItemFlex $aiCenter>
              <MicroSubtitle $isDark={isDark}>Rivers</MicroSubtitle>
            </ItemFlex>
            <ItemFlex $asEnd $margin='0 0 1rem'>
              <SmallText $bold $isDark={isDark}>Aldo</SmallText>
            </ItemFlex>
          </UlFlex>
          <Div $mBlock='1.5rem'>
            <Label $isDark={isDark}>Ingresa texto</Label>
            <Input $isDark={isDark} />
          </Div>
          <Button $action>Click</Button>
        </ContainerAside>
      </SectionFull>
    </>
  )
}
