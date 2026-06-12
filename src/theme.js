import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1b4332', // Deep Forest Green
      light: '#40916c',
      dark: '#081c15',
      contrastText: '#faf9f6',
    },
    secondary: {
      main: '#d97706', // Campfire Sunset Amber
      light: '#f59e0b',
      dark: '#b45309',
      contrastText: '#111d13',
    },
    background: {
      default: '#faf9f6', // Soft Warm Ivory
      paper: '#ffffff',
      dark: '#111d13', // Charcoal Pine for dark sections
      darker: '#081c15',
    },
    text: {
      primary: '#2d3a32', // Soft Charcoal Green
      secondary: '#5a6e60',
      light: '#f0f3f1',
    },
    divider: 'rgba(27, 67, 50, 0.1)',
  },
  typography: {
    // Base body font: Montserrat
    fontFamily: '"Montserrat", "Helvetica", "Arial", sans-serif',
    h1: {
      // Hero brand name uses Dancing Script (logo script style)
      fontFamily: '"Dancing Script", cursive',
      fontWeight: 700,
      color: '#1b4332',
    },
    h2: {
      // Section titles use Cinzel (matches CAMPING / BY AMG style)
      fontFamily: '"Cinzel", serif',
      fontWeight: 700,
      color: '#1b4332',
      letterSpacing: '2px',
    },
    h3: {
      fontFamily: '"Cinzel", serif',
      fontWeight: 600,
      color: '#1b4332',
      letterSpacing: '1.5px',
    },
    h4: {
      fontFamily: '"Cinzel", serif',
      fontWeight: 600,
      color: '#1b4332',
      letterSpacing: '1px',
    },
    h5: {
      fontFamily: '"Cinzel", serif',
      fontWeight: 600,
      letterSpacing: '0.8px',
    },
    h6: {
      fontFamily: '"Cinzel", serif',
      fontWeight: 600,
      letterSpacing: '0.5px',
    },
    subtitle1: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: 500,
      letterSpacing: '0.5px',
    },
    subtitle2: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: 300, // Montserrat Light for taglines
      letterSpacing: '0.3px',
    },
    body1: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: 400,
    },
    body2: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: 300,
    },
    button: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: 600,
      letterSpacing: '1.5px',
    },
  },
  shape: {
    borderRadius: 16, // Premium rounded feel
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          padding: '8px 24px',
          fontWeight: 600,
          boxShadow: 'none',
          transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
          '&:hover': {
            boxShadow: '0 4px 12px rgba(27, 67, 50, 0.15)',
            transform: 'translateY(-1px)',
          },
        },
        containedPrimary: {
          '&:hover': {
            backgroundColor: '#2d6a4f',
          },
        },
        containedSecondary: {
          color: '#ffffff',
          '&:hover': {
            backgroundColor: '#ea580c',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 8px 30px rgba(0, 0, 0, 0.03)',
          transition: 'transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
          borderRadius: 16,
          '&:hover': {
            transform: 'translateY(-6px)',
            boxShadow: '0 12px 40px rgba(27, 67, 50, 0.08)',
          },
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: 20,
          padding: 8,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 10,
          },
        },
      },
    },
  },
});

export default theme;
