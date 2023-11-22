import PropTypes from 'prop-types'
import { DefaultLink } from '../../styled components/Darth-theme-Router-Links.js'
import { SearchResultsWrapper } from '../../styled components/Header-theme'
import { HeaderSearchResultItem } from './HeaderSearchResultItem.jsx'

export function HeaderSearchResults ({ userArray }) {
  return (
    <SearchResultsWrapper>
      {
        userArray.map(
          (user) => (
            <DefaultLink to={`/profile/${user._id}`} key={user._id}>
              <HeaderSearchResultItem
                firstname={user.firstname}
                lastname={user.lastname}
                username={user.username}
                avatar={user.avatar}
              />
            </DefaultLink>
          )
        )
      }
    </SearchResultsWrapper>
  )
}

HeaderSearchResults.propTypes = {
  userArray: PropTypes.array.isRequired
}
