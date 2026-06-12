import React from 'react';
import { Box, Container, Grid, Typography, Paper, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import EastIcon from '@mui/icons-material/East';
import ParkIcon from '@mui/icons-material/Park';
import NightlightIcon from '@mui/icons-material/NightlightRound';
import DoNotDisturbOnIcon from '@mui/icons-material/DoNotDisturbOn';
import OutdoorGrillIcon from '@mui/icons-material/OutdoorGrill';
import SpaIcon from '@mui/icons-material/Spa';

const philosophyPoints = [
  {
    icon: <DoNotDisturbOnIcon color="primary" sx={{ fontSize: '1.8rem' }} />,
    title: 'Digital Detox',
    desc: 'Unplug from notifications, schedules, and screens. We encourage checking in your devices to enjoy undivided presence.',
  },
  {
    icon: <ParkIcon color="primary" sx={{ fontSize: '1.8rem' }} />,
    title: 'Forest Bathing',
    desc: 'Immerse in nature-guided therapy walks. Connect with the ancient scent of pine trees and the soothing rush of mountain waters.',
  },
  {
    icon: <OutdoorGrillIcon color="primary" sx={{ fontSize: '1.8rem' }} />,
    title: 'Slow Fire Gastronomy',
    desc: 'Dining as a ritual. Enjoy rustic, wood-smoke grilled dishes prepared slowly over hot charcoal under string lights.',
  },
  {
    icon: <NightlightIcon color="primary" sx={{ fontSize: '1.8rem' }} />,
    title: 'Star Guided Rest',
    desc: 'Restore your natural sleep cycle. Fall asleep to the crackle of logs and the starry, dark mountain skies.',
  },
];

export default function About() {
  const theme = useTheme();

  return (
    <Box
      id="about"
      sx={{
        py: { xs: 8, md: 14 },
        background: '#ffffff',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        {/* Row 1: Bogmallo Asymmetrical Overlapping Block */}
        <Grid container alignItems="center" sx={{ mb: { xs: 8, md: 12 } }}>
          {/* Overlapping Text Card on Left */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              position: 'relative',
              zIndex: 3,
              order: { xs: 2, md: 1 },
              pr: { md: 4 }
            }}
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 4, sm: 5, md: 6 },
                  background: '#faf9f6', // Warm cream paper
                  borderRadius: 4,
                  border: '1px solid rgba(27, 67, 50, 0.06)',
                  boxShadow: { xs: '0 10px 30px rgba(0,0,0,0.03)', md: '15px 15px 40px rgba(27, 67, 50, 0.05)' },
                  marginRight: { md: '-48px' }, // Overlaps the right image slightly
                }}
              >
                <Typography
                  variant="subtitle2"
                  color="secondary"
                  sx={{
                    textTransform: 'uppercase',
                    fontWeight: 700,
                    letterSpacing: '2px',
                    mb: 1.5,
                    fontSize: '0.75rem',
                  }}
                >
                  Simple Stays, Real Peace
                </Typography>
                <Typography
                  variant="h2"
                  sx={{
                    mb: 3,
                    fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                    lineHeight: '1.2',
                    fontFamily: '"Playfair Display", serif',
                    fontWeight: 800,
                  }}
                >
                  The Philosophy of Slow Living
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{
                    fontSize: '1rem',
                    lineHeight: '1.75',
                    mb: 4.5,
                  }}
                >
                  At TrailNest, we believe true luxury lies in simplicity. Modern life is filled with calendars, deadlines, and notifications. We created TrailNest to be an antidote to the hustle. Our sanctuaries feature no clocks, no alarms, and no commercial transactions. Instead, we offer space to breathe, a crackling campfire to gather around, and rustic-premium shelters nestled in pristine valleys.
                </Typography>

                {/* Custom circular arrow micro-interaction button inspired by Bogmallo */}
                <Box
                  component="a"
                  href="#destinations"
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 2,
                    textDecoration: 'none',
                    color: 'primary.main',
                    fontWeight: 700,
                    fontSize: '0.85rem',
                    letterSpacing: '1.5px',
                    textTransform: 'uppercase',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      color: 'secondary.main',
                      '& .circle-arrow': {
                        backgroundColor: 'primary.main',
                        borderColor: 'primary.main',
                        color: 'secondary.light',
                      },
                      '& .arrow-icon': {
                        transform: 'translateX(4px)',
                      }
                    }
                  }}
                >
                  <Box
                    className="circle-arrow"
                    sx={{
                      width: 44,
                      height: 44,
                      borderRadius: '50%',
                      border: '1px solid rgba(27, 67, 50, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.3s ease',
                      color: 'primary.main',
                    }}
                  >
                    <EastIcon className="arrow-icon" sx={{ fontSize: '1.1rem', transition: 'transform 0.3s ease' }} />
                  </Box>
                  Find Out More
                </Box>
              </Paper>
            </motion.div>
          </Grid>

          {/* Image Block on Right */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              position: 'relative',
              zIndex: 2,
              order: { xs: 1, md: 2 }
            }}
          >
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
            >
              <Box
                component="img"
                src="/hero_background.png"
                alt="Glamping Mountain Landscape"
                sx={{
                  width: '100%',
                  height: { xs: 320, sm: 420, md: 520 },
                  objectFit: 'cover',
                  borderRadius: 4,
                  boxShadow: '0 15px 35px rgba(27, 67, 50, 0.12)',
                }}
              />
            </motion.div>
          </Grid>
        </Grid>

        {/* Separator Divider */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', my: 8 }}>
          <Box sx={{ width: 60, height: 1, backgroundColor: 'rgba(27, 67, 50, 0.1)' }} />
          <SpaIcon sx={{ mx: 2, color: 'secondary.main', fontSize: '1rem', transform: 'rotate(45deg)' }} />
          <Box sx={{ width: 60, height: 1, backgroundColor: 'rgba(27, 67, 50, 0.1)' }} />
        </Box>

        {/* Row 2: Grid of 4 Philosophy Pillars */}
        <Box sx={{ textAlign: 'center', mb: 7 }}>
          <Typography
            variant="h4"
            color="primary"
            sx={{
              fontFamily: '"Playfair Display", serif',
              fontWeight: 800,
              fontSize: { xs: '1.6rem', sm: '2rem' }
            }}
          >
            The Four Pillars of Restoration
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {philosophyPoints.map((p, i) => (
            <Grid item xs={12} sm={6} md={3} key={i}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    height: '100%',
                    background: 'rgba(27, 67, 50, 0.015)',
                    border: '1px solid rgba(27, 67, 50, 0.04)',
                    borderRadius: 3,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      background: '#ffffff',
                      borderColor: 'secondary.light',
                      transform: 'translateY(-4px)',
                      boxShadow: '0 10px 35px rgba(27, 67, 50, 0.06)'
                    }
                  }}
                >
                  <Box
                    sx={{
                      p: 1.5,
                      height: 52,
                      width: 52,
                      borderRadius: 2,
                      backgroundColor: 'rgba(27, 67, 50, 0.05)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 2.5,
                      color: 'primary.main',
                    }}
                  >
                    {p.icon}
                  </Box>
                  <Typography variant="h6" color="primary" sx={{ fontSize: '1.05rem', fontWeight: 800, mb: 1, fontFamily: '"Playfair Display", serif' }}>
                    {p.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                    {p.desc}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
