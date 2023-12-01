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
  width: 200px;
  height: 200px;

  &:hover > span {
    opacity: 1;
  }
`

export const UploadInputForAvatarWrap = styled.span`
  display: block;
  position: absolute;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.57);
  padding: 0.7rem;
  border-radius: 14px;
  width: 90px;
  opacity: 0;

  /* For input type 'file' */
  & > input {
    display: none;
  }

`

export const UploadInputForAvatarLabel = styled.p`
  font-size: 0.67rem;
  font-weight: 700;
  color: #cbd2de;
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

export const AddFriendButton = styled(StatsCardItem)`
  cursor: pointer;
  border: solid 1.12px #a855f7;

  &:hover {
    background-color: rgba(168, 85, 247, 0.17) ;
  }
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
  min-width: 390px;
`

export const EditStatsItem = styled(ContainerArticle)`
  border-radius: 25px;
  flex: 1;
  padding: 0.5rem 1rem;

`
