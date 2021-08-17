import {
  createTheme,
  responsiveFontSizes
} from '@material-ui/core/styles'

const font = "'Raleway', sans-serif"

let theme = createTheme({
  // Palette
  palette: {
    primary: {
      main: '#2969ff'
    },
    secondary: {
      main: '#ffce5c'
    },
    error: {
      main: '#ff5c8d'
    },
    warning: {
      main: '#EEE8A9'
    },
    info: {
      main: '#016FB9'
    },
    success: {
      main: '#91EA84'
    },
    background: {
      default: '#016FB9'
    }
  },
  // Breakpoints
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1000,
      lg: 1200,
      xl: 1536,
    },
  },
  // Font-family & font-sizes
  typography: {
    fontFamily: font,
    h1: {
      fontSize: 66
    },
    h2: {
      fontSize: 52
    },
    h3: {
      fontSize: 44
    },
    h4: {
      fontSize: 36
    },
    h5: {
      fontSize: 30
    },
    h6: {
      fontSize: 26
    },
    subtitle1: {
      fontSize: 26
    },
    subtitle2: {
      fontSize: 24
    },
    body1: {
      fontSize: 22
    },
    body2: {
      fontSize: 20
    }
  }
})

// Responsive font-size helper
theme = responsiveFontSizes(theme)

export default theme
