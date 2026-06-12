import React from 'react';
import { Box, Container, Grid, Typography, Paper, Divider, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import OutdoorGrillIcon from '@mui/icons-material/OutdoorGrill';
import SpaIcon from '@mui/icons-material/Spa';

const menuItems = [
  {
    category: 'Pre-Booked Meal Packages',
    dishes: [
      {
        name: 'South Indian Thali',
        tags: 'Local Flavours | Pre-Booked',
        desc: 'A wholesome South Indian thali prepared with fresh local ingredients. Rice, sambar, rasam, kootu, pickle, papad, and dessert — a complete and authentic meal rooted in regional tradition.',
      },
      {
        name: 'Kavunji Morning Breakfast',
        tags: 'Complimentary | Daily',
        desc: 'Start your morning with a complimentary South Indian breakfast. Idli, dosa, or upma served with chutney and filter coffee — the perfect start to a day in the mountains.',
      }
    ]
  },
  {
    category: 'Campfire & Evening Snacks',
    dishes: [
      {
        name: 'Mountain Campfire Snacks',
        tags: 'Campfire Experience | Evening',
        desc: 'Gather around the fire as the sun sets behind the Western Ghats. Enjoy freshly prepared evening snacks while the mountain air cools and the stars begin to appear.',
      },
      {
        name: 'Local Fruits & Natural Refreshments',
        tags: 'From the Hills | Fresh Daily',
        desc: 'Seasonal local fruits and fresh mountain-region beverages sourced from nearby farms. Simple, honest refreshments that reflect the character of Kavunji.',
      }
    ]
  }
];

export default function Dining() {
  const theme = useTheme();

  return (
    <Box
      id="dining"
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(180deg, #ffffff 0%, #f0f3f1 100%)',
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
            South Indian Cuisine
          </Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: '2rem', sm: '2.8rem' }, mb: 2 }}>
            Food & Dining at Kavunji
          </Typography>
          
          {/* Elegant Leaf Separator */}
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', my: 3 }}>
            <Box sx={{ width: 50, height: 1, backgroundColor: 'rgba(27, 67, 50, 0.12)' }} />
            <SpaIcon sx={{ mx: 1.5, color: 'secondary.main', fontSize: '1.2rem', transform: 'rotate(45deg)' }} />
            <Box sx={{ width: 50, height: 1, backgroundColor: 'rgba(27, 67, 50, 0.12)' }} />
          </Box>

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ maxWidth: 600, mx: 'auto', fontSize: '1.05rem', lineHeight: '1.6' }}
          >
            We offer pre-booked meal packages focused on authentic South Indian cuisine prepared with local flavours and fresh ingredients. Complimentary breakfast is included with every stay.
          </Typography>
        </Box>

        <Grid container spacing={{ xs: 6, md: 8 }} alignItems="center">
          {/* Campfire Image Grid */}
          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
            >
              <Box sx={{ position: 'relative' }}>
                {/* Border frames */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: -16,
                    left: -16,
                    width: '100%',
                    height: '100%',
                    border: `1.5px solid ${theme.palette.secondary.main}`,
                    borderRadius: 4,
                    zIndex: 1,
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: -16,
                    right: -16,
                    width: '100%',
                    height: '100%',
                    border: `1.5px solid ${theme.palette.primary.main}`,
                    borderRadius: 4,
                    zIndex: 1,
                  }}
                />
                
                {/* Main image */}
                <Box
                  component="img"
                  src="/camping_dining.png"
                  alt="Campfire Gourmet Dining"
                  sx={{
                    position: 'relative',
                    zIndex: 2,
                    width: '100%',
                    height: { xs: 350, sm: 480 },
                    objectFit: 'cover',
                    borderRadius: 4,
                    boxShadow: '0 15px 35px rgba(27, 67, 50, 0.15)',
                  }}
                />

                {/* Overlaid caption card */}
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 24,
                    left: 24,
                    backgroundColor: 'rgba(8, 28, 21, 0.85)',
                    backdropFilter: 'blur(8px)',
                    color: '#ffffff',
                    p: 2.5,
                    borderRadius: 3,
                    zIndex: 3,
                    maxWidth: 260,
                    borderLeft: `4px solid ${theme.palette.secondary.main}`,
                  }}
                >
                  <Typography variant="body2" sx={{ fontStyle: 'italic', opacity: 0.9, lineHeight: 1.6, fontSize: '0.85rem' }}>
                    "Simple food, real flavours. Every meal at TrailNest is prepared with care, using local ingredients and the warmth of South Indian hospitality."
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          </Grid>

          {/* Restaurant Menu Card Grid */}
          <Grid item xs={12} md={7}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
            >
              <Paper
                elevation={6}
                sx={{
                  p: { xs: 4, sm: 5 },
                  borderRadius: 4,
                  background: '#faf9f6', // Warm cream paper
                  border: '1px solid rgba(27, 67, 50, 0.1)',
                  position: 'relative',
                  boxShadow: '0 15px 40px rgba(27, 67, 50, 0.08)',
                  // Double gold border inside
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 12,
                    left: 12,
                    right: 12,
                    bottom: 12,
                    border: '1px solid rgba(217, 119, 6, 0.35)',
                    borderRadius: 3,
                    pointerEvents: 'none',
                  }
                }}
              >
                {/* Menu Header decoration */}
                <Box sx={{ textAlign: 'center', mb: 4, mt: 1 }}>
                  <OutdoorGrillIcon sx={{ color: 'secondary.main', fontSize: '2.2rem', mb: 1 }} />
                  <Typography
                    variant="h5"
                    color="primary"
                    sx={{
                      fontWeight: 800,
                      letterSpacing: '2px',
                      textTransform: 'uppercase',
                      fontSize: '1.4rem'
                    }}
                  >
                    Kavunji Table
                  </Typography>
                  <Typography variant="caption" color="text.secondary" sx={{ textTransform: 'uppercase', letterSpacing: '1px', display: 'block', mt: 0.5 }}>
                    Pre-Booked Meals | Complimentary Breakfast Included
                  </Typography>
                </Box>

                {/* Menu categories list */}
                {menuItems.map((cat, idx) => (
                  <Box key={idx} sx={{ mb: 4 }}>
                    <Typography
                      variant="subtitle2"
                      color="secondary"
                      sx={{
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '1.5px',
                        borderBottom: '1px solid rgba(27, 67, 50, 0.08)',
                        pb: 1,
                        mb: 2.5,
                        textAlign: 'center',
                        fontSize: '0.8rem'
                      }}
                    >
                      {cat.category}
                    </Typography>

                    <Grid container spacing={2.5}>
                      {cat.dishes.map((dish, i) => (
                        <Grid item xs={12} key={i}>
                          <Box sx={{ mb: 1.5 }}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', mb: 0.5 }}>
                              <Typography
                                variant="h6"
                                color="primary"
                                sx={{
                                  fontWeight: 700,
                                  fontSize: '1.05rem',
                                  fontFamily: '"Playfair Display", serif'
                                }}
                              >
                                {dish.name}
                              </Typography>
                              <Typography variant="caption" color="secondary" sx={{ fontWeight: 650, fontStyle: 'italic' }}>
                                {dish.tags}
                              </Typography>
                            </Box>
                            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                              {dish.desc}
                            </Typography>
                          </Box>
                          {i < cat.dishes.length - 1 && <Divider sx={{ opacity: 0.5, borderStyle: 'dotted', my: 1.5 }} />}
                        </Grid>
                      ))}
                    </Grid>
                  </Box>
                ))}
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
