import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Link,
  Divider,
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import QrCode2Icon from '@mui/icons-material/QrCode2';

export default function Footer() {
  const handleScrollToSection = (targetId) => {
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
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
    <Box
      id="contact"
      sx={{
        background: '#081c15', // Darker forest background
        color: '#f0f3f1',
        pt: 10,
        pb: 4,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          {/* Logo & Social Links */}
          <Grid item xs={12} md={5}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2.5, gap: 2 }}>
              <Box
                component="img"
                src="/resort_logo.png"
                alt="TrailNest Logo"
                sx={{
                  height: 100,
                  width: 100,
                  objectFit: 'contain',
                  flexShrink: 0,
                }}
              />
              <Box>
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: '"Dancing Script", cursive',
                    fontWeight: 700,
                    color: '#ffffff',
                    fontSize: '1.8rem',
                    lineHeight: 1.2,
                  }}
                >
                  TrailNest
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ color: 'secondary.light', letterSpacing: '2px', fontSize: '0.65rem', textTransform: 'uppercase' }}
                >
                  Camping · By AMG
                </Typography>
              </Box>
            </Box>
            <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.7, mb: 3 }}>
              A hospitality venture of AMG IT Infrastructure and Services. Simple stays, real peace — across Kerala, Karnataka, and Tamil Nadu.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton sx={{ color: 'secondary.light', border: '1px solid rgba(255,255,255,0.1)', '&:hover': { background: 'rgba(255,255,255,0.05)' } }}>
                <FacebookIcon />
              </IconButton>
              <IconButton sx={{ color: 'secondary.light', border: '1px solid rgba(255,255,255,0.1)', '&:hover': { background: 'rgba(255,255,255,0.05)' } }}>
                <InstagramIcon />
              </IconButton>
              <IconButton sx={{ color: 'secondary.light', border: '1px solid rgba(255,255,255,0.1)', '&:hover': { background: 'rgba(255,255,255,0.05)' } }}>
                <TwitterIcon />
              </IconButton>
              <IconButton sx={{ color: 'secondary.light', border: '1px solid rgba(255,255,255,0.1)', '&:hover': { background: 'rgba(255,255,255,0.05)' } }}>
                <YouTubeIcon />
              </IconButton>
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#ffffff', mb: 3 }}>
              Explore
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              {['home', 'about', 'accommodation', 'dining', 'experiences'].map((sec) => (
                <Link
                  key={sec}
                  onClick={() => handleScrollToSection(sec)}
                  sx={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    textDecoration: 'none',
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                    transition: 'color 0.2s',
                    '&:hover': { color: 'secondary.light' },
                  }}
                >
                  {sec === 'accommodation' ? 'Lodging' : sec.charAt(0).toUpperCase() + sec.slice(1)}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Location & QR Code */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#ffffff', mb: 3, display: 'flex', alignItems: 'center', gap: 1 }}>
              <LocationOnIcon sx={{ color: 'secondary.light', fontSize: '1.1rem' }} />
              Find Us
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
              {/* QR Code */}
              <Box
                sx={{
                  background: '#ffffff',
                  borderRadius: 2,
                  p: 1,
                  flexShrink: 0,
                  boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
                  border: '2px solid rgba(217, 119, 6, 0.4)',
                }}
              >
                <Box
                  component="img"
                  src="/location_qr.png"
                  alt="Scan to find TrailNest location"
                  sx={{ height: 100, width: 100, display: 'block', objectFit: 'contain' }}
                />
                <Typography
                  variant="caption"
                  sx={{
                    display: 'block',
                    textAlign: 'center',
                    color: '#081c15',
                    fontWeight: 600,
                    fontSize: '0.6rem',
                    mt: 0.5,
                    letterSpacing: '0.5px',
                  }}
                >
                  <QrCode2Icon sx={{ fontSize: '0.75rem', verticalAlign: 'middle', mr: 0.3 }} />
                  Scan to locate
                </Typography>
              </Box>

              {/* Address + Contact */}
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                  <LocationOnIcon sx={{ color: 'secondary.light', fontSize: '1rem', mt: 0.2, flexShrink: 0 }} />
                  <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.6, fontSize: '0.82rem' }}>
                    Kavunji, Kodaikanal,<br />Tamil Nadu, India
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <PhoneIcon sx={{ color: 'secondary.light', fontSize: '1rem', flexShrink: 0 }} />
                  <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.82rem' }}>
                    +91 9071114800
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <EmailIcon sx={{ color: 'secondary.light', fontSize: '1rem', flexShrink: 0 }} />
                  <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.82rem' }}>
                    info.trailnest@gmail.com
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 6, borderColor: 'rgba(255, 255, 255, 0.1)' }} />

        {/* Deep Footer copyright details */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 2 }}>
          <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.5)' }}>
            © {new Date().getFullYear()} TrailNest Camping by AMG · A venture of AMG IT Infrastructure and Services · Bengaluru | Kannur | Kodaikanal
          </Typography>
          <Box sx={{ display: 'flex', gap: 3 }}>
            <Link href="#" sx={{ color: 'rgba(255, 255, 255, 0.5)', textDecoration: 'none', fontSize: '0.75rem', '&:hover': { color: '#ffffff' } }}>
              Privacy Policy
            </Link>
            <Link href="#" sx={{ color: 'rgba(255, 255, 255, 0.5)', textDecoration: 'none', fontSize: '0.75rem', '&:hover': { color: '#ffffff' } }}>
              Terms of Use
            </Link>
            <Link href="#" sx={{ color: 'rgba(255, 255, 255, 0.5)', textDecoration: 'none', fontSize: '0.75rem', '&:hover': { color: '#ffffff' } }}>
              Sitemap
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
