import { useState } from 'react'
import { useParams } from 'react-router-dom'
// import defaultUserImg from '../assets/defaultUserImg.svg'
import { useDataUser } from '../hooks/useDataUser.js'
import { useTheme } from '../hooks/useTheme.js'
import { ButtonLink } from '../styled components/Darth-theme-Router-Links.js'
import { Button, DivFlex, Input, Label, Page, Text, Title } from '../styled components/Darth-theme.js'
import {
  AvatarImg,
  EditStatsCardWrapper,
  EditStatsSection,
  ProfileContainerInfoWrapper,
  ProfileEditAvatarWrap,
  ProfileTitle
} from '../styled components/Profile-theme.js'
// import { undefinedToBoolean } from '../utils/getValues.js'

export function EditProfile () {
  // Theme
  const { isDark } = useTheme()
  const { id } = useParams()

  // Avatar context
  const currentUser = useDataUser()
  console.log(currentUser)
  // const currentAvatar = currentUser.avatar || defaultUserImg

  // Verify if new avatar is available
  const [avatar, setAvatar] = useState('')
  // const isAvalableAvatar = undefinedToBoolean(avatar)

  // const initialState = {
  //   website: '',
  //   firstname: '',
  //   lastname: '',
  //   story: '',
  //   gender: '',
  //   phone: '',
  //   addres: ''
  // }

  // const [editData, setEditData] = useState(initialState)

  // const {
  //   website,
  //   firstname,
  //   lastname,
  //   story,
  //   gender,
  //   phone,
  //   address
  // } = editData

  return (
    <Page
      $isDark={isDark}
      $absolute
      $heigth='100vh'
      $enableBg
    >
      <ProfileContainerInfoWrapper>
        <ProfileTitle>
          <Title $small $isDark={isDark}>Editar Perfil</Title>
        </ProfileTitle>

        <DivFlex $padding='1rem'>
          <EditStatsCardWrapper
            $isDark={isDark}
            $padding='1.5rem'
          >
            <EditStatsSection
              $padding='1rem'
            >
              <DivFlex
                $col
                $aiCenter
                $padding='0 0 2rem'
                $txtCenter
              >
                <Title $small $isDark={isDark}>Ingresa tus nuevos datos</Title>
                <Text $isDark={isDark}>Puedes modificar tus datos principales</Text>
              </DivFlex>

              <DivFlex $gap='1.2rem'>
                <DivFlex $flex $col>
                  <Label $isDark={isDark}>Edita tu Nombre</Label>
                  <Input $margin='0 0 1rem' $isDark={isDark} />
                </DivFlex>
                <DivFlex $flex $col>
                  <Label $isDark={isDark}>Edita tus Apellidos</Label>
                  <Input $margin='0 0 1rem' $isDark={isDark} />
                </DivFlex>
              </DivFlex>

              <div>
                <Label $isDark={isDark}>Edita tu Dirección</Label>
                <Input $margin='0 0 1rem' $isDark={isDark} />
              </div>

              <div>
                <Label $isDark={isDark}>Edita tus redes</Label>
                <Input $margin='0 0 1rem' $isDark={isDark} />
              </div>

            </EditStatsSection>

            <EditStatsSection>

              <DivFlex $jCenter $padding='0 0 1.5rem'>
                <ProfileEditAvatarWrap $large>
                  <AvatarImg src='' alt='Imagen de perfil' />
                </ProfileEditAvatarWrap>
              </DivFlex>

              <DivFlex $gap='1.2rem'>
                <DivFlex $col $flex>
                  <Label $isDark={isDark}>Edita tu Género</Label>
                  <Input $margin='0 0 1rem' $isDark={isDark} />
                </DivFlex>
                <DivFlex $col $flex>
                  <Label $isDark={isDark}>Edita tu Teléfono</Label>
                  <Input $margin='0 0 1rem' $isDark={isDark} />
                </DivFlex>
              </DivFlex>

              <div>
                <Label $isDark={isDark}>Edita tu Biografia</Label>
                <Input $margin='0 0 1rem' $isDark={isDark} />
              </div>

              <DivFlex $gap='1.5rem' $padding='1.5rem 0 0'>
                <ButtonLink
                  $isDark={isDark}
                  to={`/profile/${id}`}
                >
                  Cancelar
                </ButtonLink>
                <Button $action>Subir Cambios</Button>
              </DivFlex>

            </EditStatsSection>
          </EditStatsCardWrapper>
        </DivFlex>

      </ProfileContainerInfoWrapper>
    </Page>
  )
}
