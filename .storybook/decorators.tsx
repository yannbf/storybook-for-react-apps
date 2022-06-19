import { ThemeProvider } from 'styled-components'
import { DecoratorFn } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { BrowserRouter } from 'react-router-dom'
import { initialize, mswDecorator } from 'msw-storybook-addon'

import { GlobalStyle } from '../src/styles/GlobalStyle'
import { darkTheme, lightTheme } from '../src/styles/theme'

initialize()

const withTheme: DecoratorFn = (StoryFn, context) => {
  const theme = context.parameters.theme ?? context.globals.theme
  const storyTheme = theme === 'dark' ? darkTheme : lightTheme
  return (
    <ThemeProvider theme={storyTheme}>
      <GlobalStyle />
      <StoryFn />
    </ThemeProvider>
  )
}

export const withRouter: DecoratorFn = (StoryFn) => (
  <BrowserRouter>
    <StoryFn />
  </BrowserRouter>
)

export const globalDecorators = [
  mswDecorator,
  withTheme,
  withDesign,
  withRouter,
]
