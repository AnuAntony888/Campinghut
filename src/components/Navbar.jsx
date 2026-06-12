import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  Container,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const navItems = [
  { label: 'Home', targetId: 'home' },
  { label: 'Destinations', targetId: 'destinations' },
  { label: 'Philosophy', targetId: 'about' },
  { label: 'Experiences', targetId: 'experiences' },
  { label: 'Gallery', targetId: 'gallery' },
  { label: 'Gastronomy', targetId: 'dining' },
];


export default function Navbar({ onOpenBooking }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleScrollToSection = (targetId) => {
    setMobileOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80; // height of the navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={scrolled ? 4 : 0}
        sx={{
          background: scrolled
            ? 'rgba(255, 255, 255, 0.85)'
            : 'rgba(255, 255, 255, 0.1)',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled
            ? '1px solid rgba(27, 67, 50, 0.08)'
            : '1px solid rgba(255, 255, 255, 0.1)',
          transition: 'all 0.4s ease-in-out',
          color: scrolled || isMobile ? 'primary.main' : '#ffffff',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between', height: 80 }}>
            {/* Logo and Brand */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
              }}
              onClick={() => handleScrollToSection('home')}
            >
              <Box
                component="img"
                src="/resort_logo.png"
                alt="TrailNest Logo"
                sx={{
                  height: 50,
                  width: 50,
                  mr: 1.5,
                  filter: scrolled || isMobile ? 'none' : 'brightness(0) invert(1)',
                  transition: 'filter 0.4s ease',
                }}
              />
              <Typography
                variant="h6"
                noWrap
                sx={{
                  fontFamily: '"Dancing Script", cursive',
                  fontWeight: 700,
                  letterSpacing: '1px',
                  color: scrolled || isMobile ? 'primary.main' : '#ffffff',
                  fontSize: { xs: '1.4rem', sm: '1.8rem' },
                }}
              >
                TrailNest
              </Typography>
            </Box>

            {/* Desktop Navigation */}
            {!isMobile && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                {navItems.map((item) => (
                  <Typography
                    key={item.targetId}
                    variant="subtitle1"
                    onClick={() => handleScrollToSection(item.targetId)}
                    sx={{
                      cursor: 'pointer',
                      fontSize: '0.95rem',
                      fontWeight: 600,
                      position: 'relative',
                      opacity: 0.9,
                      transition: 'opacity 0.2s, color 0.2s',
                      '&:hover': {
                        opacity: 1,
                        color: theme.palette.secondary.main,
                      },
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        width: '0%',
                        height: '2px',
                        bottom: '-4px',
                        left: '0',
                        backgroundColor: theme.palette.secondary.main,
                        transition: 'width 0.3s ease',
                      },
                      '&:hover::after': {
                        width: '100%',
                      },
                    }}
                  >
                    {item.label}
                  </Typography>
                ))}
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={onOpenBooking}
                  sx={{
                    ml: 2,
                    boxShadow: '0 4px 14px rgba(217, 119, 6, 0.3)',
                    '&:hover': {
                      backgroundColor: 'secondary.dark',
                    },
                  }}
                >
                  Join the Nest
                </Button>
              </Box>
            )}

            {/* Mobile Hamburger Toggle */}
            {isMobile && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Button
                  variant="contained"
                  color="secondary"
                  size="small"
                  onClick={onOpenBooking}
                  sx={{ mr: 1, py: 0.8 }}
                >
                  Join
                </Button>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                >
                  <MenuIcon />
                </IconButton>
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Drawer for Mobile Menu */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        PaperProps={{
          sx: {
            width: 280,
            background: 'background.default',
            padding: 3,
          },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
          <IconButton onClick={handleDrawerToggle}>
            <CloseIcon color="primary" />
          </IconButton>
        </Box>
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Box
            component="img"
            // src="/resort_logo.png"
            alt="TrailNest Logo"
            sx={{ height: 60, width: 60, mb: 1 }}
          />
          <Typography variant="h6" sx={{ fontFamily: '"Dancing Script", cursive', fontWeight: 700, fontSize: '1.6rem' }}>
            TrailNest
          </Typography>
        </Box>
        <List sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {navItems.map((item) => (
            <ListItem key={item.targetId} disablePadding>
              <ListItemButton
                onClick={() => handleScrollToSection(item.targetId)}
                sx={{
                  textAlign: 'center',
                  borderRadius: 2,
                  '&:hover': {
                    backgroundColor: 'rgba(27, 67, 50, 0.05)',
                  },
                }}
              >
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontWeight: 600,
                    color: 'primary.main',
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem disablePadding sx={{ mt: 2 }}>
            <Button
              fullWidth
              variant="contained"
              color="secondary"
              onClick={() => {
                handleDrawerToggle();
                onOpenBooking();
              }}
            >
              Join the Nest
            </Button>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}
