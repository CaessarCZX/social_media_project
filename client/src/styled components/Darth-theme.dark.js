import styled, { css } from 'styled-components'
import darkBg from '../assets/bg-dark.svg'
import lightBg from '../assets/bg-light.svg'
import bgSpacesDark from '../assets/bg-spaces-dark.svg'
import {
  BUTTONS as btn,
  DARTH_THEME_DARK_MODE as dark,
  FONT_SETTINGS as font,
  TRANSPARENCIES as glass,
  INPUTS as input,
  DARTH_THEME_LIGHT_MODE as light,
  TOGGLE as toggle
} from './Darth-theme.var.js'

// GLOBAL STYLES FOR CONTAINER

// -------------------------
// Condicionales
// -------------------------
const DarthSense = [
  `background-color: ${glass.primary};`,
  `backdrop-filter: ${dark.blurBoxDefault};`,
  `border-radius: ${dark.borderRadiusDefault};`,
  `border: ${dark.borderPrimary};`,
  `box-shadow: ${dark.boxShadowInsetPrim},${dark.boxShadowInsetSec};`
].join(' ')
const DisplayFlex = 'display: flex;'

// Conditional
const DefaultFeaturesContainers = (props) => css`
  ${props.$width && css`width: ${props.$width};`}
  ${props.$height && css`height: ${props.$height};`}
  ${props.$maxWidth && css`max-width: ${props.$maxWidth};`}
  ${props.$maxHeight && css`max-height: ${props.$maxHeight};`}
  ${props.$txtCenter && css`text-align: center;`}
  ${props.$txtRight && css`text-align: right;`}
  ${props.$contCenter && css`margin: 0 auto;`}
  ${props.$contRight && css`margin-left: auto;`}
  ${props.$overAuto && css`overflow: auto;`}
  ${props.$overHidden && css`overflow: hidden;`}
  ${props.$relative && css`position: relative;`}
  ${props.$absolute && css`position: absolute;`}
`
const Margins = (props) => css`
  ${props.$margin && css`margin: ${props.$margin};`}
  ${props.$mBlock && css`margin-block: ${props.$mBlock};`}
  ${props.$mInline && css`margin-inline: ${props.$mInline};`}
`

const Paddings = (props) => css`
  ${props.$padding && css`padding: ${props.$padding};`}
  ${props.$pBlock && css`padding-block: ${props.$pBlock};`}
  ${props.$pInline && css`padding-inline: ${props.$pInline};`}
`

const FlexSettings = (props) => css`
  ${props.$gap && css`gap: ${props.$gap};`}
  ${props.$wrap && css`flex-wrap: wrap;`}
  ${props.$col && css`flex-direction: column;`}
  ${props.$jCenter && css`justify-content: center;`}
  ${props.$jStart && css`justify-content: flex-start;`}
  ${props.$jEnd && css`justify-content: flex-end;`}
  ${props.$jBetween && css`justify-content: space-between;`}
  ${props.$jAround && css`justify-content: space-around;`}
  ${props.$jEvenly && css`justify-content: space-evenly;`}
  ${props.$acCenter && css`align-content: center;`}
  ${props.$acStart && css`align-content: flex-start;`}
  ${props.$acEnd && css`align-content: flex-end;`}
  ${props.$acBetween && css`align-content: space-between;`}
  ${props.$acAround && css`align-content: space-around;`}
  ${props.$aiEvenly && css`align-content: space-evenly;`}
  ${props.$aiCenter && css`align-items: center;`}
  ${props.$aiStart && css`align-content: flex-start;`}
  ${props.$aiEnd && css`align-content: flex-end;`}
  ${props.$aiStretch && css`align-content: stretch;`}
  ${props.$aiBaseline && css`align-content: baseline;`}
`

const ItemOnFlexSettings = (props) => css`
  ${props.$jsCenter && css`justify-self: center;`}
  ${props.$jsStart && css`justify-self: flex-start;`}
  ${props.$jsEnd && css`justify-self: flex-end;`}
  ${props.$asCenter && css`align-self: center;`}
  ${props.$asStart && css`align-self: flex-start;`}
  ${props.$asEnd && css`align-self: flex-end;`}
`
// |----------------- Defined Styles ---------------------|

// TITLES
export const MainTitle = styled.h1`
  /* Just Large title */
  font-size: ${font.titleLarge.size};
  font-weight: ${font.titleLarge.weight};
  line-height: 1;
  padding-bottom: 1rem;
  color: #0e0e0e;

  ${(props) => props.$isDark && css`
    color: ${font.titleDegree.dark.color};
    background-image: ${font.titleDegree.dark.backgroundImage};
    background-clip: ${font.titleDegree.dark.backgroundClip};
    -webkit-background-clip: ${font.titleDegree.dark.webkitBackgroundClip};
    -webkit-text-fill-color: ${font.titleDegree.dark.webkitTextFillColor};
  `}

`
export const Title = styled.h2`
  /* Default Large title */
  font-size: ${font.titleLarge.size};
  font-weight: ${font.titleLarge.weight};
  line-height: ${font.titleLarge.lineHeight};
  padding-bottom: 1rem;
  color: #0e0e0e;

  ${(props) => props.$isDark && css`
    color: ${font.titleDegree.dark.color};
    background-image: ${font.titleDegree.dark.backgroundImage};
    background-clip: ${font.titleDegree.dark.backgroundClip};
    -webkit-background-clip: ${font.titleDegree.dark.webkitBackgroundClip};
    -webkit-text-fill-color: ${font.titleDegree.dark.webkitTextFillColor};
  `}

  /* Medium title */
  ${(props) => props.$medium && css`
  font-size: ${font.titleMedium.size};
  font-weight: ${font.titleMedium.weight};
  line-height: ${font.titleMedium.lineHeight};
  `}
  /* Small title */
  ${(props) => props.$small && css`
  font-size: ${font.titleSmall.size};
  font-weight: ${font.titleSmall.weight};
  line-height: ${font.titleSmall.lineHeight};
  `}
`
export const SubtitleHighlight = styled.div`
  /* display: inline-block; */
  font-size: ${font.subtitleHighlight.size};
  font-weight: ${font.subtitleHighlight.weight};
  line-height: ${font.subtitleHighlight.lineHeight};
  color: ${font.subtitleHighlight.gradient.color};
  /* TODO: background feature for white mode */
  background-image: ${font.subtitleHighlight.gradient.backgroundImage};
  background-clip: ${font.subtitleHighlight.gradient.backgroundClip};
  -webkit-background-clip: ${font.subtitleHighlight.gradient.webkitBackgroundClip};  
  -webkit-text-fill-color: ${font.subtitleHighlight.gradient.webkitTextFillColor};
`

export const Subtitle = styled.h3`
  /* Default Large subtitle */
  /* display: inline-block; */
  font-size: ${font.subtitleLarge.size};
  font-weight: ${font.subtitleLarge.weight};
  line-height: ${font.subtitleLarge.lineHeight};
  color: ${(props) => (props.$isDark ? dark.titlePrimary : '#0e0e0e')};

  /* Medium subtitle */
  ${(props) => props.$medium && css`
  font-size: ${font.subtitleMedium.size};
  font-weight: ${font.subtitleMedium.weight};
  line-height: ${font.subtitleMedium.lineHeight};
  `}
`

export const MicroSubtitle = styled.h4`
  /* Default Small subtitle */
  /* display: inline-block; */
  font-size: ${font.subtitleSmall.size};
  font-weight: ${font.subtitleSmall.weight};
  line-height: ${font.subtitleSmall.lineHeight};
  color: ${(props) => (props.$isDark ? dark.textHighlight : '#0e0e0e')};
`

// TEXT
export const Text = styled.p`
  /* Default Large text */
  font-size: ${font.textLarge.size};
  font-weight: ${font.textLarge.weight};
  line-height: ${font.textLarge.lineHeight};
  color: ${(props) => (props.$isDark ? dark.textPrimary : '#0e0e0e')};

  /* Medium text */
  ${(props) => props.$medium && css`
    font-size: ${font.textMedium.size};
    font-weight: ${font.textMedium.weight};
    line-height: ${font.textMedium.lineHeight};
  `}
`

export const SmallText = styled.span`
  /* Default Small title */
  font-size: ${font.txtSmall.size};
  font-weight: ${font.txtSmall.weight};
  line-height: ${font.txtSmall.lineHeight};
  color: ${(props) => (props.$isDark ? dark.textSeconday : '#0e0e0e')};

  /* Bold mode */
  ${(props) => props.$bold && css`
    font-weight: ${font.txtSmallBold.weight};
  `}
`

// -------------------------
// Container Predefinied
// -------------------------
export const ContainerAside = styled.aside`
  width: 30vw;
  height: 100%;
  max-height: 700px;
  min-width: 300px;
  padding: 1.5rem;
  
 ${DarthSense}
`

// INPUTS
export const Input = styled.input`
  ${Margins}

  width: ${input.general.width};
  font-size: ${input.general.fontSize};
  font-family: ${input.general.fontFamily};
  line-height: ${input.general.lineHeight};
  background-color: ${input.general.backgroundDefault};
  border-radius: ${input.general.borderRadius};
  border-style: ${input.general.borderStyle};
  border-width: ${input.general.borderWidth};
  border-color: ${input.general.borderColor};
  padding: ${input.general.padding};
  
  &:active {
    outline: ${input.general.active.outline};
  }
  &:focus {
    outline: ${input.general.focus.outline};
  }
  
  color: ${(props) => (props.$isDark ? dark.textHighlight : '#0e0e0e')};

  &::placeholder {
    color: ${dark.textSeconday};
    letter-spacing: 0.5px;
  }
`
export const Label = styled.label`
  ${Margins}

  display: ${input.label.display};
  width: ${input.label.width};
  line-height: ${input.label.lineHeight};
  margin: ${input.label.margin};
  color: ${(props) => (props.$isDark ? dark.titlePrimary : '#0e0e0e')};

  ${(props) => props.$required && css`
  position: relative;

    &::after{
      content: '*';
      margin-left: 0.3rem;
      color: red;
    }
  `}
`

// BUTTON
export const Button = styled.button`
  ${Margins}

  display: ${btn.general.display};
  padding: ${btn.general.padding};
  flex: ${btn.general.flex};
  font-family: ${btn.general.fontFamily};
  font-size: ${btn.general.fontSize};
  font-weight: ${btn.general.fontWeight};
  justify-content: ${btn.general.justifyContent};
  line-height: ${btn.general.lineHeight};
  border-style: ${btn.general.borderStyle};
  border-radius: ${btn.general.borderRadius};
  border-color: ${btn.defaultBtn.borderColor};
  border-width: ${btn.general.borderWidth};
  background-color: ${btn.defaultBtn.backgroundColor};
  box-shadow: ${btn.defaultBtn.boxShadow};
  transition: ${btn.general.transition};
  cursor: ${btn.general.cursor};
  color: ${(props) => (props.$isDark ? dark.titlePrimary : '#0e0e0e')};

  &:hover {
    background-color: ${btn.defaultBtn.hover.backgroundColor};
  }

  ${(props) => props.$action && css`
    background-color: ${btn.actionBtn.backgroundColor};
    color: ${btn.actionBtn.color};
    box-shadow: ${btn.actionBtn.boxShadow};

    &:hover {
      background-color: ${btn.actionBtn.hover.backgroundColor};
    }
  `}
`

// -------------------------
// Containers
// -------------------------
// --------- GENERAL BLOCK -------------
export const Div = styled.div`
  ${DefaultFeaturesContainers}
  ${Margins}
  ${Paddings}
`
export const Header = styled.header`
  ${DefaultFeaturesContainers}
  ${Margins}
  ${Paddings}
`
export const Section = styled.section`
  ${DefaultFeaturesContainers}
  ${Margins}
  ${Paddings}
`
export const Article = styled.article`
  ${DefaultFeaturesContainers}
  ${Margins}
  ${Paddings}
`
export const Ul = styled.ul`
  ${DefaultFeaturesContainers}
  ${Margins}
  ${Paddings}
`
export const Li = styled.li`
  ${DefaultFeaturesContainers}
  ${Margins}
  ${Paddings}
`
// ---------- GENERAL FLEX --------------
export const DivFlex = styled(Div)`
  ${DisplayFlex}
  ${FlexSettings}
`
export const HeaderFlex = styled(Header)`
  ${DisplayFlex}
  ${FlexSettings}
`
export const SectionFlex = styled(Section)`
  ${DisplayFlex}
  ${FlexSettings}
`
export const ArticleFlex = styled(Article)`
  ${DisplayFlex}
  ${FlexSettings}
`
export const UlFlex = styled(Ul)`
  ${DisplayFlex}
  ${FlexSettings}
`
export const LiFlex = styled(Li)`
  ${DisplayFlex}
  ${FlexSettings}
`

// ---------- SPECIFIC CONTAINER FLEX --------------
export const SectionFull = styled(SectionFlex)`
  padding: 1.5rem;
  width: 100%;
  height: 100vh;
  place-content: center;
  align-items: center;

  ${(props) => props.$enableBg && css`
    background-image: url(${(props) => (props.$isDark ? darkBg : lightBg)});
    background-color: ${(props) => (props.$isDark ? dark.backgroundPrimary : light.backgroundPrimary)};
    background-position: center;
    background-attachment: fixed;
    background-size: cover;
    background-repeat: no-repeat;
  `}
`
export const ItemFlex = styled(LiFlex)`
  display: inline-flex;
  ${ItemOnFlexSettings}
`

// ---------- SPECIFIC CONTAINER BLOCK --------------
export const Page = styled(Div)`
  width: 100%;
  min-width: 300px;
  min-height: 100vh;

  ${(props) => props.$enableBg && css`
    background-image: url(${(props) => (props.$isDark ? darkBg : lightBg)});
    background-color: ${(props) => (props.$isDark ? dark.backgroundPrimary : light.backgroundPrimary)};
    background-position: center;
    background-attachment: fixed;
    background-size: cover;
    background-repeat: no-repeat;
  `}
`
export const SectionMain = styled(Section)`
  max-width: 1100px;
  padding-inline: 1.5rem;
  margin: 0 auto;
`

export const CenterAbosolute = styled(Div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const ItemBlock = styled(Li)`
  display: inline-block;
`

// SPECIFIC CONTAINER FLOCK FOR COMPONENT
export const SpacerContainer = styled(Section)`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.$isDark ? dark.backgroundPrimary : light.backgroundPrimary};
  background-image: url(${(props) => (props.$isDark ? bgSpacesDark : lightBg)});
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
`

export const TestDivBg = styled(Div)`
  background-color: red;
`

// ----------- LOGO STYLE -----------------
export const LogoMain = styled.img`
  max-width: 100px;

  ${(props) => props.$large && css` max-width: 200px; `}
`

// ------------ TOGGLE STYLE ---------------
export const Slider = styled.label`
  width: ${toggle.generaLabel.width};
  position: ${toggle.generaLabel.position};
  height: ${toggle.generaLabel.height};
  border-radius: ${toggle.generaLabel.borderRadius};
  background-color: ${toggle.dark.backgroundColor};
  box-shadow: ${toggle.generaLabel.boxShadow};
  transition: ${toggle.generaLabel.transition};
  cursor: ${toggle.generaLabel.cursor};

  &::before {
    content: ${toggle.generaLabel.before.content};
    position: ${toggle.generaLabel.before.position};
    inset: ${toggle.generaLabel.before.inset};
    width: ${toggle.generaLabel.before.width};
    height: ${toggle.generaLabel.before.height};
    border-radius: ${toggle.generaLabel.before.borderRadius};
    background-color: ${toggle.generaLabel.before.backgroundColor};
    transform: ${toggle.generaLabel.before.transform};
    transition: ${toggle.generaLabel.before.transition};
  }
`

export const ControlSlider = styled.input`
  display: ${toggle.ganeralInput.display};

  &:checked + label::before {
    transform: ${toggle.ganeralInput.selfElmenteCheckedAndSibligLabel}
  }
`

// ------------- FOOTER --------------------
export const Footer = styled.footer`
  background-color: #01010f;
`
