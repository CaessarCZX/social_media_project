import styled, { css } from 'styled-components'
import { ContainerArticle, Div } from './Darth-theme'

export const ProfileContainerInfoWrapper = styled(Div)`
  width: 80vw;
  margin:14vh auto 0;
  position: relative;
  
  @media screen and (width < 500px) {
    width: 100vw;
    min-width: 300px;
  }
`

export const ProfileTitle = styled.div`
  position: absolute;
  top: -7vh;
  left: 0;
`

// For mini card
export const MiniCardWrap = styled(ContainerArticle)`
  border-radius: 25px;
  `

export const ProfileAvatarWrap = styled.picture`
display: block;
overflow: hidden;
border-radius: 50%;
max-width: 150px;
max-height: 150px;
margin: 0 auto;

  ${(props) => props.$large && css`
    max-width: 200px;
    max-height: 200px;
  `}
`

export const ProfileEditAvatarWrap = styled(ProfileAvatarWrap)`
  position: relative;
`

// Avatar
export const AvatarImg = styled.img`
  width: 100%;
  transform: scale(1.2);
  object-fit: cover;
`

// For stats card
export const StatsCardWrapper = styled(ContainerArticle)`
  width: 100%;
  align-self: flex-start;
  border-radius: 25px;
`

export const StatsCardItem = styled(ContainerArticle)`
  border-radius: 25px;
  flex: 1;
  max-width: 177px;
  padding: 0.5rem 1rem;
`

// EditProfile
export const EditStatsCardWrapper = styled(ContainerArticle)`
  width: 100%;
  border-radius: 25px;
  display: flex;
  flex-wrap: wrap;
`

export const EditStatsSection = styled(Div)`
  flex: 1;
  min-width: 300px;
`
