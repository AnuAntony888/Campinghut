import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  TextField,
  Button,
  Link,
  Divider,
  Alert,
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import RoomIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim() && /\S+@\S+\.\S+/.test(email)) {
      setSubscribed(true);
      setEmail('');
    }
  };

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
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2.5 }}>
              <Box
                component="img"
                src="/resort_logo.png"
                alt="AMG Wilderness Logo"
                sx={{ height: 48, width: 48, mr: 1.5, filter: 'brightness(0) invert(1)' }}
              />
              <Typography
                variant="h6"
                sx={{
                  fontFamily: '"Playfair Display", serif',
                  fontWeight: 700,
                  letterSpacing: '1px',
                  color: '#ffffff',
                }}
              >
                AMG WILDERNESS
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.7, mb: 3 }}>
              Experience the perfect blend of raw nature and upscale luxury. Tucked away in cedar and pine valleys, we offer 5-star mountain sanctuaries.
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
          <Grid item xs={12} sm={6} md={2}>
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

          {/* Contact Details */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#ffffff', mb: 3 }}>
              Reservations
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                <RoomIcon sx={{ color: 'secondary.light', mt: 0.3 }} />
                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.5 }}>
                  AMG Wilderness Sanctuary,<br />
                  Valley Road, Pine Meadows,<br />
                  Uttarakhand, India
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <PhoneIcon sx={{ color: 'secondary.light' }} />
                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                  +91 832 253 2222
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <EmailIcon sx={{ color: 'secondary.light' }} />
                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                  reservations@amgwilderness.com
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Newsletter signup */}
          <Grid item xs={12} md={3}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#ffffff', mb: 3 }}>
              Newsletter
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)', mb: 2, lineHeight: 1.6 }}>
              Subscribe to receive updates about seasonal culinary activities and exclusive camping retreats.
            </Typography>
            
            {subscribed ? (
              <Alert severity="success" sx={{ background: 'rgba(46, 125, 50, 0.1)', color: '#4caf50', border: '1px solid rgba(46, 125, 50, 0.2)' }}>
                Subscribed successfully!
              </Alert>
            ) : (
              <Box component="form" onSubmit={handleSubscribe} sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <TextField
                  placeholder="Your Email Address"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  variant="outlined"
                  size="small"
                  sx={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    borderRadius: 1.5,
                    input: { color: '#ffffff', fontSize: '0.85rem' },
                    '& .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(255,255,255,0.15)' },
                    '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(255,255,255,0.3)' },
                    '& .Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: 'secondary.light' },
                  }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="secondary"
                  sx={{ py: 1.2, fontSize: '0.85rem' }}
                >
                  Subscribe
                </Button>
              </Box>
            )}
          </Grid>
        </Grid>

        <Divider sx={{ my: 6, borderColor: 'rgba(255, 255, 255, 0.1)' }} />

        {/* Deep Footer copyright details */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 2 }}>
          <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.5)' }}>
            © {new Date().getFullYear()} AMG Wilderness Resort & Camping. All Rights Reserved.
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
