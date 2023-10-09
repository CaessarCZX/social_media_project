import styled, { css } from 'styled-components'
import darkBackground from '../assets/bg-dark-violet-02.svg'
import whiteBackground from '../assets/bg-opt-spatial.svg'

export const ContainerSection = styled.section`
  width: 100%;
  height: ${(props) => props.$height || '100vh'};
  display: flex;
  flex-wrap: ${(props) => props.$wrap ? 'wrap' : 'nowrap'};
  flex-direction: ${(props) => props.$column || 'row'};
  place-content: center;
  align-items: center;
  padding: ${(props) => props.$padding || '1rem'};
  /* TODO: Verify dark mode vars */
  background-color: #fff;
  background-image: url(${whiteBackground});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  
  ${(props) => props.$darkMode && css`
    background-color: #0e0915;
    background-image: url(${darkBackground});
  `}
`

export const ContainerDefault = styled.div`
width: 100%;
height: ${(props) => props.$height || '350px'};
display: flex;
flex-wrap: ${(props) => props.$wrap ? 'wrap' : 'nowrap'};
flex-direction: row;
place-content: center;
align-items: center;
text-align: ${(props) => props.$txtAlign || 'initial'};
padding: ${(props) => props.$padding || '1rem'};
gap: ${(props) => props.$gap || 'none'};

${(props) => props.$enableColumn && css`
    flex-direction: column;
  `}
`

/*
  Title for UI
  prop features available in styled component.
  <Title $darkMode? > => This component has darkMode disabled by default
    {
      font-size: 1.5 rem === 24px,
      font-weight: 500,
      font-family: inherit,
      line-height: 1,
      color: ['black', 'white' (just on darkMode)],
      border-color: ['black', 'white' (just on darkMode)],
      border: none
    }

    Single-props and changes:
    - $medium
    {
      font-size: 2.5rem,
    }
    - $large
    {
      font-size: 3.5rem,
      font-weight: 700
    }
    - $xtraLarge
    {
      font-size: 4.5rem,
      font-weight: 700
    }
*/
export const Title = styled.h2`
  font-family: inherit;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1;
  color: ${(props) => (props.$darkMode ? '#fff' : '#0e0e0e')};
  border-color: ${(props) => (props.$darkMode ? '#fff' : '#0e0e0e')};
  border: none;
  
  ${(props) => props.$enableBox && css`
    border: solid 2px;
    padding: 1.5rem;
  `}
  ${(props) => props.$medium && css`
    font-size: 2.5rem;
  `}
  ${(props) => props.$large && css`
    font-size: 3.5rem;
    font-weight: 700;
  `}
  ${(props) => props.$xtraLarge && css`
    font-size: 4.5rem;
    font-weight: 700;
  `}
`

export const Text = styled.p`
  font-family: inherit;
  font-size: ${(props) => props.$size || '0.87rem'};
  padding: ${(props) => props.$padding || '0px'};
  font-weight: ${(props) => props.$weight || '300'};
  line-height: 1.2;
  color: ${(props) => (props.$darkMode ? '#fff' : '#0e0e0e')};
  display: block;

  ${(props) => props.$enableInline && css`
    display: inline-block;
  `}
`
