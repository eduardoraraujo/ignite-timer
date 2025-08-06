import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { BrowserRouter } from 'react-router-dom'
import Router from './Router'
import { CyclesContentProvider } from './contexts/CyclesContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CyclesContentProvider>
          <Router />
        </CyclesContentProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
