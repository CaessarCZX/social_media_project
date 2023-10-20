import PropTypes from 'prop-types'
import { useTheme } from '../hooks/useTheme.js'
import { ControlSlider, Slider } from '../styled components/Darth-theme.dark.js'

export function ToggleSlider ({ id }) {
  const { isDark, toggleTheme } = useTheme()

  return (
    <>
      {
        isDark
          ? (
            <ControlSlider
              id={id}
              checked
              type='checkbox'
              onChange={toggleTheme}
            />)
          : (
            <ControlSlider
              id={id}
              type='checkbox'
              onChange={toggleTheme}
            />
            )
      }
      <Slider for={id} title='Cambiar el tema' />
    </>
  )
}

ToggleSlider.propTypes = {
  id: PropTypes.string.isRequired
}
