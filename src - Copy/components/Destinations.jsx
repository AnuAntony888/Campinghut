import React from 'react';
import { Box, Container, Grid, Typography, Button, Paper, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const nestLocations = [
  {
    id: 'kodaikanal',
    name: 'Kodaikanal',
    subname: 'Kavunji Valley',
    status: 'Sanctuary Open',
    image: '/dest_kodaikanal.png',
    desc: 'Perched in the misty heights of Kavunji. Experience cloud-kissed peaks, emerald valleys, organic pear orchards, and pure mountain streams.',
  },
  {
    id: 'ooty',
    name: 'Ooty',
    subname: 'Nilgiri Slopes',
    status: 'Active Nest',
    image: '/dest_ooty.png',
    desc: 'Nestled beside rolling emerald green tea estates. Wake up to fragrant cool breezes, pine-cone carpeted trails, and pristine forest walks.',
  },
  {
    id: 'wayanad',
    name: 'Wayanad',
    subname: 'Rainforest Sanctuary',
    status: 'Active Nest',
    image: '/dest_wayanad.png',
    desc: 'Immerse in lush evergreen canopy environments. Rest under towering rainforest shelters, listening to waterfalls and jungle bird songs.',
  },
  {
    id: 'kannur',
    name: 'Kannur',
    subname: 'Secluded Shore',
    status: 'Active Nest',
    image: '/dest_kannur.png',
    desc: 'Where mountains meet ocean breeze. Camp in palm-fringed coastal meadows, falling asleep to the rhythmic lull of Arabian Sea waves.',
  },
  {
    id: 'coorg',
    name: 'Coorg',
    subname: 'Coffee Estates',
    status: 'Active Nest',
    image: '/dest_coorg.png',
    desc: 'Secluded in fragrant coffee plantation hills. Hike through bamboo groves, watch riverbeds, and sip freshly brewed local arabica coffee.',
  },
];

export default function Destinations({ onNotifyLocation }) {
  return (
    <Box
      id="destinations"
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(180deg, #f0f3f1 0%, #e3e8e4 50%, #f0f3f1 100%)',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', mb: 9 }}>
          <Typography
            variant="subtitle2"
            color="secondary"
            sx={{
              textTransform: 'uppercase',
              fontWeight: 700,
              letterSpacing: '2px',
              mb: 1,
            }}
          >
            Explore the Nests
          </Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: '2rem', sm: '2.8rem' }, mb: 2 }}>
            Our Sanctuaries
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ maxWidth: 600, mx: 'auto', fontSize: '1.05rem', lineHeight: '1.6' }}
          >
            Discover our handpicked retreats situated in India's most pristine valleys, each offering direct connection to nature and luxurious peace.
          </Typography>
        </Box>

        {/* Circular Cards Grid */}
        <Grid container spacing={4} justifyContent="center">
          {nestLocations.map((loc, idx) => (
            <Grid item xs={12} sm={6} md={4} lg={2.4} key={loc.id} sx={{ display: 'flex' }}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                style={{ width: '100%', display: 'flex' }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    background: 'rgba(255, 255, 255, 0.75)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(27, 67, 50, 0.06)',
                    borderRadius: 4,
                    p: 3,
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '100%',
                    height: '100%',
                    boxShadow: '0 10px 30px rgba(27, 67, 50, 0.03)',
                    transition: 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 20px 45px rgba(27, 67, 50, 0.12)',
                      borderColor: 'secondary.light',
                      background: 'rgba(255, 255, 255, 0.95)',
                      '& .outer-gold-ring': {
                        transform: 'rotate(90deg) scale(1.05)',
                        borderColor: 'secondary.main',
                      },
                      '& .circle-avatar': {
                        transform: 'scale(1.04)',
                      }
                    },
                  }}
                >
                  {/* Perfect Circle Frame with outer golden dashed ring */}
                  <Box sx={{ position: 'relative', width: 160, height: 160, mb: 3, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {/* Golden dashed outer ring */}
                    <Box
                      className="outer-gold-ring"
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        borderRadius: '50%',
                        border: '2px dashed rgba(217, 119, 6, 0.4)',
                        transition: 'transform 0.6s cubic-bezier(0.25, 0.8, 0.25, 1), border-color 0.4s ease',
                      }}
                    />
                    
                    {/* Inner Pine Ring & Avatar */}
                    <Box
                      className="circle-avatar"
                      sx={{
                        position: 'relative',
                        width: 142,
                        height: 142,
                        borderRadius: '50%',
                        overflow: 'hidden',
                        border: '3px solid #1b4332',
                        background: '#ffffff',
                        boxShadow: '0 4px 15px rgba(27,67,50,0.1)',
                        transition: 'transform 0.5s ease',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Box
                        component="img"
                        src={loc.image}
                        alt={loc.name}
                        sx={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                        }}
                      />
                    </Box>
                  </Box>

                  {/* Status Chip */}
                  <Chip
                    label={loc.status}
                    size="small"
                    sx={{
                      backgroundColor: loc.id === 'kodaikanal' ? 'rgba(217, 119, 6, 0.08)' : 'rgba(27, 67, 50, 0.05)',
                      color: loc.id === 'kodaikanal' ? 'secondary.dark' : 'primary.main',
                      fontWeight: 700,
                      fontSize: '0.7rem',
                      letterSpacing: '0.5px',
                      textTransform: 'uppercase',
                      mb: 2,
                      border: `1px solid ${loc.id === 'kodaikanal' ? 'rgba(217, 119, 6, 0.2)' : 'rgba(27, 67, 50, 0.1)'}`,
                    }}
                  />

                  {/* Title & Coordinates */}
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0.5, mb: 0.5 }}>
                    <LocationOnIcon sx={{ color: 'secondary.main', fontSize: '1.25rem' }} />
                    <Typography
                      variant="h6"
                      color="primary"
                      sx={{
                        fontWeight: 800,
                        fontSize: '1.25rem',
                        fontFamily: '"Playfair Display", serif',
                      }}
                    >
                      {loc.name}
                    </Typography>
                  </Box>
                  
                  <Typography variant="subtitle2" color="text.secondary" sx={{ fontStyle: 'italic', mb: 1.5, fontSize: '0.8rem' }}>
                    {loc.subname}
                  </Typography>

                  {/* Little Separator */}
                  <Box sx={{ width: 32, height: 2, backgroundColor: 'secondary.light', mb: 2, borderRadius: 1 }} />

                  {/* Description */}
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      fontSize: '0.85rem',
                      lineHeight: 1.6,
                      mb: 1,
                      flexGrow: 1,
                      px: 0.5,
                    }}
                  >
                    {loc.desc}
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
