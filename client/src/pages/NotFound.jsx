import { LinkS } from '../styled components/LinkS.js'
import { ContainerDefault, ContainerSection, Text, Title } from '../styled components/SiteStyles.js'

export function NotFound () {
  return (
    <ContainerSection $darkMode='$darkMode'>
      <ContainerDefault
        $height='100vh'
        $gap='1rem'
        $txtAlign='center'
        $enableColumn
      >
        <Title
          $large
          $enableBox
          $darkMode='$darkMode'
        >Not Found
        </Title>
        <Title
          $xtraLarge
          $darkMode='$darkMode'
        >404
        </Title>
        <article>
          <Text
            $size='1.2rem'
            $weight='500'
            $enableInline
            $darkMode='$darkMode'
          >Go to homepage
          </Text>
          <LinkS
            $size='1.2rem'
            $darkMode='$darkMode'
            to='/'
          >Here
          </LinkS>
        </article>
      </ContainerDefault>
    </ContainerSection>
  )
}
