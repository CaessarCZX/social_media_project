import { useContext } from 'react'
import { ThemeContext } from '../components/ThemeContext'

export function useTheme () {
  return useContext(ThemeContext)
}
