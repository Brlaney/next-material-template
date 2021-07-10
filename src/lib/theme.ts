import {
  createTheme,
  responsiveFontSizes
} from '@material-ui/core/styles'

const font = "'Lato', sans-serif"

let theme = createTheme({
  palette: {
    primary: {
      main: '#443850ff'
    },
    secondary: {
      main: '#bbbe64ff'
    },
    error: {
      main: '#8e5572ff'
    },
    warning: {
      main: '#EEE8A9'
    },
    info: {
      main: '#bcaa99ff'
    },
    success: {
      main: '#91EA84'
    },
    background: {
      default: '#f2f7f2ff'
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 700,
      md: 900,
      lg: 1200,
      xl: 1500
    }
  },
  typography: {
    fontFamily: font,
    h1: {
      fontSize: 82
    },
    h2: {
      fontSize: 66
    },
    h3: {
      fontSize: 54
    },
    h4: {
      fontSize: 45
    },
    h5: {
      fontSize: 36
    },
    h6: {
      fontSize: 26
    },
    subtitle1: {
      fontSize: 24
    },
    subtitle2: {
      fontSize: 22
    },
    body1: {
      fontSize: 20
    },
    body2: {
      fontSize: 18
    }
  }
})

theme = responsiveFontSizes(theme)

export default theme
